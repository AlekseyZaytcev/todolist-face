import React from "react"

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
      <span className="project__title">{this.state.name}</span>
      </div>
    )
  }
}

export default Project
