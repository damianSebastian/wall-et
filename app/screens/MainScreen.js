import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AppIconButtons from '../component/AppIconButtons';
import MyButton from '../component/MyButton';
import Screen from '../component/Screen';
import AppText from '../component/AppText';
import defaultProps from '../config/defaultProps';

function MainScreen() {
    const [money, setMoney] = useState(0);


    return (
        <Screen>
            <View style={styles.buttons}>
                <View style={styles.addButton}>
                    <AppIconButtons iconName="credit-card-plus-outline"
                        onPress={() => setMoney(money + 100)}
                        size={66}
                    />
                    <AppText text="Add money" style={defaultProps.mainText} />

                </View>
                <View style={styles.takeButton}>
                    <AppIconButtons iconName="credit-card-minus-outline"
                        onPress={() => setMoney(money - 100)}
                        size={66}
                    />
                    <AppText text="Take money" style={defaultProps.mainText} />
                </View>
            </View>
            <View style={styles.balance}>
                <AppText text={money + " RON"} style={styles.balanceText} />

            </View>
        </Screen>
    )
}

export default MainScreen;

const styles = StyleSheet.create({
    addButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    takeButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
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
    }
})