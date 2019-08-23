import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import DatePickerComponent from './src/components/DatePickerComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <DatePickerComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
