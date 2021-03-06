import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './Sidebar.styles';
import PropTypes from 'prop-types';


class DrawerContent extends Component {

  navigateToScreen = (route) => () => {
    const navigate = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigate);
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>

          <Text style={styles.separatorTop}>
          </Text>

          <Button
            raised
            icon={{name: 'trash-o', type: 'font-awesome', size: 20}}
            title='Home'
            buttonStyle={styles.button}
            onPress={this.navigateToScreen('Home')}/>

            <Text style={styles.sectionHeadingStyle}>
            </Text>

          <Button
            raised
            icon={{name: 'umbrella', type: 'font-awesome', size: 20}}
            title='First'
            buttonStyle={styles.button}
            onPress={this.navigateToScreen('First')}/>

            <Text style={styles.sectionHeadingStyle}>
           </Text>

          <Button
            raised
            icon={{name: 'map', type: 'font-awesome', size: 20}}
            title='Clubs'
            buttonStyle={styles.button}
            onPress={this.navigateToScreen('Club')}/>
          
            <Text style={styles.sectionHeadingStyle}>
           </Text>

          <Button
            raised
            title='Join Club'
            buttonStyle={styles.button}
            onPress={this.navigateToScreen('JoinClub')}/>
          
            <Text style={styles.sectionHeadingStyle}>
           </Text>

        </ScrollView>
      </View>
    );
  }
}

DrawerContent.propTypes = {
  navigation: PropTypes.object
};

export default DrawerContent;