import React, {Component} from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
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

// var immutableMap = Immutable.fromJS(t.form.Form.stylesheet);
// var immutableMerge = immutableMap.mergeDeep({textbox: {normal: {height: 100}}})
// var tcombStyle = immutableMerge.toJS();
// let options = {
//   fields: {
//     post: {
//       multiline: true,
//       numberOfLines: 4,
//       stylesheet: tcombStyle,
//       placeholder: 'Placeholder here',
//       textAlign: 'center'
//     }
//   }
// }
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
  }
  onPress() {
    console.log("onPress clicked")
    const value = this.refs.form.getValue()
    if(value) console.log("input value: ", value)
    this.props.onPress(value)
  }

  render() {
    return (
      <View style={styles.container}>
        <Form ref='form' type={Post} options={{}}
        />
        <TouchableHighlight style={styles.button} onPress={this.props.onPress} underlayColor='#99d9f4'>
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
