
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Liste from './components/Liste';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hell in my app</Text>
      <Liste></Liste>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
