import React, { Component } from 'react';
import {
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import YouTube from 'react-native-youtube';
import Icon from 'react-native-vector-icons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import YouTubeVideo from './YouTubeVideo'

const apiKey = 'AIzaSyCneUYA7d9STnkWhRefctt5TtDGeOWJF5A'
const channelId = 'UCA4u8p5rYvuL2-72cAUhXKA';
const results = 30
const url = `https://www.googleapis.com/youtube/v3/search/?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${results}`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        const videoId = []
        res.items.forEach(item => {
          videoId.push(item)
        })
        this.setState({
          data: videoId
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const navigation = this.props.navigation
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.body}>
            {this.state.data.map((item, i) =>
              <TouchableHighlight
                key={item.id.videoId}
                onPress={() => navigation.navigate('YouTubeVideo', { youtubeId: item.id.videoId })}>
                <View style={styles.vids}>
                  {console.log(item.snippet.thumbnails.medium.url)}
                  <Image
                    source={{ uri: item.snippet.thumbnails.medium.url }}
                    style={{ width: 320, height: 180 }} />
                  <View style={styles.vidItems}>
                    <Image
                      source={require('./images/kzg.jpg')}
                      style={{ width: 40, height: 40, borderRadius: 10, marginRight: 35 }} />
                    <Text style={styles.vidText}>{item.snippet.title}</Text>
                    {//<Icon name="more-vertical" size={30} color="#900" /> 
                    }
                  </View>


                </View>
              </TouchableHighlight>
            )}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 30
  },
  vids: {
    paddingBottom: 10,
    width: 320,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#aaa',
    marginBottom: 2
  },
  vidItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10
  },
  vidText: {
    marginLeft: 10,
    color: '#000'
  },
})

export default screens = createStackNavigator({
  Home: {
    screen: App,
    navigationOptions: () => ({
      title: `Últimos Vídeos`,
      headerBackTitle: null
    })
  },
  YouTubeVideo: {
    screen: YouTubeVideo,
    navigationOptions: () => ({
      title: `Vídeos`,
      headerBackTitle: `Voltar`
    })
  }
})

