import React, { useState } from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Screen from '../component/Screen';
import AppText from '../component/AppText';
import defaultProps from '../config/defaultProps';
import MyButton from '../component/MyButton';

let init = 0;
const values = [
    {index: 0, money: 0, category:'', amount: 0, time: '9:00'},
];
AsyncStorage.clear();
let saved = false;
function MainScreen({navigation, route}) {
    // incarcarea datelor trebuie facuta la inceput
    
    
    AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (error, stores) => {
            stores.map((result, i, store) => {
                
                console.log({ [store[i][0]]: store[i][1] });
                return true;
            });
        });
    });
    
    
    const incomingData = route.params;
    
    const [money, setMoney] = useState(0);
    
    
    function getIndex() {
        init +=1; 
        return init;
    }

    function addValue(currentMoney, currentCategory, amountTook, atTime) {
        const index = getIndex();
        let temp = {
            index: index,
            money : currentMoney,
            category: currentCategory,
            amount: amountTook,
            time: atTime};
        values.push(temp);
        save(index+ '.', temp);           
    }

    const save = async(key, value) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            throw new Error(error);
        }
    }

    const load = async(key) => {
        try {
            const temp = JSON.parse(await AsyncStorage.getItem(key));
            return JSON.parse(temp);
        } catch (error) {
            throw new Error(error);
        }
    }

    return (
        <Screen>
            <View style={styles.buttons}>

                <MyButton title='Add '
                onPress={() => {
                    saved = false
                    navigation.navigate("AddMoney") 
                }}/>
                <MyButton title="History" onPress={() => {navigation.navigate("History", values)
            }}/>
                <MyButton title="Take"
                onPress={() => {
                    saved = false;
                    navigation.navigate("TakeMoney")}}/>

            </View>

            <MyButton title="Save" onPress={() => {
                if(!saved) {
                    setMoney(money + incomingData.money);
                    addValue(money, incomingData.category, incomingData.money, new Date().toLocaleString());
                    for (const i of values) {
                        console.log(i);
                    }
                    saved = true;

                }
                
            }}/>

            <View style={styles.balance}>
                <AppText text={money + " RON"} style={styles.balanceText} />
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