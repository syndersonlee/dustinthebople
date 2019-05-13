import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'

import CurrentStateComponent from '../components/CurrentStateComponent'

const styles = StyleSheet.create({
    _currentOverallStateComponentContainer : {
        height : "60%"
    },
    _currentStateComponentContainer : {
      paddingTop : "5%"
    },
    _realTimeAirOverallContainer : {
      flexDirection : "row",
      marginLeft : "5%"
    },
    _temperatureValueContainer : {
      justifyContent : "flex-end",
      alignContent : "flex-end"
    },
    _temperatureValue : {
      fontSize : 60
    },
    _realTimeAirPollutionContainer : {
      flexDirection : "row",
      marginLeft : "3%"
    },
    _realTimeAirPollutionContainerBoth : {
      justifyContent : "flex-end",
      paddingBottom : 5,
      paddingHorizontal : 10 
    },
    _realTimeAirPollutionLeftContainer : {
      borderRightWidth : 0.3,
      marginTop : 55,
    },
    _realTimeAirPollutionValueText : {
      fontSize : 20
    }
  })

export default class MainWeatherStateComponent extends Component {
  render() {
    return (
      <View style={styles._currentOverallStateComponentContainer}>
        <ImageBackground source={require('../../images/NiceWeatherBackground.png')} 
        style={{ width: '100%', height: '100%', backfaceVisibility : 'hidden'}}>
          <View style = {styles._currentStateComponentContainer}>
            <CurrentStateComponent></CurrentStateComponent>
          </View>
          <View style={styles._realTimeAirOverallContainer}>
            <View style={styles._temperatureValueContainer}>
              <Text style={styles._temperatureValue}>14º</Text>
            </View>
            <View style={styles._realTimeAirPollutionContainer}>
              <View style={[styles._realTimeAirPollutionContainerBoth, styles._realTimeAirPollutionLeftContainer]}>
                <Text>미세먼지</Text>
                <Text style={styles._realTimeAirPollutionValueText}>최고</Text>
              </View>
              <View style={styles._realTimeAirPollutionContainerBoth}>
                <Text>초미세먼지</Text>
                <Text style={styles._realTimeAirPollutionValueText}>좋음</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}
