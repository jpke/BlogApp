import React, {Component} from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'

export default Posts = (props) => {
  const createPost = (post) => (
    <View key={post.id}>
      <Text style={styles.postTitle}>{post.title}</Text>
      <Text style={styles.postDescription}>{post.description}</Text>
      <Text style={styles.post}>{post.post}</Text>
    </View>
  )
  console.log('POSTS:',props.posts)
  return(
    <View style={styles.container}>
      <ScrollView>
        {props.posts.map(createPost)}
      </ScrollView>
    </View>
  )
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
  post: {

  }
})
