import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.container}>
        <Text style={styles.fontTitle}>Module 1 Machine Problem</Text>
      </View>
        <View style={[styles.buttonsAlignment, {flexDirection: "column"}]}>
          <View style={styles.box}><Text style={styles.fontBody}>Sample 1</Text></View> 
          <View style={styles.box}><Text style={styles.fontBody}>Sample 2</Text></View> 
          <View style={styles.box}><Text style={styles.fontBody}>Sample 3</Text></View> 
        </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: '#003049',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  header: {
    flex: 1,
  },
  fontTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 50,
  },
  fontBody: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  buttonsAlignment: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  box: {
    width: 1000,
    height: 150,
    backgroundColor: "#EAE2B7",
    alignItems: 'center',
    justifyContent: 'center',
  },
});