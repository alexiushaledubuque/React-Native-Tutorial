import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions
} from 'react-native'

import { styles } from './styles'

export class Reddit extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    fetch('https://www.reddit.com/.json',
    {
        Accept: 'application/json'
    })
    .then(res => res.json())
    .then(data => {
        // console.log(JSON.stringify(data.data.children, null, 2))
        this.setState({ posts: data.data.children })
        // console.log(JSON.stringify(posts, null, 2))
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.list}>Reddit</Text>
        <View>
          {this.state.posts.map((post, i) => (
            <Text key={i}>{post.data.author}</Text>
          ))}
        </View>
      </View>
    )
  }
}
