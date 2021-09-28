import React from 'react';
import {StyleSheet, FlatList, Text } from 'react-native';

import MyButton from '../component/MyButton';
import Screen from '../component/Screen';
import defaultProps from '../config/defaultProps';


function History({route, navigation}) {

  const data = route.params;
    
  return (
    <Screen style={styles.container}>

        <MyButton title="Menu" 
        onPress={() => navigation.navigate("Main")}/>
        <FlatList
            data={data}
            keyExtractor={(item) => item.index.toString()}
            renderItem={({item}) =>
            <Text style={defaultProps.mainText}> Text aici {item.category} time: {item.time}</Text>}
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