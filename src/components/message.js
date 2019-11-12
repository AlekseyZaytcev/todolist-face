import React from "react"
import { connect } from "react-redux"
import { Alert } from "react-bootstrap"

import {
  dismissSuccessMessage,
  dismissWarningMessage,
  dismissErrorMessage,
  dismissAllMessage,
} from "../store/messages/actions"

class Message extends React.Component {
  componentWillMount() {
    this.clearTimer = setTimeout(() => {
      this.props.dismissAllMessage()
    }, 4000)
  }

  componentWillUnmount() {
    if (this.clearTimer) {
      clearTimeout(this.clearTimer)
    }
  }

  render() {
    return (
      <div>
        {this.props.successMessage && (
          <Alert
            variant="success"
            dismissible="true"
            onClose={this.props.dismissSuccessMessage}
          >
            {this.props.successMessage}
          </Alert>
        )}
        {this.props.warningMessage && (
          <Alert
            variant="warning"
            dismissible="true"
            onClose={this.props.dismissWarningMessage}
          >
            {this.props.warningMessage}
          </Alert>
        )}
        {this.props.errorMessage && (
          <Alert
            variant="danger"
            dismissible="true"
            onClose={this.props.dismissErrorMessage}
          >
            {this.props.errorMessage}
          </Alert>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    successMessage: state.messages.successMessage,
    warningMessage: state.messages.warningMessage,
    errorMessage: state.messages.errorMessage,
  }
}

const mapDispatchToProps = {
  dismissSuccessMessage,
  dismissWarningMessage,
  dismissErrorMessage,
  dismissAllMessage,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message)
