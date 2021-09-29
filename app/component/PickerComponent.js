import React from 'react';
import {StyleSheet, TouchableOpacity } from 'react-native';

import defaultProps from '../config/defaultProps';
import AppText from './AppText';
import ListSeparator from './ListSeparator';

function PickerComponent({label, onPress}) {
    return (
        <TouchableOpacity
        style={styles.addButton} onPress={onPress}>
            
            <AppText text={label} style={defaultProps.titletext} />
            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    addButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default PickerComponent;