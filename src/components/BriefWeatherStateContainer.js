import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    briefWeatherStateContationer : {
      flexDirection : "row",
      marginVertical : 5,
      marginHorizontal : 30,
      alignContent : "center"
    },
    leftBriefWeatherContainer : {
      flex : 1,
      flexDirection : "row",
      alignContent : "center"
    },
    weatherIcon : {
      width : 15,
      height : 15,
      alignSelf : "center",
      resizeMode : "cover"
    },
    weatherBriefText : {
      marginLeft : 10,
      fontWeight : "bold"
    },
    rightBriefWeatherContainer : {
      flex : 1,
    },
    sourceProvideText : {
      textAlign : "right",
      fontSize : 12,
      fontWeight : "100"
    }
  })

export default class BriefWeatherStateContainer extends Component {
    render() {
        return (
            <View style={styles.briefWeatherStateContationer}>
                <View style={styles.leftBriefWeatherContainer}>
                    <Image source={require('../../images/RainyWeather.png')} style={styles.weatherIcon}></Image>
                    <Text style={styles.weatherBriefText}>비옴 21C</Text>
                </View>
                <View style={styles.rightBriefWeatherContainer}>
                    <Text style={styles.sourceProvideText}>한국환경공단 정보제공</Text>
                </View>
            </View>
        )
    }
}
