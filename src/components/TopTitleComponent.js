import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // flex : 1 
    },
    titleLeftContatiner: {
        flex: 1,
    },
    titleLeftTouch: {
        width: 40,
        height: 40
    },
    titleLeft: {
        width: 40,
        height: 40,
        marginLeft: 10
    },
    titleTextContainer: {
        justifyContent: 'center',
        flex: 1
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titleRightContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1
    },
    titleRightButtonContainer: {
        height: 30,
        width: 20,
        marginLeft: 10,
        justifyContent: 'center'
    },
    titleRightImage: {
        resizeMode : "cover"
    }
})

export default class TopTitleComponent extends Component {
    render() {
        return (
            <View>
                <View style={styles.titleContainer}>
                    <View style={styles.titleLeftContatiner}>
                    </View>
                    <View style={styles.titleTextContainer}>
                        <Text style={styles.titleText}>실시간대기</Text>
                    </View>
                    <View style={styles.titleRightContainer}>
                        <TouchableOpacity style={styles.titleRightButtonContainer}>
                            <Image source={require('../../images/GpsImage.png')} style={styles.titleRightImage}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.titleRightButtonContainer}>
                            <Image source={require('../../images/ShareImage.png')} style={styles.titleRightImage}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.titleRightButtonContainer}>
                            <Image source={require('../../images/ShowMoreImage.png')} style={styles.titleRightImage}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
