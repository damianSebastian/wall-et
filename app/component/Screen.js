import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import defaultProps from '../config/defaultProps';

function Screen({ children, style = styles.container }) {
    return (
        <SafeAreaView style={style}>{children}</SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultProps.colors.secondBackground,
        flex: 1,
        flexDirection: "column-reverse",

    }
})

export default Screen;