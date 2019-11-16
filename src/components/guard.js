import React from "react"
import { navigate } from "gatsby"
import { connect } from "react-redux"
import { setErrorMessage } from "../store/messages/actions"

class Guard extends React.Component {
  componentWillMount() {
    if (!this.props.authToken) {
      this.props.setErrorMessage(
        "You are not authorized to perform this action."
      )
      navigate("/sign_in")
    }
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

const mapStateToProps = state => {
  return { authToken: state.auth.token }
}

const mapDispatchToProps = { setErrorMessage }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Guard)
