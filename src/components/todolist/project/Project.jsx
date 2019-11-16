import React from "react"

import { InputGroup, FormControl, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight, faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons"

class Project extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.project.id,
      name: this.props.project.attributes.name,
      projectNameInput: "",
      projectInputOpen: false
    }
  }

  handleOnTrash() {
    alert('Ololo')
  }

  handleOnEdit = () => {
    this.setState({projectNameInput: this.state.name, projectInputOpen: true})
  }

  handleOnCancel = () => { this.setState({projectNameInput: "", projectInputOpen: false}) }
  handleOnChange = (e) => { this.setState({projectNameInput: e.target.value}) }
  handleOnSave = (e) => {}

  render() {
    return(

      <>
      {
        this.state.projectInputOpen ? (
        <>
        <InputGroup size="lg">
        <FormControl
        aria-label="Large"
        aria-describedby="inputGroup-sizing-sm"
        placeholder="Enter Project Name ..."
        value={this.state.projectNameInput}
        onChange={this.handleOnChange}
        />
        </InputGroup>
        <div className="form__controls">
        <Button className="form__btn" size="lg" variant="primary" onClick={this.handleOnSave}>Save</Button>
        <Button className="form__btn" size="lg" variant="secondary" onClick={this.handleOnCancel}>Cancel</Button>
        </div>
        </>
      ) : (
        <div className="form-control form__element project">
        <div className="project__title">
        <FontAwesomeIcon
        icon={faCaretRight}
        className="project__element"
        />
        <span className="project__element">{this.state.name}</span>
        </div>

        <div class="project__controls">
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
      )
      }
      </>
  )
  }
}

export default Project
