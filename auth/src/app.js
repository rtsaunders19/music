import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null
  };

componentWillMount() {
  firebase.initializeApp({
    apiKey: 'AIzaSyAN1ZFsDhAjwcPa4rKHHSNGq6z2S4e42Ag',
    authDomain: 'authentication-e67a6.firebaseapp.com',
    databaseURL: 'https://authentication-e67a6.firebaseio.com',
    projectId: 'authentication-e67a6',
    storageBucket: 'authentication-e67a6.appspot.com',
    messagingSenderId: '725537328237'
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  });
}

renderContent() {
  switch (this.state.loggedIn) {
    case true:
      return (
        <Button onPress={() => firebase.auth().signOut()}>
          Log Out
        </Button>
      );
    case false:
      return <LoginForm />;
    default:
      return <Spinner size="large" />;
  }
}

  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
