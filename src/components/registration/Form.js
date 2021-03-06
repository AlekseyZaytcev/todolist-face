import { navigate } from "gatsby"
import React from "react"
import { Form, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"

class ReginstrationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isInvalid: false }
  }

  handleSubmit = e => {
    e.preventDefault()
    const data = new FormData(e.target)

    if (data.get("password") !== data.get("password_confirmation")) {
      this.props.setErrorMessage("Passwords need to match!")
      this.setState(state => {
        return { ...state, isInvalid: true }
      })
      return
    }

    fetch("https://todolist-endpoints.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify({ user: Object.fromEntries(data) }),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        switch (response.status) {
          case 201:
            this.props.setSuccessMessage("You are successfully registered!")
            navigate("/sign_in")
            break
          case 422:
            response
              .json()
              .then(data => this.props.setErrorMessage(data.errors.join(". ")))
            this.setState(state => {
              return { ...state, isInvalid: true }
            })
            break
          default:
        }
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h3 className="form__element">Sign Up</h3>
        {this.state.isInvalid && (
          <span className="form__error_message">
            <FontAwesomeIcon icon={faExclamationTriangle} /> Some of this fields
            are incorrect
          </span>
        )}
        <Form.Group>
          <Form.Control
            size="lg"
            className="form__required"
            name="username"
            placeholder="User Name"
            isInvalid={this.state.isInvalid}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            size="lg"
            className="form__required"
            name="password"
            type="password"
            placeholder="Password"
            isInvalid={this.state.isInvalid}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            size="lg"
            className="form__required"
            name="password_confirmation"
            type="password"
            placeholder="Confirm Password"
            isInvalid={this.state.isInvalid}
            required
          />
        </Form.Group>

        <Button
          size="lg"
          className="form__element"
          variant="primary"
          type="submit"
        >
          Sign Up
        </Button>
      </Form>
    )
  }
}

export default ReginstrationForm
