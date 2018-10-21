import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './Sidebar.styles';
import { Dropdown } from 'react-native-material-dropdown';

class ClubList extends Component {

  navigateToScreen = (route) => () => {
    const navigate = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigate);
  }

  render () {
    let data = [{
        value: 'Club 1',
      }, {
        value: 'Club 2',
      }, {
        value: 'Club 3',
      }];
    return (  
      <View style={styles.container}>
        <Dropdown
            label='Choose a Club'
            data={data}

        />
      </View>
    );
  }
}



export default ClubList;