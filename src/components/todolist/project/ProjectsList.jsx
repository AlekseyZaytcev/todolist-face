import React from "react"
import { navigate } from "gatsby"
import { connect } from "react-redux"

import { destroyAuthToken } from "../../../store/auth/actions"
import { setErrorMessage } from "../../../store/messages/actions"

import Project from "./Project"

function List(props) {
  const projects = props.projects
  const list = projects.map((project) => <Project key={project.id} project={project}/>)

  return (<div>{list}</div>)
}

class ProjectsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: []
    }
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
            response.json().then((json) => this.setState({ projects: json.data }))
            break
          case 401:
            this.props.destroyAuthToken()
            this.props.setErrorMessage("You are not authorized to perform this action.")
            navigate("/sign_in")
            break
        }
      })
      .catch(error => this.props.setErrorMessage(error.message))
  }


  render() {
    return(
      <List projects={this.state.projects} />
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
