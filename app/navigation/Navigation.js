import React from 'react';
import { } from 'react-native';
import {createStackNavigator} from '@react-navigator/stack';
import MainScreen from '../screens/MainScreen';
import AddMoney from '../screens/AddMoney';
import TakeMoney from '../screens/TakeMoney';

const Stack = createStackNavigator();

const Navigation = () => {
    <Stack.Navigator >
        <Stack.Screen name = "Main" component = {MainScreen}/>
        <Stack.Screen name = "Add Money" component={AddMoney}/>
        <Stack.Screen name = "Take Money" component={TakeMoney}/>
    </Stack.Navigator>
}

export default Navigation;
