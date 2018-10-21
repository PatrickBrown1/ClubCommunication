import React, { Component } from "react";
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import ClubList from './ClubList.js';

class Club extends Component {
  constructor(props) {
    super(props)
  }

  render() {
  let navigation = this.props.navigation;
    return (
        <ScrollView>
          <Text style={styles.text}>Clubs </Text>
          <ClubList />
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
  },
});

export default Club;