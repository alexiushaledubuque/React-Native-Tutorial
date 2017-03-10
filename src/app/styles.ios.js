import { StyleSheet, Dimensions, Platform } from 'react-native'

// allows the window dimensions to be calculated height/2 or width * 3
const {height, width }= Dimensions.get('window')
 if (Platform.OS === 'ios') {
   console.log('use ios styles!')
 } else {
   console.log('use andriod styles')
 }

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ef235f',
    padding: 40
  },
  input: {
    backgroundColor: 'yellow',
    width: 300,
    height: 40,
    borderRadius: 15,
    textAlign: 'center',
    color: 'green'
  },
  text: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 10
  },
  button: {
    color: 'white',
    fontSize: 34/2,
    fontWeight: 'bold',
    fontStyle: 'italic',
    margin: 10
  },
  list: {
    color: 'white',
    fontSize: 16,
    fontStyle: 'italic',
    margin: 10
  }
})
