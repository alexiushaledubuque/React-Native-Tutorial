import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'

import { styles } from './src/app/styles'

export class Todo extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      newTodo: ''
    }
  }
  handlePress() {
    const todos = [...this.state.todos, this.state.newTodo]
    this.setState({todos, newTodo:''})
  }
  handleChange(text) {
    this.setState({newTodo: text})
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Lexi To Do List</Text>
        <TextInput
            value={this.state.newTodo}
            style={styles.input}
            placeholder="Type here to translate!"
            onChangeText={this.handleChange.bind(this)}
        />
        <TouchableOpacity onPress={this.handlePress.bind(this)}>
          <Text style={styles.button}>Add to List</Text>
        </TouchableOpacity>
        <View>
          {this.state.todos.map((todo, i) => (
            <Text style={styles.list} key={i}>{i + 1}. {todo}</Text>
          ))}
        </View>
      </View>
    )
  }
}
