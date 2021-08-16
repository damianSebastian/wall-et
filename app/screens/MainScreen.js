import React, { useState } from 'react';
import { StyleSheet, View} from 'react-native';

import Screen from '../component/Screen';
import AppText from '../component/AppText';
import defaultProps from '../config/defaultProps';

import AddMoney from '../component/AddMoney';
import TakeMoney from '../component/TakeMoney';

function MainScreen() {
    const [allValues, setAllValues] = useState({
        money: 100,
        category:"",
    });
    return (
        <Screen>
            <View style={styles.buttons}>
                <AddMoney 
                onInputMoney={(input) => setAllValues({ ...allValues, money: allValues.money + parseInt(input)})}/>
                <TakeMoney selectedItem={allValues.category} 
                onSelectItem={(item) => setAllValues({ ...allValues, category: item})}
                onMoneySpend={(amount) => setAllValues({ ...allValues, money: allValues.money - parseInt(amount)})} />
            </View>
            <View style={styles.balance}>
                <AppText text={allValues.money + " RON"} style={styles.balanceText} />
            </View>
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