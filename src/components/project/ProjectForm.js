import React from "react"
import { connect } from "react-redux"
import { navigate } from "gatsby"
import { destroyAuthToken } from "../../store/auth/actions"
import {
  setSuccessMessage,
  setErrorMessage,
} from "../../store/messages/actions"
import InlineForm from "./InlineForm"

class ProjectForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { projectNameInput: "" }
  }

  handleOnCancel = () => {
    this.setState({ ...this.state, projectNameInput: "" })
  }
  handleOnChange = e => {
    this.setState({ ...this.state, projectNameInput: e.target.value })
  }
  handleOnSubmit = e => {
    e.preventDefault()
    const payload = {
      project: { name: this.state.projectNameInput },
    }

    fetch("https://todolist-endpoints.herokuapp.com/projects", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Accept": "application/json",
        "Authorization": this.props.authToken,
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        switch (response.status) {
          case 201:
            response
              .json()
              .then(json => this.props.addProjectComponent(json.data))
            this.props.setSuccessMessage(
              `Project "${this.state.projectNameInput}" successfully created!`
            )
            this.handleOnCancel()
            break
          case 422:
            this.props.setErrorMessage(
              "The project with such name does already exist."
            )
            break
          case 401:
            this.props.destroyAuthToken()
            this.props.setErrorMessage(
              "You are not authorized to perform this action."
            )
            navigate("/sign_in")
            break
          default:
        }
      })
      .catch(error => this.props.setErrorMessage(error.message))
  }

  render() {
    return (
      <div className="project__new-form">
        <InlineForm
          submitBtnName="Create Project"
          hideControlsIfEmpty="true"
          inputValue={this.state.projectNameInput}
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}
          handleOnCancel={this.handleOnCancel}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { authToken: state.auth.token }
}

const mapDispatchToProps = {
  destroyAuthToken,
  setSuccessMessage,
  setErrorMessage,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm)
