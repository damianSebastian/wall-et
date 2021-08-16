import React from 'react';
import {StyleSheet, View} from 'react-native';

import defaultProps from '../config/defaultProps';
import AppIconButtons from './AppIconButtons';
import AppText from './AppText';

function PickerComponent({label, onPress}) {
    return (
        <View style={styles.addButton}>
            <AppIconButtons iconName="credit-card-minus-outline"
                onPress={onPress}
                size={55}
            />
            <AppText text={label} style={defaultProps.descriptionText} />

        </View>
    );
}

const styles = StyleSheet.create({
    addButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default PickerComponent;