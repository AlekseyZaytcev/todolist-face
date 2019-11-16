import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCaretRight,
  faPencilAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons"
import { InlineForm } from "../InlineForm"

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

  handleOnTrash() {
    alert("Ololo")
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
  handleOnSave = e => {}

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

export default Project
