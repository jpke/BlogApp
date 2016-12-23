'use strict';
import React, {Component} from 'react'
import {
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
  AsyncStorage,
  AlertIOS,
  Text,
  View
} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [{title: 'titles'}],
      message: ''
    }
    this.addPost= this.addPost.bind(this)
  }
  navigate(routeName, props) {
    this.props.navigator.push({
      name: routeName,
      passProps: {
        addPost: this.addPost,
        posts: this.state.posts
      }
    });
  }
  addPost(title, description, post) {
    console.log('initial state.posts', this.state)
    console.log(this.state.posts == [])
    let newPosts = [ ...this.state.posts, {title: title, description: description, post: post, id: this.state.posts.length}]
    this.setState({
      ...{posts: newPosts}
    })
    console.log('index state', this.state)
  }
  render() {
    return(
      <View style={styles.container}>
        <TouchableHighlight onPress={this.navigate.bind(this, 'BlogPostForm', this.addPost)} style={styles.button}>
          <Text style={styles.buttonText}>
            Create New Post
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.navigate.bind(this, 'Posts', this.state.posts)} style={styles.button}>
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
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    paddingTop: 180
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
  title: {
    fontSize: 25,
    marginBottom: 15
  }
});

export default Home