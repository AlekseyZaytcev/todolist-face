import React from "react"
import { connect } from "react-redux"
import { navigate } from "gatsby"
import { destroyAuthToken } from "../../../store/auth/actions"
import {
  setSuccessMessage,
  setErrorMessage,
} from "../../../store/messages/actions"
import InlineForm from "./InlineForm"

class TaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { taskNameInput: "" }
  }

  handleOnCancel = () => {
    this.setState({ ...this.state, taskNameInput: "" })
  }
  handleOnChange = e => {
    this.setState({ ...this.state, taskNameInput: e.target.value })
  }
  handleOnSubmit = e => {
    e.preventDefault()
    const payload = {
      task: { name: this.state.taskNameInput },
    }

    fetch(
      `https://todolist-endpoints.herokuapp.com/projects/${this.props.projectId}/tasks`,
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Accept": "application/json",
          "Authorization": this.props.authToken,
          "Content-Type": "application/json",
        },
      }
    )
      .then(response => {
        console.log(response)
        switch (response.status) {
          case 201:
            response.json().then(json => this.props.addTaskComponent(json.data))
            this.props.setSuccessMessage(
              `Task "${this.state.taskNameInput}" successfully created!`
            )
            this.handleOnCancel()
            break
          case 422:
            this.props.setErrorMessage(
              "The task with such name does already exist."
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
      <div className="task__new-form">
        <InlineForm
          submitBtnName="Create Task"
          hideControlsIfEmpty="true"
          inputValue={this.state.taskNameInput}
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
)(TaskForm)
