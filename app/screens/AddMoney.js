import React, { useState } from 'react';
import { View, StyleSheet, Alert, Dimensions} from 'react-native';

import AppIconButtons from '../component/AppIconButtons';
import MyTextInput from '../component/MyTextInput';

function AddMoney({navigation}) {
    const [money, setMoney] = useState(0);
    
    return (    
        <View style={styles.container}>

        <MyTextInput iconName= "credit-card-plus-outline" placeholder="Write here..."
        
        onChangeText={(amount) => {
            if(isNaN(amount)) Alert.alert("Invalid value", "You must enter numbers");
            else setMoney(parseInt(amount))
            
        }}/>

        <AppIconButtons iconName="credit-card-plus-outline"
    
            onPress={() => {
                
                let obj = { money: money, category:'Deposit'};
                navigation.navigate("Main", obj);
            }}
            
            size={70}
        />
        </View>

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
        top: Dimensions.get('screen').height/3,
        
        
        
    }

})

export default AddMoney;