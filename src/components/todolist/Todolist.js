import React from "react"
import ProjectForm from "./project/ProjectForm"
import ProjectsList from "./project/ProjectsList"

class Todolist extends React.Component {
  render() {
    return (
      <div>
        <h3 className="todo__title">Projects</h3>
        <ProjectsList />
        <ProjectForm />
      </div>
    )
  }
}

export default Todolist
