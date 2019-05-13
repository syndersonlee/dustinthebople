import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    dustStateTextAllContainer : {
      flexDirection : "row",
      justifyContent : "space-around",
      marginHorizontal : 20,
      paddingVertical : 10,
      borderBottomWidth : 1,
      borderColor : '#F1F1F1'
    },
    dustStateTitleText : {
      fontSize : 13,
      textAlign : "center"
    },
    dustStateText : {
      fontSize : 22,
      textAlign : "center",
      paddingVertical : 6
    }
    
  })
  
export default class WeatherStateTextComponent extends Component {
  render() {
    return (
        <View style={styles.dustStateTextAllContainer}>
        <View style={styles.dustStateContatiner}>
          <Text style={styles.dustStateTitleText}>미세먼지</Text>
          <Text style={styles.dustStateText}>최고</Text>
        </View>

        <View style={styles.dustStateContatiner}>
          <Text style={styles.dustStateTitleText}>초미세먼지</Text>
          <Text style={styles.dustStateText}>최고</Text>
        </View>

        <View style={styles.dustStateContatiner}>
          <Text style={styles.dustStateTitleText}>이산화탄소</Text>
          <Text style={styles.dustStateText}>좋음</Text>
        </View>

        <View style={styles.dustStateContatiner}>
          <Text style={styles.dustStateTitleText}>오존</Text>
          <Text style={styles.dustStateText}>좋음</Text>
        </View>
      </View>
    )
  }
}
