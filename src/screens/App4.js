import React, { Component, StyleSheet } from 'react';
import { Text, View } from 'react-native';
import { Navigation } from "react-native-navigation";

export default class App extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      text: 'FourthScreen'
    };
  }

//   componentDidAppear() {
//     this.setState({ text: 'componentDidAppear' });
//   }

  componentDidDisappear() {
    alert('componentDidDisappear');
  }

  navigationButtonPressed({ buttonId }) {
    // a navigation-based button (for example in the topBar) was clicked. See section on buttons.
  } 

//   componentWillUnmount() {
//     alert('componentWillUnmount');
//   }

  render() {
    return (
      <View>
        <Text>{`Lifecycle Screen`}</Text>
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}