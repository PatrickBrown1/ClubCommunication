import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';

export default class App extends React.Component {
  _handlePress() {
    console.log('Pressed!');
    alert("Hello!");
  }
  render() {
    return (
      <View style={[styles.container]}>
        <Text style={styles.background}>Open up App.js to start working on your app!</Text>
        <Button
          onPress={() => this._handlePress()}
          title="Alert Me"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    backgroundColor: '#1F1'
  },
});
