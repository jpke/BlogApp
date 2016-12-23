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
  // constructor(props) {
  //   super(props)
  //   // this.addPost= this.addPost.bind(this)
  // }
  // onTitleInputChanged(event) {
  //   this.setState({title: event.nativeEvent.text})
  // }
  // onDescriptionInputChanged(event) {
  //   this.setState({description: event.nativeEvent.text})
  // }
  // onPostInputChanged(event) {
  //   this.setState({post: event.nativeEvent.text})
  // }
  // addPost(title, description, post) {
  //   console.log('index onPress running')
  //   console.log('initial state.posts', this.state)
  //   console.log(this.state.posts == [])
  //   let newPosts = [ ...this.state.posts, {title: title, description: description, post: post, id: this.state.posts.length}]
  //   this.setState({
  //     posts: newPosts
  //   })
  //   console.log('index state', this.state)
  // }
  onPress(e) {
    let title = this.refs[1]._lastNativeText
    let description = this.refs[2]._lastNativeText
    let post = this.refs[3]._lastNativeText
    console.log('TITLE:', title._lastNativeText)
    this.props.addPost(title, description, post)
    // let newPosts = [ ...this.state.posts, {title: title, description: description, post: post, id: this.state.posts.length}]
    // this.setState({
    //   posts: newPosts
    // })
    this.props.navigator.push({
      title: 'Posts',
      component: Posts,
      passProps: {posts: this.props.posts}
    })
  }

  render() {
    console.log("blogpost props: ", this.props)
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
