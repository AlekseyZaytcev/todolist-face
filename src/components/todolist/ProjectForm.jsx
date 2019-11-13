import React from "react"
import { navigate } from "gatsby"
import { InputGroup, FormControl, Button } from "react-bootstrap"

class ProjectForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { projectNameInput: "" }
  }

  handleOnCancel = () => { this.setState({...this.state, projectNameInput: ""}) }
  handleOnChange = (e) => { this.setState({...this.state, projectNameInput: e.target.value}) }
  handleOnSubmit = (e) => {
    e.preventDefault()

    const payload = {
      project: { name: this.state.projectNameInput }
    }

    fetch("https://todolist-endpoints.herokuapp.com/projects", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Accept": "application/json",
        "Authorization": this.props.authToken,
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        switch (response.status) {
          case 201:
            this.props.setSuccessMessage(`Project "${this.state.projectNameInput}" successfully created!`)
            this.handleOnCancel()
            break
          case 422:
            this.props.setErrorMessage("The project with such name does already exist.")
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
        {this.state.projectNameInput &&
          <div className="form__controls">
            <Button className="form__btn" size="lg" variant="primary" onClick={this.handleOnSubmit}>Create Project</Button>
            <Button className="form__btn" size="lg" variant="secondary" onClick={this.handleOnCancel}>Cancel</Button>
          </div>
        }
      </>
    )
  }
}

export default ProjectForm
