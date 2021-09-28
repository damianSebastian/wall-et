import React from 'react';
import { View, StyleSheet, TextInput, Dimensions } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultProps from '../config/defaultProps';


function MyTextInput({iconName, placeholder, keyboard="number-pad", onChangeText}) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name={iconName} size={30} color={defaultProps.colors.purple} style={styles.icon}/>
            <TextInput placeholder={placeholder}           
            keyboardType={keyboard}
            style={[defaultProps.mainText]}
            onChangeText= {onChangeText}          
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultProps.colors.firstBackground,
        height: 60,
        width:Dimensions.get('screen').width - 25,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,       

    },
    icon: {
        margin:10,
    }
})

export default MyTextInput;