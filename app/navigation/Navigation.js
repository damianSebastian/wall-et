import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from '../screens/MainScreen';
import History from '../screens/History';
import AddMoney from '../screens/AddMoney';
import TakeMoney from '../screens/TakeMoney';
import defaultProps from '../config/defaultProps';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator backBehavior = 'none' initialRouteName = "Main">
            <Stack.Screen name = "Main" component = {MainScreen}
            options={{ title:"Wall-et", 
            headerLeft: false,
            headerTitleStyle: defaultProps.titletext,
            headerTitleAlign:'center',
            headerStyle:{backgroundColor: defaultProps.colors.lightButton, height: 70}}}/>
            <Stack.Screen name = "History" component={History}
            options={{ title:"History", 
            headerTitleAlign:'center',
            headerTitleStyle: defaultProps.titletext,
            headerStyle:{backgroundColor: defaultProps.colors.lightButton, height: 70}}}/>
            <Stack.Screen name = "AddMoney" component={AddMoney}
            options={{ title:"Wall-et", 
            headerTitleStyle: defaultProps.titletext,
            headerTitleAlign:'center',
            headerStyle:{backgroundColor: defaultProps.colors.lightButton, height: 70}}}/>
            <Stack.Screen name = "TakeMoney" component={TakeMoney}
            options={{ title:"Wall-et", 
            headerTitleStyle: defaultProps.titletext,
            headerTitleAlign:'center',
            headerStyle:{backgroundColor: defaultProps.colors.lightButton, height: 70}}}/>
        </Stack.Navigator>

    )
}

export default Navigation;
