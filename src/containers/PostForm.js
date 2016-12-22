import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import FormView from '../components/FormView'
import {addPost} from '../actions/actions'

class PostForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {state, actions} = this.props;
    console.log("state:", state, "actions:", actions)
    return (
      <FormView addPost = {addPost}/>
    );
  }
}

export default connect(null, (dispatch) => ({
  actions: bindActionCreators(addPost, dispatch)
}))(PostForm);
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addPost: (title, description, post) => {
//       return dispatch(addPost(title, description, content))
//     }
//   }
// }
//
// export default connect(null, mapDispatchToProps)(FormView)
