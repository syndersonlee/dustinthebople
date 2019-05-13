import React, { Component } from 'react';
import { Text, View, ScrollView, ImageBackground, Image, StyleSheet } from 'react-native';
import { Navigation } from "react-native-navigation";

import TopTitleComponent from '../components/TopTitleComponent'
import MainWeatherStateComponent from '../components/MainWeatherStateComponent'

const styles = StyleSheet.create({
  _currentOverallActivitiyStateContainer : {
    flexDirection : "row",
  },
  _currentActivitiyStateContainer : {
    flex : 1,
  }
})

export default class App extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      text: 'SecondScreen'
    };
  }

  render() {
    return (
      <ScrollView>
        <TopTitleComponent></TopTitleComponent>
        <MainWeatherStateComponent></MainWeatherStateComponent>
        <Text>123985u8912u385u89213u5</Text>
        <View style={styles._currentOverallActivitiyStateContainer}>
          <View style={styles._currentActivitiyStateContainer}>
            <Image source={require('../../images/maskIcon.png')}></Image>
            <Text>마스크</Text>
            <View>
              <Text>필요해요</Text>
            </View>
          </View>
        </View>
      </ScrollView>

    );
  }
}
// style={styles._currentActivitiyStateContainer}