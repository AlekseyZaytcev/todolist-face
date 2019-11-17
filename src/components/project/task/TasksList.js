import React from "react"
import { navigate } from "gatsby"
import { connect } from "react-redux"
import { destroyAuthToken } from "../../../store/auth/actions"
import { setErrorMessage } from "../../../store/messages/actions"
import Task from "./Task"
import TaskForm from "./TaskForm"

function List(props) {
  const tasks = props.tasks
  const list = tasks.map(task => (
    <Task
      key={task.id}
      projectId={props.projectId}
      task={task}
      deleteComponent={props.deleteTaskComponent}
    />
  ))

  return <div>{list}</div>
}

class TasksList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
    }
  }

  addTaskComponent = task => {
    this.setState({ tasks: this.state.tasks.concat([task]) })
  }

  deleteTaskComponent = id => {
    let filterTasks = id => {
      return function(e) {
        return e.id !== id
      }
    }

    this.setState({
      tasks: this.state.tasks.filter(filterTasks(id)),
    })
  }

  componentWillMount() {
    fetch(
      `https://todolist-endpoints.herokuapp.com/projects/${this.props.projectId}/tasks`,
      {
        method: "GET",
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
            response.json().then(json => this.setState({ tasks: json.data }))
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
        <List
          projectId={this.props.projectId}
          tasks={this.state.tasks}
          deleteTaskComponent={this.deleteTaskComponent}
        />
        <TaskForm
          projectId={this.props.projectId}
          addTaskComponent={this.addTaskComponent}
        />
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
)(TasksList)
