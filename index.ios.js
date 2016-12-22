'use strict';

import React, { AppRegistry } from 'react-native';
import App from './src/containers/app';

AppRegistry.registerComponent('BlogApp', () => App);

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   NavigatorIOS,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// import {Provider} from 'react-redux'
// import store from './src/configureStore'
// import BlogPostForm from './src/containers/BlogPostForm'
// import Posts from './src/containers/Posts'

// export default class BlogApp extends Component {
//   constructor() {
//     super()
//     // this.state = {
//     //   posts: [{
//     //     title: 'title here',
//     //     description: 'description here',
//     //     post: 'post here',
//     //     id: 0
//     //     }],
//     //   message: ''
//     // }
//     // this.addPost= this.addPost.bind(this)
//   }
//   // addPost(title, description, post) {
//   //   console.log('index onPress running')
//   //   console.log('initial state.posts', this.state)
//   //   console.log(this.state.posts == [])
//   //   let newPosts = [ ...this.state.posts, {title: title, description: description, post: post, id: this.state.posts.length}]
//   //   this.setState({
//   //     ...{posts: newPosts}
//   //   })
//   //   console.log('index state', this.state)
//   // }
//   render() {
//     return (
//       <Provider store={store}>
//         <NavigatorIOS
//           style={styles.wrapper}
//           initialRoute={{
//             title: 'BlogApp',
//             component: BlogPostForm,
//           }}/>
//       </Provider>
//       // <View>
//       //   <BlogPostForm addPost = {this.addPost.bind(this)}/>
//       //   <Text>{this.state.message}</Text>
//       // </View>
//
//       // <View style={styles.container}>
//       //   <Posts posts = {this.state.posts}/>
//       // </View>
//
//       // <View style={styles.container}>
//       //   <Text style={styles.welcome}>
//       //     Welcome to React Native!
//       //   </Text>
//       //   <Text style={styles.instructions}>
//       //     To get started, edit index.ios.js
//       //   </Text>
//       //   <Text style={styles.instructions}>
//       //     Press Cmd+R to reload,{'\n'}
//       //     Cmd+D or shake for dev menu
//       //   </Text>
//       // </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   wrapper: {
//     flex: 1
//   },
//   container: {
//     flex: 1,
//     padding: 10,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   // welcome: {
//   //   fontSize: 20,
//   //   textAlign: 'center',
//   //   margin: 10,
//   // },
//   // instructions: {
//   //   textAlign: 'center',
//   //   color: '#333333',
//   //   marginBottom: 5,
//   // },
// });

AppRegistry.registerComponent('BlogApp', () => App);
