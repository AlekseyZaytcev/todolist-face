import { navigate } from "gatsby"
import React from "react"
import { Form, Button } from "react-bootstrap"

class ReginstrationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isInvalid: false }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.target)

    fetch("https://todolist-endpoints.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify({ user: Object.fromEntries(data) }),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        switch(response.status) {
          case 201:
            this.props.setSuccessMessage("You are successfully registered!")
            navigate("/sign_in")
            break
          case 422:
            response.json().then((data) => this.props.setErrorMessage(data.errors.join(". ")))
            this.setState(state => {
              return { ...state, isInvalid: true }
            })
            break
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
            ! Some of this fields are incorrect
          </span>
        )}
        <Form.Group>
          <Form.Control
            size="lg"
            className="form__required"
            name="username"
            placeholder="User Name"
            isInvalid={this.state.isInvalid}
            required />
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
