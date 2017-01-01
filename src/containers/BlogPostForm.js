import React, {Component} from 'react'
import fetch from 'isomorphic-fetch'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  TextInput,
  View
} from 'react-native'
import Posts from './Posts'

export default class BlogPostForm extends Component {
  constructor(props) {
    super(props)
  }
  onPress() {
    console.log("PROPS: ", this.props)
    let title = this.refs[1]._lastNativeText
    let description = this.refs[2]._lastNativeText
    let body = this.refs[3]._lastNativeText
    fetch('http://localhost:8080/Posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        description,
        body
      })
    })
    .then(response => response.json())
    .then((response) => {
      console.log('response:: ', response)
      this.navigate('Posts')
    })
  }
  navigate(routeName, posts) {
    this.props.navigator.push({
      name: routeName,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput ref='1' style={styles.title}
          placeholder=" Title"
          />
        <TextInput ref='2' style={styles.description}
          placeholder=" Description (optional)"
          />
        <TextInput ref='3' style={styles.post}
          placeholder=" Post"
          multiline = {true}
          numberOfLines = {4}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.navigate.bind(this, 'Posts', this.props.posts)} style={styles.button}>
          <Text style={styles.buttonText}>
            View Posts
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

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
