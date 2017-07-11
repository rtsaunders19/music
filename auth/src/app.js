import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';

class App extends Component {
//not functional component so must run render() function then return
  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        <Text>An App</Text>
      </View>
    );
  }
}

export default App;
