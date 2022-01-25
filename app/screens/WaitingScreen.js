import React from 'react';
import { StyleSheet } from 'react-native';

import Screen from '../component/Screen';
import AppText from '../component/AppText';

function WaitingScreen({navigation}) {

    setTimeout(() => navigation.navigate('Main'), 5000);
  return (
    <Screen >
        <AppText text="Waiting"/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { flex : 1, top: 300}
});

export default WaitingScreen;