import React from 'react'
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Tabs from './Tabs'

export default class News extends React.Component {

    state = {
        data: []
    }

    render() {
        const navigation = this.props.navigation

        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.news}>Novidades</Text>
                </ScrollView>
                    <Tabs navigation={navigation} />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#232629"
    },
    news:{
        color: '#fff',
        fontSize: 14
    }
})
