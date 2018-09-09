import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Tabs extends Component {
    render() {
        const navigation = this.props.navigation
        return (
            <View style={styles.tabBar}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home', { navigation: navigation })}
                    style={styles.tabItems}>
                    <Icon name='home' size={25} color='#ddd' />
                    <Text style={styles.tabTitle}>Vídeos</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                    onPress={() => navigation.navigate('News', { navigation: navigation })}
                    style={styles.tabItems}>
                    <Icon name='view-list' size={25} color='#ddd' />
                    <Text style={styles.tabTitle}>Novidades</Text>
                </TouchableOpacity> */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('About', { navigation: navigation })}
                    style={styles.tabItems}>
                    <Icon name='info' size={25} color='#ddd' />
                    <Text style={styles.tabTitle}>Sobre</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#333',
        height: 58,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 0.7,
        borderColor: '#bbb'
    },
    tabItems: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 1
    },
    tabTitle: {
        fontSize: 11,
        color: '#fff',
        paddingTop: 4,
        fontWeight: 'bold'
    }
})