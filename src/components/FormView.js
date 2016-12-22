import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight
} from 'react-native'

export const FormView = (props) => {
    <View style={styles.container}>
      <Form ref='form' type={props.Post} options={{}}
      />
      <TouchableHighlight style={styles.button} onPress={props.onPress} underlayColor='#99d9f4'>
        <Text style={styles.buttonText}>Post</Text>
      </TouchableHighlight>
    </View>
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
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
