import React from "react"
import { connect } from "react-redux"
import { navigate } from "gatsby"
import { destroyAuthToken } from "../../store/auth/actions"
import {
  setSuccessMessage,
  setErrorMessage,
} from "../../store/messages/actions"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCaretRight,
  faPencilAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons"
import InlineForm from "./InlineForm"

class Project extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.project.id,
      name: this.props.project.attributes.name,
      projectNameInput: "",
      projectEditorIsOpen: false,
    }
  }

  handleOnEdit = () => {
    this.setState({
      projectNameInput: this.state.name,
      projectEditorIsOpen: true,
    })
  }

  handleOnCancel = () => {
    this.setState({ projectNameInput: "", projectEditorIsOpen: false })
  }
  handleOnChange = e => {
    this.setState({ projectNameInput: e.target.value })
  }
  handleOnSave = e => {
    e.preventDefault()
    const payload = {
      project: { name: this.state.projectNameInput },
    }
    fetch(
      `https://todolist-endpoints.herokuapp.com/projects/${this.state.id}`,
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
              `Project "${this.state.name}" successfully updated!`
            )
            this.setState({
              name: this.state.projectNameInput,
              projectEditorIsOpen: false,
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
      `https://todolist-endpoints.herokuapp.com/projects/${this.state.id}`,
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
              `Project "${this.state.name}" successfully deleted!`
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
        {this.state.projectEditorIsOpen ? (
          <InlineForm
            submitBtnName="Save"
            inputValue={this.state.projectNameInput}
            handleOnChange={this.handleOnChange}
            handleOnSubmit={this.handleOnSave}
            handleOnCancel={this.handleOnCancel}
          />
        ) : (
          <div className="form-control form__element project">
            <div className="project__title">
              <FontAwesomeIcon
                icon={faCaretRight}
                className="project__element"
              />
              <span className="project__element">{this.state.name}</span>
            </div>

            <div className="project__controls">
              <FontAwesomeIcon
                icon={faPencilAlt}
                className="project__element"
                onClick={this.handleOnEdit}
              />
              <FontAwesomeIcon
                icon={faTrashAlt}
                className="project__element"
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
)(Project)
