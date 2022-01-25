import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import History from '../screens/History';
import defaultProps from '../config/defaultProps';
import MyScreen from '../screens/MyScreen';
import WaitingScreen from '../screens/WaitingScreen';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator backBehavior = 'none' initialRouteName = "Wait">
            <Stack.Screen name= "Wait" component = {WaitingScreen} options={{headerShown: false}}/>
            
            <Stack.Screen name = "Main" component = {MyScreen}
            options={{ title:"Wall-et", 
            headerLeft: false,
            headerTitleStyle: defaultProps.titletext,
            headerTitleAlign:'center',
            headerStyle:{backgroundColor: defaultProps.colors.lightButton, height: 70}}}/>
            <Stack.Screen name = "History" component={History}
            options={{ title:"History", 
            headerTitleAlign:'center',
            headerTitleStyle: defaultProps.titletext,
            headerStyle:{backgroundColor: defaultProps.colors.lightButton, height: 90}}}/>
            
        </Stack.Navigator>

    )
}

export default Navigation;
