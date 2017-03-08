/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';

import { Todo } from './src/app/Todo'

const Main = () => (
  <View style={styles.container}>
    <Todo />
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

AppRegistry.registerComponent('TODO', () => Main);
