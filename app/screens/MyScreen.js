import React, { useEffect, useState, useRef } from 'react';
import {Dimensions, StyleSheet, View, FlatList, Modal, Alert, Keyboard} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Screen from '../component/Screen';
import AppText from '../component/AppText';
import defaultProps from '../config/defaultProps';
import MyButton from '../component/MyButton';
import MyTextInput from '../component/MyTextInput';
import AppIconButtons from '../component/AppIconButtons';
import PickerComponent from '../component/PickerComponent';
import ListSeparator from '../component/ListSeparator';
import categories from '../config/categories';


const save = async(key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        throw new Error(error);
    }
}

let initIndex = 0;
let values = [];
let initMoney = 0;

AsyncStorage.clear();
AsyncStorage.getAllKeys((err, keys) => {
    AsyncStorage.multiGet(keys, (error, stores) => {
        stores.map((result, i, store) => {           
            
            if(store[i][0] === 'values') {
                if(store[i][1] !== undefined) {
                    values = JSON.parse(store[i][1]);
                } 
            }
            if(store[i][0] === 'index') {
                if(store[i][1] !== undefined) {
                    initIndex = parseInt(store[i][1]);
                }
            }
            if(store[i][0] === 'money') {
                if(store[i][1] !== undefined) {
                    initMoney = parseInt(store[i][1]);
                }
            }
            console.log({ [store[i][0]]: store[i][1] });
            return true;
        });
    });
});

function MainScreen({navigation}) {
    
    const [allValues, setAllValues] = useState({
        totalMoney : initMoney,
        deposit: 0,
        modalVisible : false,
        category: 'Choose a category',
    })

    useEffect(()=> {
        
            addValue(allValues.deposit, allValues.category, allValues.totalMoney);
            save('values', values); 
            save('index', initIndex); 
            save('money', allValues.totalMoney);                    

        
        Keyboard.dismiss();  
          
        
    }, [allValues.totalMoney])

    useEffect(() => {
        setAllValues({ ...allValues,modalVisible: false});
        
    },[allValues.category])  

    return (
    <Screen>

        <MyButton title="History" onPress={() => {navigation.navigate("History", values)}}/>    

        <MyButton title="Take"
            onPress={() => {
                if(!isNaN(allValues.deposit)) {
                   setAllValues({ ...allValues, totalMoney : allValues.totalMoney + allValues.deposit}); 
                } else {
                    Alert.alert('Enter data');
                }
                

            }}/>

        <MyTextInput iconName= "credit-card-minus-outline"         
        onChangeText={(amountt) => {       
            if(isNaN(amountt)) {
               Alert.alert("Invalid value", "You must enter numbers") 
            } 
            else {
                setAllValues({ ...allValues, deposit: -parseInt(amountt)});

            }
            
        }}
        refFunction={input => {textInput = input}}
        
        placeholder={allValues.category}/>

        <Modal visible={allValues.modalVisible} 
        animationType= "fade"
        onRequestClose ={() => setAllValues({ ...allValues, modalVisible: false})}>              
        
            <FlatList
            data={categories}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({item}) =>
            <PickerComponent 
            label={item.label}
            onPress={() => {
                setAllValues({ ...allValues,category: item.label});
            }}/>}
            ItemSeparatorComponent = {() => <ListSeparator/>}
            />
        </Modal>

        <AppIconButtons iconName='menu'
                onPress ={() => setAllValues({ ...allValues, modalVisible: true})}/>    

        <MyButton title='Add '
            onPress={() => {
                if(!isNaN(allValues.deposit)) {
                    setAllValues({ ...allValues, totalMoney : allValues.totalMoney + parseInt(allValues.deposit), category : 'Deposit'});
                            
                } else {
                    Alert.alert('Enter data');
                } 
              
            }}/>

        <MyTextInput iconName= "credit-card-plus-outline" placeholder="Write here to deposit... "     
            onChangeText={(amount) => {
               
                if(isNaN(amount)) Alert.alert("Invalid value", "You must enter numbers")
                else setAllValues({ ...allValues, deposit: parseInt(amount)});
                
            }}
            
            
        />

        <View style={styles.balance}>
            <AppText text={allValues.totalMoney+ " RON"} style={styles.balanceText} />
        </View>
    </Screen>
    )
}

export default MainScreen;

function incrementIndex() {

    initIndex +=1; 
}



function addValue(amount,category,money) {  
    
    values.unshift({
        index:initIndex,
        amount: amount,
        category: category,
        money: money,
        time: new Date().toLocaleString(),
    }); 
    incrementIndex();           
}


const styles = StyleSheet.create({
    
    buttons: {
        backgroundColor: defaultProps.colors.firstBackground,
        elevation: 10,
        borderRadius: 15,
        margin: 17,
        height: 140,
        width: Dimensions.get("screen").width - 20,
        flexDirection: 'row-reverse',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    balanceText: {
        fontSize: 60,
        fontFamily: "Roboto",
        color: defaultProps.colors.text,
    },
    balance: {
        backgroundColor: defaultProps.colors.firstBackground,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 300,
        margin: 17,
        height: 70,
        borderRadius: 15,
    },
})