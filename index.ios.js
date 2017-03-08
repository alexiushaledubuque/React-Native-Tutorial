/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight
} from 'react-native';

export default class TODO extends Component {
  constructor() {
    super()
    this.state = {
      todos: [1,2,3],
      newTodo: ''
    }
  }
  handleChange(e) {
    const { value } = e.target
    this.setState({newTodo: value})
  }
  handlePress() {

  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput value={this.state.newTodo}
          <TouchableHighlight onPress={this.handlePress.bind(this)}>
            <Text>Tap Me!</Text>
          </TouchableHighlight>
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={this.handleChange.bind(this)}
        />

        {this.state.todos.map((todo, i) => <Text key={i}>{todo}</Text>)}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TODO', () => TODO);
