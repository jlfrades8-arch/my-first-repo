import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import CounterApp from './CounterApp'
import ColorChangeApp from './ColorChangeApp'
import React, { useState } from 'react';

export default function App(){
const [bgColor, setBgColor] = useState("white");

  return (
    <View style={[styles.container, { backgroundColor: bgColor}]}>
      <CounterApp bgColor/>
      <ColorChangeApp setBgColor = {setBgColor}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
