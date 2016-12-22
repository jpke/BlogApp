import React from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  TextInput,
  View
} from 'react-native'

const FormView = (props) => (
  <View style={styles.container}>
    <TextInput style={styles.title}
      placeholder=" Title"
      onChange={props.onTitleInputChanged.bind(this)}/>
    <TextInput style={styles.description}
      placeholder=" Description (optional)"
      onChange={props.onDescriptionInputChanged.bind(this)}/>
    <TextInput style={styles.post}
      placeholder=" Post"
      multiline = {true}
      numberOfLines = {4}
      onChange={props.onPostInputChanged.bind(this)}/>
    <TouchableHighlight style={styles.button} onPress={props.onPress.bind(this)} underlayColor='#99d9f4'>
      <Text style={styles.buttonText}>Post</Text>
    </TouchableHighlight>
  </View>
)

export default FormView

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 70,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 5
  },
  description: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 5
  },
  post : {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    height: 100,
    padding: 5,
    fontSize: 17
  },
  // title: {
  //   fontSize: 30,
  //   alignSelf: 'center',
  //   marginBottom: 30
  // },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})
