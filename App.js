import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  /*_handlePress() {
    console.log('Pressed!');
    alert("Hello!");
  }*/
  render() {
    return (
      <View style={[styles.container]}>
        <Text style={styles.background}>Home Screen</Text>  
        <Button
          title="Go to About Page"
          onPress={() => this.props.navigation.navigate('About')}
        />
      </View>
    );
  }
}

class AboutScreen extends React.Component {
  render(){
    return(
      <View style={[styles.container]}>
        <Text style={styles.background}>About Screen</Text>  
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    backgroundColor: '#1F1'
  },
});



const RootStack = createStackNavigator({
    Home: HomeScreen,
    About: AboutScreen,
  },
  {
    initialRoutName: 'Home',
  }
);

export default class App extends React.Component{
  render() {
    return <RootStack />;
  }
}