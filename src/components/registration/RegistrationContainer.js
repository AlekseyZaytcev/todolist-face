import React from "react"
import { connect } from "react-redux"
import { setAuthToken } from "../../store/auth/actions"
import {
  setSuccessMessage,
  setErrorMessage,
} from "../../store/messages/actions"
import Form from "./Form"

class RegistrationContainer extends React.Component {
  render() {
    return (
      <Form
        setAuthToken={this.props.setAuthToken}
        setSuccessMessage={this.props.setSuccessMessage}
        setErrorMessage={this.props.setErrorMessage}
      />
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = { setAuthToken, setSuccessMessage, setErrorMessage }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationContainer)
