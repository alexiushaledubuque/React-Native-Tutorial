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
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={this.handleChange.bind(this)}
      />
      <TouchableHighlight onPress={this.handlePress.bind(this)}>
        <Text>Tap Me!</Text>
      </TouchableHighlight>

      {this.state.todos.map((todo, i) => <Text key={i}>{todo}</Text>)}

    </View>
  );
}
}
