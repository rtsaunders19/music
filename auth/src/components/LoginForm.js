import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Text, Spinner } from './common';

class LoginForm extends Component {
  state ={
    email: '',
    password: '',
    error: '',
    loading: 'false'
  };

  onButtonPress() {
    const { email, password } = this.sate;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail());
      });
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication Failed',
      loading: false
    });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size={'small'} />;
    } else {
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Log In
        </Button>
      );
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            secureTextEntry={false}
            placeholder="user@email.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>{this.state.error}</Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
