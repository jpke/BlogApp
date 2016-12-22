import React, {Component} from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  TextInput,
  View
} from 'react-native'
import formModel from 'tcomb-form-native'
// import FormView from '../components/FormView'

const Form = formModel.form.Form
const Post = formModel.struct({
  title: formModel.String,
  description: formModel.maybe(formModel.String),
  post: formModel.String
})

let options = {
  fields: {
   post: {
      multiline: true,
      numberOfLines: 4,
        stylesheet: {
          ...Form.stylesheet,
          textbox: {
            ...Form.stylesheet.textbox,
            normal: {
              ...Form.stylesheet.textbox.normal,
              height: 100
            },
            error: {
              ...Form.stylesheet.textbox.error,
              height: 100
          }
        }
      }
    },
  }
}

export default class BlogPostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      post: ''
    }
  }
  onTitleInputChanged(event) {
    console.log('onTitleInputChanged running')
    this.setState({title: event.nativeEvent.text})
  }
  onDescriptionInputChanged(event) {
    this.setState({description: event.nativeEvent.text})
  }
  onPostInputChanged(event) {
    this.setState({post: event.nativeEvent.text})
  }
  onPress() {
    this.props.addPost(this.state.title, this.state.description, this.state.post)
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.title}
          placeholder=" Title"
          onChange={this.onTitleInputChanged.bind(this)}/>
        <TextInput style={styles.description}
          placeholder=" Description (optional)"
          onChange={this.onDescriptionInputChanged.bind(this)}/>
        <TextInput style={styles.post}
          placeholder=" Post"
          multiline = {true}
          numberOfLines = {4}
          onChange={this.onPostInputChanged.bind(this)}/>
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
