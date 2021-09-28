import React, { useState } from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

import Screen from '../component/Screen';
import AppText from '../component/AppText';
import defaultProps from '../config/defaultProps';
import MyButton from '../component/MyButton';
import data from '../config/data';

let init = 0;

function MainScreen({navigation, route}) {
    
    const incomingData = route.params;
    const [money, setMoney] = useState(0);
    const values = data;

    function getIndex() {
        init +=1; 
        return init;
    }
    
    function addValue(currentMoney, currentCategory, amountTook, atTime) {
        values.push({
        index: getIndex(),
        money : currentMoney,
        category: currentCategory,
        amount: amountTook,
        time: atTime});
    }
    // setMoney(money + incomingData.money);
    // addValue(money, incomingData.category, incomingData.money, new Date().toLocaleString());

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

                addValue(money, incomingData.category, incomingData.money, new Date().toLocaleString());

            }}/>
        </Screen>
    )

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