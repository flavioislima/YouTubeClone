import React from 'react'
import { Text, View, Image, TouchableHighlight, StyleSheet } from 'react-native'

export default class ListVideos extends React.Component {
    render() {
        const item = this.props.item
        return (
            <View style={styles.body}>
                <TouchableHighlight
                    key={item.id.videoId}
                    onPress={this.props.pressHandler}>
                    <View style={styles.vids}>
                        {console.log(item.snippet.thumbnails.medium.url)}
                        <Image
                            source={{ uri: item.snippet.thumbnails.medium.url }}
                            style={{ width: 320, height: 180 }} />
                        <View style={styles.vidItems}>
                            <Image
                                source={require('./images/kzg.webp')}
                                style={{ width: 40, height: 40, borderRadius: 10, marginRight: 25 }} />
                            <Text style={styles.vidText}>{item.snippet.title}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#232629',
        alignItems: 'center',
        padding: 1
    },
    vids: {
        paddingBottom: 10,
        width: 320,
        alignItems: 'center',
        backgroundColor: '#2A2E32',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#444',
        marginBottom: 10
    },
    vidItems: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginLeft: 12,
        marginRight: 20,
        marginTop: 10
    },
    vidText: {
        marginLeft: 10,
        marginRight: 10,
        color: '#fff',
        fontSize: 12
    },
})
