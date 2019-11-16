import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight, faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons"

class Project extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.project.id,
      name: this.props.project.attributes.name
    }
  }

  render() {
    return(
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
      />
      <FontAwesomeIcon
      icon={faTrashAlt}
      className="project__element"
      />
      </div>
      </div>
    )
  }
}

export default Project
