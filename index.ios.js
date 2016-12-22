/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';
import BlogPostForm from './src/containers/BlogPostForm'
import Posts from './src/containers/Posts'

export default class BlogApp extends Component {
  constructor() {
    super()
    this.state = {
      posts: [{
        title: 'title here',
        description: 'description here',
        post: 'post here',
        id: 1
        }],
      message: ''
    }
  }
  addPost(title, description, post) {
    console.log('index onPress running')
    console.log('initial state.posts', this.state.posts)
    console.log(this.state.posts == [])
    let newPosts = [ ...this.state.posts, {title: title, description: description, post: post}]
    this.setState({
      ...{posts: newPosts}
    })
    console.log('index state', this.state)
  }
  render() {
    console.log("STATE: ", this.state)
    return (
      // <NavigatorIOS
      //   // style={styles.container}
      //   initialRoute={{
      //     title: 'BlogApp',
      //     component: BlogPostForm,
      //     passProps: {
      //       posts: this.state.posts,
      //       onPress: this.onPress}
      //   }}/>

      // <View>
      //   <BlogPostForm addPost = {this.addPost.bind(this)}/>
      //   <Text>{this.state.message}</Text>
      // </View>

      <View style={styles.container}>
        <Posts posts = {this.state.posts}/>
      </View>

      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to React Native!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit index.ios.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Press Cmd+R to reload,{'\n'}
      //     Cmd+D or shake for dev menu
      //   </Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
});

AppRegistry.registerComponent('BlogApp', () => BlogApp);
