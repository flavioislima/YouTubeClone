import React from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Tabs from './Tabs'

const About = (props) => {
    const navigation = props.navigation

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.about}>Sobre</Text>
            </ScrollView>
            <Tabs navigation={navigation} />
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#232629"
    },
    about:{
        color: '#fff',
        fontSize: 14
    }
})