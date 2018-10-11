import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Header from './components/Header.js';

class HomeScreen extends React.Component {
  /*_handlePress() {
    console.log('Pressed!');
    alert("Hello!");
  }*/
  render() {
    return (
      
      <View style={[styles.container]}>
        <View flex hleft mdpr style={{ backgroundColor: '#3F3C4C', alignSelf: 'flex-start', zIndex: 1}}>
          <Header navigation={this.props.navigation}/>
        </View>
        <View style={{flex: 1,}}>
          <Text style={styles.background}>Home Screen</Text>  
          
        </View>
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
    backgroundColor: '#FFFFFF'
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