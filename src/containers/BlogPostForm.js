import React, {Component} from 'react'
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
    this.state = {
      title: '',
      description: '',
      post: ''
    }
  }
  onTitleInputChanged(event) {
    this.setState({title: event.nativeEvent.text})
  }
  onDescriptionInputChanged(event) {
    this.setState({description: event.nativeEvent.text})
  }
  onPostInputChanged(event) {
    this.setState({post: event.nativeEvent.text})
  }
  onPress() {
    console.log("blogpost state: ", this.state)
    this.props.addPost(this.state.title, this.state.description, this.state.post)
    this.props.navigator.push({
      title: 'Posts',
      component: Posts,
      passProps: {posts: this.props.posts}
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.title}
          placeholder=" Title"
          onChange={this.onTitleInputChanged.bind(this)}/>
        <TextInput style={styles.description}
          placeholder=" Description (optional)"
          onChange={this.onDescriptionInputChanged.bind(this)}/>
        <TextInput style={styles.post}
          placeholder=" Post"
          multiline = {true}
          numberOfLines = {4}
          onChange={this.onPostInputChanged.bind(this)}/>
        <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Post</Text>
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
