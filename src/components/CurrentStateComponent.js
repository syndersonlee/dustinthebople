import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const styles = StyleSheet.create({
    addressContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    addressImage: {
        width: 15,
        height: 15,
        resizeMode: "contain",
        marginRight: 5
    },
    addressText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    currentDate: {
        fontSize: 10,
        textAlign: "center"
    },
    weatherBarContainer: {
        marginVertical: 5,
        alignItems: 'center',
    },
    weatherBarImage: {
        width: 30,
        height: 10,
        resizeMode: "contain"
    },
})

export default class CurrentStateComponent extends Component {
    render() {
        return (
            <View>
                <View style={styles.addressContainer}>
                    <Image source={require('../../images/GpsImage.png')} style={styles.addressImage}></Image>
                    <Text style={styles.addressText}>강남구 삼성1동</Text>
                </View>
                <Text style={styles.currentDate}>4월 18일 오후 6시 28분</Text>
                <View style={styles.weatherBarContainer}>
                    <Image source={require('../../images/StateBar.png')} style={styles.weatherBarImage}></Image>
                </View>
            </View>
        )
    }
}
