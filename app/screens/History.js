import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import HistoryItem from '../component/HistoryItem';
import Screen from '../component/Screen';
import defaultProps from '../config/defaultProps';


function History({route}) {

  const data = route.params;

  return (

    <Screen style={styles.container}>

        <FlatList
            data={data}
            keyExtractor={(item) => item.index.toString()}
            renderItem={({item}) =>
            <HistoryItem
            category = {item.category}
            totalAmount = {item.money}
            amount = {item.amount}
            index = {item.index}
            time = {item.time}/>}
            />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultProps.colors.secondBackground,
    flex:1,
  }
});

export default History;