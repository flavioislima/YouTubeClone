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
import { StackNavigator } from 'react-navigation';
import YouTube from 'react-native-youtube';
import Icon from 'react-native-vector-icons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import YouTubeVideo from './YouTubeVideo'

const apiKey = 'AIzaSyCneUYA7d9STnkWhRefctt5TtDGeOWJF5A'
const channeId = 'heavylero1';
const results = 30

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    fetch('https://www.googleapis.com/youtube/v3/search/?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=30')
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
    return (
      <View style={styles.container}>
      <Text>Still working</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#F5FCFF'
  }
})