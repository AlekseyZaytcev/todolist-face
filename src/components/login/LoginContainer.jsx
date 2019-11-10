import React from "react"
import { connect } from "react-redux"
import { setAuthToken } from "../../store/auth/actions"

import Form from "./Form"

class LoginContainer extends React.Component {
  render() {
    return (
      <Form token={this.props.token} setAuthToken={this.props.setAuthToken} />
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
  }
}

const mapDispatchToProps = { setAuthToken }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer)
