import React from 'react';
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';

import defaultProps from '../config/defaultProps';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function AppIconButtons({ iconName, onPress, size = 34 }) {
    return (
        <TouchableWithoutFeedback
            onPress={onPress} style={styles.container}>
            <MaterialCommunityIcons name={iconName}
                color={defaultProps.colors.button}
                size={size}
            />
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,

    },
})

export default AppIconButtons;