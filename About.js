import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native'
import Tabs from './Tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

const About = (props) => {
    const navigation = props.navigation
    const links = {
        instagram: "https://www.instagram.com/kazagastao/",
        facebook: "https://www.facebook.com/kazagastao",
        twitter: "https://twitter.com/heavylero",
        gplus: "https://plus.google.com/u/0/104100706513104931973",
        apoiase: "https://apoia.se/kazagastao"
    }

    return (
        <View style={styles.container}>
            <View style={styles.about}>
                <Text style={styles.title}>Siga o Kazagastão nas Redes Sociais</Text>
                <TouchableOpacity style={styles.network} onPress={() => Linking.openURL(links.instagram)}>
                    <View style={{width: 35}}>
                    <Icon name="instagram" size={33} color='#fff'/>
                    </View>
                    <Text style={styles.text}>Instagram</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.network} onPress={() => Linking.openURL(links.facebook)}>
                <View style={{width: 35}}>                    
                    <Icon name="facebook" size={33} color='#fff'/>
                </View>
                    <Text style={styles.text}>Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.network} onPress={() => Linking.openURL(links.twitter)}>
                <View style={{width: 35}}>                    
                    <Icon name="twitter" size={33} color='#fff'/>
                    </View>
                    <Text style={styles.text}>Twitter</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.network} onPress={() => Linking.openURL(links.gplus)}>
                <View style={{width: 35}}>                    
                    <Icon name="google" size={33} color='#fff'/>
                    </View>
                    <Text style={styles.text}>Google+</Text>
                </TouchableOpacity>
            <Text style={styles.title}>Apoie o Canal!</Text>
            <TouchableOpacity style={styles.network} onPress={() => Linking.openURL(links.apoiase)}>
            <View style={{width: 35}}>                    
                    <Icon name="dollar" size={33} color='#fff'/>
                    </View>
                    <Text style={styles.text}>Apoia-se</Text>
            </TouchableOpacity>
            </View>
            <Tabs navigation={navigation} />
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232629",
    },
    about:{
        flex: 1,
    },
    title: {
        marginTop: 5, 
        marginBottom: 5, 
        textAlign: 'center', 
        fontSize: 18, 
        color: '#fff'}
    ,
    network: {
        flexDirection: 'row',
        margin: 15
    },
    text:{
        marginLeft: 10, 
        marginTop: 5, 
        fontSize: 16, 
        color: '#fff',
        width: 200
    }
})