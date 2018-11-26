// Set the configuration for your app
  // TODO: Replace with your project's config object
import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyC2wQbXOlUIAI3DxTiyTm1JHzuZjdUr8CY",
    authDomain: "clubcommunication-b97f4.firebaseapp.com",
    databaseURL: "https://clubcommunication-b97f4.firebaseio.com",
    projectId: "clubcommunication-b97f4",
    storageBucket: "clubcommunication-b97f4.appspot.com",
    messagingSenderId: "939227830278"
};
firebase.initializeApp(config);

export default firebase;