import React, {Component} from 'react'
import fetch from 'isomorphic-fetch'
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'

class Posts extends Component {
  constructor(props) {
    console.log("Post component mounting...")
    super(props)
    this.listPost.bind(this)
    this.state = {
      posts: [],
      isLoading: true
    }
  }
  componentDidMount() {
    console.log("Post component mounting")
    fetch('http://localhost:8080/posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(posts => {
      console.log("POSTS:: ", posts)
      this.setState({posts: posts, isLoading: false})
    })
  }
  listPost(post, index) {
    return(
      <View key={index} style={styles.post}>
        <Text style={styles.postTitle}>{post.title}</Text>
        <Text style={styles.postDescription}>{post.description}</Text>
        <Text>{post.body}</Text>
      </View>
    )
  }
  navigate(routeName) {
    this.props.navigator.resetTo({
      name: routeName,
    });
  }
  render() {
    let spinner = this.state.isLoading ? (<ActivityIndicator size= 'large'/>) : (<View/>)
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
        {spinner}
        <ScrollView>
          {(this.state.posts) ? this.state.posts.map(this.listPost) : <Text style={styles.postTitle}>No Posts Yet</Text>}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 20,
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
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 10
  }
})

export default Posts
