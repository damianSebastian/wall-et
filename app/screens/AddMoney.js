import React, { useState } from 'react';
import { View, StyleSheet, Alert, Dimensions} from 'react-native';

import MyButton from '../component/MyButton';
import MyTextInput from '../component/MyTextInput';
import Screen from '../component/Screen';
import defaultProps from '../config/defaultProps';

function AddMoney({navigation}) {
    const [money, setMoney] = useState(0);
    
    return (    
        <Screen style={styles.container}>

            <MyTextInput iconName= "credit-card-plus-outline" placeholder="Write here..."
        
            onChangeText={(amount) => {
                if(isNaN(amount)) Alert.alert("Invalid value", "You must enter numbers");
                else setMoney(parseInt(amount))
                
            }}/>

            <MyButton title="SAVE"
    
            onPress={() => {               
                let obj = { money: money, category:'Deposit'};
                navigation.navigate("Main", obj);
            }}          
        />
        </Screen>

    );
}

const styles = StyleSheet.create({
    addButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center', 
        flex:1,
        backgroundColor: defaultProps.colors.secondBackground,
            
    }

})

export default AddMoney;