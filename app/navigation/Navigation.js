import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from '../screens/MainScreen';
import History from '../screens/History';
import AddMoney from '../screens/AddMoney';
import TakeMoney from '../screens/TakeMoney';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator backBehavior = 'none' initialRouteName = "Main">
            <Stack.Screen name = "Main" component = {MainScreen}/>
            <Stack.Screen name = "History" component={History}/>
            <Stack.Screen name = "AddMoney" component={AddMoney}/>
            <Stack.Screen name = "TakeMoney" component={TakeMoney}/>
        </Stack.Navigator>

    )
}

export default Navigation;
