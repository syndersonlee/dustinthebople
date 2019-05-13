import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    weatherContainer: {
      marginHorizontal: "5%",
      marginTop: 10,
      justifyContent: "center",
      alignItems: "center"
    },
    weatherStateImage: {
      width: 120,
      height: 120,
      marginVertical : 10
    },
    windFlowText : {
      fontSize : 10
    },
    windBarImage : {
      width : 100,
      height : 10,
      marginTop : 5,
      resizeMode : "contain"
    },
    showMoreText : {
      paddingVertical : 10,
      fontSize : 12
    }
  })

export default class WeatherStateImageComponent extends Component {
    render() {
        return (
            <View style={styles.weatherContainer}>
                <View>
                    <Image source={require('../../images/StateGood.png')} style={styles.weatherStateImage}></Image>
                </View>
                <Text style={styles.windFlowText}>최고 100um/m</Text>
                <Image source={require('../../images/CurrentStateBar.png')} style={styles.windBarImage}></Image>
                <TouchableOpacity>
                    <Text style={styles.showMoreText}>대기수치 자세히 보기</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
