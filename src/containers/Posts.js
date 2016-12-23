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
      <View key={post.id}>
        <Text style={styles.postTitle}>{post.title}</Text>
        <Text style={styles.postDescription}>{post.description}</Text>
        <Text style={styles.post}>{post.post}</Text>
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
    marginTop: 70,
    padding: 20,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 10
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
  post: {

  }
})

export default Posts
