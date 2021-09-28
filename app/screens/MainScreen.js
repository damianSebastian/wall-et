import React, { useState } from 'react';
import { Dimensions, StyleSheet, View} from 'react-native';

import Screen from '../component/Screen';
import AppText from '../component/AppText';
import defaultProps from '../config/defaultProps';
import MyButton from '../component/MyButton';

let values = [
    {index: 1, money: 200, category:'', amount: 0, time: '9:00'},
    {index: 2, money: 100, category:'Food', amount: 100, time: '10:00'},
    {index: 3, money: 0, category:'Food', amount: 100, time: '12:00'},
    {index: 4, money: 100, category: 'Deposit', amount: 100, time : '13:00'},
    {index: 5, money: 200, category: 'Deposit',amount: 100, time : '14:00'},
    {index: 6, money: 300, category: 'Deposit',amount: 100, time : '15:00'},
];

function MainScreen({navigation, route}) {
    
    const incomingData = route.params;
    const [money, setMoney] = useState(0);

    let init= 6;
    function count() {
        init +=1; 
        return init;
    }
    
    function addInput(currentMoney, currentCategory,amountTook, atTime) {
        values.push({
        index: count(),
        money : currentMoney,
        category: currentCategory,
        amount: amountTook,
        time: atTime});
    }

    
    return (
        <Screen>
            <View style={styles.buttons}>

                <MyButton title='Add money'
                onPress={() => navigation.navigate("AddMoney")}/>
                <MyButton title="Take money"
                onPress={() => navigation.navigate("TakeMoney")}/>

            </View>

            <View style={styles.balance}>
                <AppText text={money + " RON"} style={styles.balanceText} />
            </View>

            <MyButton title="History" onPress={() => navigation.navigate("History", values)}/>

            <MyButton title="Save" onPress={() => {
                setMoney(money + incomingData.money);
                addInput(money, incomingData.category, incomingData.money, getTime());

            }}/>
        </Screen>
    )
    function getTime() {
        return new Date().toDateString();
    }
}



export default MainScreen;

const styles = StyleSheet.create({

    buttons: {
        backgroundColor: defaultProps.colors.firstBackground,
        elevation: 10,
        borderRadius: 15,
        margin: 17,
        height: 140,
        width: Dimensions.get("window").width - 20,
        flexDirection: 'row-reverse',
        justifyContent: 'space-evenly',
    },
    balanceText: {
        fontSize: 50,
        fontFamily: "Roboto",
        color: defaultProps.colors.text,
    },
    balance: {
        backgroundColor: defaultProps.colors.firstBackground,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 200,
        margin: 17,
        height: 70,
        borderRadius: 15,
    },

})