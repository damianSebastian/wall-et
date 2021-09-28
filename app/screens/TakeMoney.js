import React, { useState } from 'react';
import { View, StyleSheet, Modal, FlatList, Alert} from 'react-native';


import MyTextInput from '../component/MyTextInput';
import PickerComponent from '../component/PickerComponent';
import AppIconButtons from '../component/AppIconButtons';

const categories = [
    { label : "Food", value:  1},
    { label : "Alcoohol", value:  2},
    { label : "Clothes", value:  3},
    { label : "Gifts", value:  4},
    { label : "Needs", value:  5},
]

function TakeMoney({onFinish, navigation}) {
    const [allValues, setAllValues] = useState({
        modalVisible: false,
        money:0,
        category: '',
    });
    
    return (      
    <React.Fragment>
            
            <View style={{alignItems: 'center'}}>

                <AppIconButtons iconName = "credit-card-minus-outline" 
                onPress ={() => setAllValues({ ...allValues, modalVisible: true})}/>

                <MyTextInput iconName= "credit-card-minus-outline" 
                onChangeText={(amount) => {
                    if(isNaN(amount)) Alert.alert("Invalid value", "You must enter numbers");
                    else setAllValues({ ...allValues, money : -parseInt(amount)})
                }}
                placeholder={allValues.category}/>

                <AppIconButtons iconName="credit-card-minus-outline"
                        onPress={() => {
                            setAllValues({ ...allValues, modalVisible: false});
                            
                            let obj = {money: allValues.money, category: allValues.category};
                            navigation.navigate("Main", obj);
                        }}
                        
                        size={89}
                    />
            </View>
        

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
                setAllValues({ ...allValues,category: item.label ,modalVisible: false});
            }}/>}
            />
        </Modal>
    </React.Fragment>
    );
}

const styles = StyleSheet.create({
    takeButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default TakeMoney;