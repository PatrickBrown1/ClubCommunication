import React, { Component } from "react";
import { ScrollView, Text, StyleSheet, TextInput, AsyncStorage } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import firebase from '../../firebase/database.js';
class JoinClub extends Component {
  constructor(props) {
    super(props)
    this.state = { 
        text: 'Enter in a Club ID',
        ClubList: []
    };
  }
  componentWillMount() {  
    console.log("Connecting to firebase");
    //allow your app to sign in anonomously
    firebase.auth().signInAnonymously().catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
    console.log("Connected to firebase \n");
}
  
  joinClub = () => () => {
    //get clubid from textfield
    var ClubID = this.state.text;
    console.log("ClubID: " + ClubID);
    var database = firebase.database();

    //check if clubid exists in firebase database of clubs
 
    const ClubRef = firebase.database().ref("ClubList/");
    console.log("Attempting to Read Database...");

    const tempClubList = [];
    ClubRef.on('value', snapshot => {
        snapshot.forEach(childSnapShot => {
          console.log( childSnapShot.key + " : "  + childSnapShot.val());
    
          const item = 
          {
              key: childSnapShot.key,
              value: childSnapShot.val()
          };
  
          //Add an item object to the tempClubList Array
          tempClubList.push(item);
          
  
        });
        //set the tempClubList Array to the state clubList
      this.setState({ ClubList: tempClubList });
        
    });
    
    //pull messages from firebase for the club

    //store the data for later retrieval


  }
  render() {
  let navigation = this.props.navigation;
    return (
        <ScrollView style={{margin:10}}>
          <Text style={styles.text}>Join a Club</Text>
          
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <Button
            raised
            title='Join Club'
            buttonStyle={styles.button}
            onPress={this.joinClub()}
          />
          
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  button: {
    margin: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 20,
  }
});

export default JoinClub;



/*_retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('TASKS');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
     } catch (error) {
       // Error retrieving data
     }
  }*/