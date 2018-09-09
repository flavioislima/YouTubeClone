import React, { Component } from 'react';
import {
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import YouTubeVideo from './YouTubeVideo'
import ListVideos from './ListVideos'
import News from './News'
import About from './About'
import Tabs from './Tabs'
import api from './config'

const header = require('./images/header.webp')
const channelId = 'UCA4u8p5rYvuL2-72cAUhXKA'
const results = 50
const url = `https://www.googleapis.com/youtube/v3/search/?key=${api}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${results}`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      isLoading: true
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
          data: videoId,
          isLoading: false
        })
      })
      .catch(error => {
        console.log(error)
      })
  }


  goToVideo = (item) => {
    const navigation = this.props.navigation
    navigation.navigate('YouTubeVideo', {
      youtubeId: item.id.videoId, videoName: item.snippet.title
    })
  }

  render() {
    const navigation = this.props.navigation
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor='#333'/>
        <ScrollView>
          {this.state.isLoading ? (<Text style={{fontSize: 20, color: '#fff'}}>Carregando Vídeos...</Text>)
            :
            this.state.data.map((item, i) => (
              <ListVideos
                key={i}
                item={item}
                pressHandler={() => this.goToVideo(item)} />
            ))
          }
        </ScrollView>
        <Tabs navigation={navigation} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232629",
    alignContent: 'center',
    justifyContent: 'center'
  }
})

export default screens = createStackNavigator({
  Home: {
    screen: App,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: '#333'
      },
      headerLeft: (
        <TouchableOpacity>
          <Image
            style={{ height: 33, width: 70, backgroundColor: '#333', marginLeft: 25 }}
            source={header}
          />
        </TouchableOpacity>
      ),
      headerRight: (
        <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold', marginRight: 15}}>Últimos Vídeos</Text>
      ),
      headerBackTitle: null
    })
  },
  YouTubeVideo: {
    screen: YouTubeVideo,
    navigationOptions: () => ({
      title: `Vídeos`,
      headerBackTitle: `Voltar`
    })
  },
  News: {
    screen: News,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: '#333'
      },
      headerBackTitle: `Voltar`,
      headerLeft: (
        <TouchableOpacity>
          <Image
            style={{ height: 30, width: 70, backgroundColor: '#333', marginLeft: 25 }}
            source={header}
          />
        </TouchableOpacity>
      ),
      headerRight: (
        <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold', marginRight: 15}}>Novidades</Text>
      ),
      headerBackTitle: null
    })
  },
  About: {
    screen: About,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: '#333'
      },
      headerLeft: (
        <TouchableOpacity>
          <Image
            style={{ height: 30, width: 70, backgroundColor: '#333', marginLeft: 25 }}
            source={header}
          />
        </TouchableOpacity>
      ),
      headerRight: (
        <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold', marginRight: 15}}>Sobre</Text>
      ),
      headerBackTitle: null
    })
  }
})

