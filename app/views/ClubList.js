import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, Picker } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './Sidebar.styles';
import firebase from '../../firebase/database.js';

class ClubList extends Component {
  constructor(props) {
    super(props)
    this.state = { 
        PickerValue: "",
        ClubList: []
    };
  }
  navigateToScreen = (route) => () => {
    const navigate = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigate);
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
    console.log("Connected to firebase in ClubList\n");
    this.pullClubs();
  }
  
  pullClubs() {
    const ClubRef = firebase.database().ref("ClubList/");
    console.log("Attempting to Read Database...");

    
    ClubRef.on('value', snapshot => {
      let tempClubList = null;
      tempClubList = [];
      console.log(tempClubList.length);
        snapshot.forEach(childSnapShot => {
          //console.log( childSnapShot.key + " : "  + childSnapShot.val());
          const item = {
              label: childSnapShot.key,
              value: childSnapShot.val()
          };

          //Add an item object to the tempClubList Array
          tempClubList.push(item);
        });
        console.log(tempClubList.length);
        //set the tempClubList Array to the state clubList
      this.setState({ ClubList: tempClubList });    
    });
  console.log('Database Read\n')
  }
  render () {
    return (  
      <View style={styles.container}>
        <Picker
            style={{width:'80%'}}
            selectedValue={this.state.PickerValue}
            onValueChange={(itemValue, itemIndex) =>
               this.setState({ PickerValue: itemValue })}
        >
          {this.state.ClubList.map((i, index) => (
              <Picker.Item key={index} label={i.label} value={i.value} />
            ))}
        </Picker>
        <Text>{this.state.PickerValue}</Text>
      </View>
    );
  }
}



export default ClubList;