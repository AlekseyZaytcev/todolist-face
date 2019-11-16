import React from "react"
import { navigate } from "gatsby"
import { connect } from "react-redux"
import { destroyAuthToken } from "../../store/auth/actions"
import { setErrorMessage } from "../../store/messages/actions"
import Project from "./Project"
import ProjectForm from "./ProjectForm"

function List(props) {
  const projects = props.projects
  const list = projects.map(project => (
    <Project
      key={project.id}
      project={project}
      deleteComponent={props.deleteProjectComponent}
    />
  ))

  return <div>{list}</div>
}

class ProjectsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [],
    }
  }

  addProjectComponent = project => {
    this.setState({ projects: this.state.projects.concat([project]) })
  }

  deleteProjectComponent = id => {
    let filterProjects = id => {
      return function(e) {
        return e.id !== id
      }
    }

    this.setState({
      projects: this.state.projects.filter(filterProjects(id)),
    })
  }

  componentWillMount() {
    fetch("https://todolist-endpoints.herokuapp.com/projects", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Authorization": this.props.authToken,
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        switch (response.status) {
          case 200:
            response.json().then(json => this.setState({ projects: json.data }))
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
      <div>
        <h3 className="todo__title">Projects</h3>
        <List
          projects={this.state.projects}
          deleteProjectComponent={this.deleteProjectComponent}
        />
        <ProjectForm addProjectComponent={this.addProjectComponent} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { authToken: state.auth.token }
}
const mapDispatchToProps = { destroyAuthToken, setErrorMessage }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsList)
