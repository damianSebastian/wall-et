import React, { useState } from 'react';
import { View, StyleSheet, Modal, FlatList, Alert} from 'react-native';

import MyTextInput from '../component/MyTextInput';
import PickerComponent from '../component/PickerComponent';
import MyButton from '../component/MyButton';
import defaultProps from '../config/defaultProps';
import ListSeparator from '../component/ListSeparator';
import Screen from '../component/Screen';

const categories = [
    { label : "Food", value:  1},
    { label : "Alcoohol", value:  2},
    { label : "Clothes", value:  3},
    { label : "Gifts", value:  4},
    { label : "Needs", value:  5},
]

function TakeMoney({navigation}) {
    const [allValues, setAllValues] = useState({
        modalVisible: false,
        money:0,
        category: '',
    });
    
    return (      
    <Screen>
            
            <View style={styles.container}>
                
                    <MyButton title='Category' style={defaultProps.mainText} size={90}
                    onPress ={() => setAllValues({ ...allValues, modalVisible: true})}/>
                
                <MyTextInput iconName= "credit-card-minus-outline" 
                onChangeText={(amount) => {
                    if(isNaN(amount)) Alert.alert("Invalid value", "You must enter numbers");
                    else setAllValues({ ...allValues, money : -parseInt(amount)})
                }}
                placeholder={allValues.category}/>

                <MyButton title="SAVE"
                        onPress={() => {
                            setAllValues({ ...allValues, modalVisible: false});
                            
                            let obj = {money: allValues.money, category: allValues.category};
                            navigation.navigate("Main", obj);
                        }}                      
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
            ItemSeparatorComponent = {() => <ListSeparator/>}
            />
        </Modal>
    </Screen>
    );
}

const styles = StyleSheet.create({
   container: {
       alignItems: 'center',
        justifyContent:'center', 
        flex: 1, backgroundColor:defaultProps.colors.secondBackground}
})

export default TakeMoney;