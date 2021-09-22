import React, { useState } from 'react';
import { StyleSheet, View} from 'react-native';

import Screen from '../component/Screen';
import AppText from '../component/AppText';
import defaultProps from '../config/defaultProps';

import AddMoney from '../component/AddMoney';
import TakeMoney from '../component/TakeMoney';
import MyButton from '../component/MyButton';

function MainScreen() {
    const [allValues, setAllValues] = useState({
        money: 0,
        category:'',
        amount:0,
    });


    return (
        <Screen>
            <View style={styles.buttons}>

                <AddMoney
                // onSave={() => console.log("save presed")}
                onInputMoney={(input) => setAllValues({ ...allValues, amount:parseInt(input), money: allValues.money + allValues.amount})}/>
                <TakeMoney selectedItem={allValues.category} 
                onSelectItem={(item) => setAllValues({ ...allValues, category: item})}
                onMoneySpend={(amount) => setAllValues({ ...allValues,amount: parseInt(amount) ,money: allValues.money - allValues.amount})} />
            </View>
            <View style={styles.balance}>
                <AppText text={allValues.money + " RON"} style={styles.balanceText} />
            </View>
            {/* acest buton va afisa toate intrarile si iesirile */}
            <MyButton title="History" onPress={ () => console.log("history pressed")}/>

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