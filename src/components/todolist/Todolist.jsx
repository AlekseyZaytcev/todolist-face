import React from "react"
import { connect } from "react-redux"

import { destroyAuthToken } from "../../store/auth/actions"
import { setSuccessMessage, setErrorMessage } from "../../store/messages/actions"
import ProjectForm from "./ProjectForm"

class Todolist extends React.Component {
  render() {
    return(
      <div>
        <h3 className="todo__title">Projects</h3>
        <ProjectForm
          authToken={this.props.authToken}
          destroyAuthToken={this.props.destroyAuthToken}
          setSuccessMessage={this.props.setSuccessMessage}
          setErrorMessage={this.props.setErrorMessage}
        />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return { authToken: state.auth.token }
}

const mapDispatchToProps = { destroyAuthToken, setSuccessMessage, setErrorMessage }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todolist)
