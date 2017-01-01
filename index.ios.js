'use strict';
import React, {Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';

import Home from './src/containers/home'
import BlogPostForm from './src/containers/BlogPostForm'
import Posts from './src/containers/Posts'

class BlogApp extends Component {
  renderScene(route, navigator) {
    if(route.name == 'Home') {
      return <Home navigator={navigator}/>
    }
    if(route.name == 'BlogPostForm') {
      return <BlogPostForm navigator={navigator}/>
    }
    if(route.name == 'Posts') {
      return <Posts navigator={navigator}
                key="profile-nav-bar"/>
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={{name: 'Home'}}
          renderScene={this.renderScene.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('BlogApp', () => BlogApp);
