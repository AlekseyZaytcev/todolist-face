import { navigate } from "gatsby"
import React from "react"
import { Form, Button } from "react-bootstrap"

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isInvalid: false }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.target)

    fetch("https://todolist-endpoints.herokuapp.com/users/sign_in", {
      method: "POST",
      body: JSON.stringify({ user: Object.fromEntries(data) }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        this.props.setAuthToken(response.headers.get("Authorization"))

        switch (response.status) {
          case 201:
            this.props.setSuccessMessage("Logged in successfully!")
            navigate("/")
            break
          case 401:
            this.setState(state => {
              return { ...state, isInvalid: true }
            })
            break
        }
      })
      .catch(error => this.props.setErrorMessage(error.message))
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h3 className="form__element">Sign In</h3>
        {this.state.isInvalid && (
          <span className="form__error_message">
            &#9888; Incorect login or(and) password
          </span>
        )}
        <Form.Group className="form__element">
          <Form.Control
            isInvalid={this.state.isInvalid}
            size="lg"
            name="username"
            placeholder="User Name"
          />
          <Form.Control.Feedback type="invalid" />
        </Form.Group>

        <Form.Group>
          <Form.Control
            isInvalid={this.state.isInvalid}
            size="lg"
            name="password"
            type="password"
            placeholder="Password"
          />
          <Form.Control.Feedback type="invalid" />
        </Form.Group>

        <Button
          className="form__element"
          size="lg"
          variant="primary"
          type="submit"
        >
          Sign In
        </Button>
      </Form>
    )
  }
}

export default LoginForm
