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

export default class BlogApp extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }
  onPress(newPost) {
    this.setState({
      ...newPost
    })
  }
  render() {
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

      <BlogPostForm onPress = {this.onPress}/>

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
    justifyContent: 'center',
    alignItems: 'center',
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
