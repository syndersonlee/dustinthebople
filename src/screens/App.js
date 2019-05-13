import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Navigation } from "react-native-navigation";
import TopTitleComponent from "../components/TopTitleComponent";
import CurrentStateComponent from "../components/CurrentStateComponent";
import WeatherStateImageComponent from "../components/WeatherStateImageComponent";
import WeatherStateTextComponent from "../components/WeatherStateTextComponent"
import BriefWeatherStateContainer from "../components/BriefWeatherStateContainer"

export default class App extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      text: 'fireScreen'
    };
  }

  render() {
    return (
      <ScrollView>
        <TopTitleComponent></TopTitleComponent>
        <CurrentStateComponent></CurrentStateComponent>
        <WeatherStateImageComponent></WeatherStateImageComponent>
        <WeatherStateTextComponent></WeatherStateTextComponent>
        <BriefWeatherStateContainer></BriefWeatherStateContainer>
      </ScrollView>

    );
  }
}
