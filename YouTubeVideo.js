import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import YouTube from 'react-native-youtube'

export default class YouTubeVideo extends React.Component {
    static navigationOptions = {
        headerTitle: (<Text style={{fontSize: 18, color: '#fff'}}>Voltar</Text>),
        headerStyle: {
            backgroundColor: '#333'
        },
        headertitleStyle: {
            color: '#fff'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.vidText}>{this.props.navigation.state.params.videoName}</Text>
                <YouTube
                    videoId={this.props.navigation.state.params.youtubeId}
                    play={false}
                    fullscreen={false}
                    loop={false}
                    apiKey={'AIzaSyCneUYA7d9STnkWhRefctt5TtDGeOWJF5A'}
                    onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => this.setState({ status: e.state })}
                    onChangeQuality={e => this.setState({ quality: e.quality })}
                    onError={e => this.setState({ error: e.error })}
                    style={{ alignSelf: 'stretch', height: 300 }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#232629'
    },
    vidText: {
        margin: 10,
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
})
