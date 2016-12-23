import React, {Component} from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'

class Posts extends Component {
  constructor(props) {
    super(props)
    this.createPost.bind(this)
  }
  createPost(post) {
    return(
      <View key={post.id} style={styles.post}>
        <Text style={styles.postTitle}>{post.title}</Text>
        <Text style={styles.postDescription}>{post.description}</Text>
        <Text>{post.post}</Text>
      </View>
    )
  }
  navigate(routeName, props) {
    this.props.navigator.push({
      name: routeName,
      passProps: {
        addPost: this.props.addPost,
        posts: this.props.posts
      }
    });
  }
  render() {
    console.log('POSTS:', this.props.posts)
    return(
      <View style={styles.container}>
        <TouchableHighlight onPress={this.navigate.bind(this, 'BlogPostForm')} style={styles.button}>
          <Text style={styles.buttonText}>
            Create New Post
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.navigate.bind(this, 'Home')} style={styles.button}>
          <Text style={styles.buttonText}>
            Home
          </Text>
        </TouchableHighlight>
        <ScrollView>
          {this.props.posts.map(this.createPost)}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 10,
    padding: 20,
    backgroundColor: '#ffffff'
  },
  postTitle: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  postDescription: {
    alignSelf: 'center',
    fontStyle: 'italic'
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
  },
  post: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 10
  }
})

export default Posts
