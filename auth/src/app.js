import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
componentWillMount() {
  firebase.initializeApp({
    apiKey: 'AIzaSyAN1ZFsDhAjwcPa4rKHHSNGq6z2S4e42Ag',
    authDomain: 'authentication-e67a6.firebaseapp.com',
    databaseURL: 'https://authentication-e67a6.firebaseio.com',
    projectId: 'authentication-e67a6',
    storageBucket: 'authentication-e67a6.appspot.com',
    messagingSenderId: '725537328237'
  });
}

  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        <LoginForm />
      </View>
    );
  }
}

export default App;
