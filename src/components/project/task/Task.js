import React from "react"
import { connect } from "react-redux"
import { navigate } from "gatsby"
import { destroyAuthToken } from "../../../store/auth/actions"
import {
  setSuccessMessage,
  setErrorMessage,
} from "../../../store/messages/actions"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCaretRight,
  faPencilAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons"
import InlineForm from "./InlineForm"

class Task extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.task.id,
      name: this.props.task.attributes.name,
      taskNameInput: "",
      taskEditorIsOpen: false,
    }
  }

  handleOnEdit = () => {
    this.setState({
      taskNameInput: this.state.name,
      taskEditorIsOpen: true,
    })
  }

  handleOnCancel = () => {
    this.setState({ taskNameInput: "", taskEditorIsOpen: false })
  }
  handleOnChange = e => {
    this.setState({ taskNameInput: e.target.value })
  }
  handleOnSave = e => {
    e.preventDefault()
    const payload = {
      task: { name: this.state.taskNameInput },
    }
    fetch(
      `https://todolist-endpoints.herokuapp.com/projects/${this.props.projectId}/tasks/${this.state.id}`,
      {
        method: "PATCH",
        body: JSON.stringify(payload),
        headers: {
          "Accept": "application/json",
          "Authorization": this.props.authToken,
          "Content-Type": "application/json",
        },
      }
    )
      .then(response => {
        switch (response.status) {
          case 200:
            this.props.setSuccessMessage(
              `Task "${this.state.name}" successfully updated!`
            )
            this.setState({
              name: this.state.taskNameInput,
              taskEditorIsOpen: false,
            })
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

  handleOnTrash = e => {
    e.preventDefault()
    fetch(
      `https://todolist-endpoints.herokuapp.com/projects/${this.props.projectId}/tasks/${this.state.id}`,
      {
        method: "DELETE",
        headers: {
          "Accept": "application/json",
          "Authorization": this.props.authToken,
          "Content-Type": "application/json",
        },
      }
    )
      .then(response => {
        switch (response.status) {
          case 200:
            this.props.setSuccessMessage(
              `Task "${this.state.name}" successfully deleted!`
            )
            this.props.deleteComponent(this.state.id)
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
      <>
        {this.state.taskEditorIsOpen ? (
          <InlineForm
            submitBtnName="Save"
            inputValue={this.state.taskNameInput}
            handleOnChange={this.handleOnChange}
            handleOnSubmit={this.handleOnSave}
            handleOnCancel={this.handleOnCancel}
          />
        ) : (
          <div className="form-control form__element task">
            <div className="task__title">
              <FontAwesomeIcon icon={faCaretRight} className="task__element" />
              <span className="task__element">{this.state.name}</span>
            </div>

            <div className="task__controls">
              <FontAwesomeIcon
                icon={faPencilAlt}
                className="task__element"
                onClick={this.handleOnEdit}
              />
              <FontAwesomeIcon
                icon={faTrashAlt}
                className="task__element"
                onClick={this.handleOnTrash}
              />
            </div>
          </div>
        )}
      </>
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
)(Task)
