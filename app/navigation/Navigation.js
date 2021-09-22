import React from 'react';
import {createStackNavigator} from '@react-navigator/stack';

import MainScreen from '../screens/MainScreen';
import History from '../screens/History';

const Stack = createStackNavigator();

const Navigation = () => {
    <Stack.Navigator >
        <Stack.Screen name = "Main" component = {MainScreen}/>
        <Stack.Screen name = "History" component={History}/>
    </Stack.Navigator>
}

export default Navigation;
