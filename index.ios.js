/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';

import { Reddit } from './src/app/Reddit'
//import { Todo } from './src/app/Todo'
//import { Fancy } from './src/app/Fancy'

const Main = () => (
  <View style={styles.container}>
    <Reddit />
  </View>
)

// Most popular option; but, the above is good too.
// export default class Main extends Component {
//     render() {
//     return (
//       <View style={styles.container}>
//         <Todo />
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

AppRegistry.registerComponent('TODO', () => Main);
