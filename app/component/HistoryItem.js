import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import defaultProps from '../config/defaultProps';
import ListSeparator from './ListSeparator';

function HistoryItem({category, totalAmount, amount, time, index}) {
  return (
    <View style={styles.container}>
        <View style = {styles.secondContainer}>
            <Text style={defaultProps.mainText}>{amount}</Text>
            <Text style={defaultProps.descriptionText}>{category}</Text>
            <Text style={defaultProps.descriptionText}>{time}</Text>
        </View>
        <View style = {styles.thirdContainer}>
            <Text style={defaultProps.titletext}>{totalAmount}</Text>
            <Text style={defaultProps.descriptionText}>{index}</Text>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      margin: 7,
      borderRadius: 10,
      backgroundColor: defaultProps.colors.firstBackground,
      height: 90,
    flexDirection:'row',
  },
  secondContainer: {
    paddingLeft: 10,
    justifyContent:'center',
    flex: 0.5,
  },
  thirdContainer :{
      justifyContent: 'center',
      alignItems: 'flex-end',
      flex:0.5,
      paddingRight: 5, 
  }

});

export default HistoryItem;