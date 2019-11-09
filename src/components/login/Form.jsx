import React from "react"
import { Form, Button } from "react-bootstrap"

class LoginForm extends React.Component {
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
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h3 className="form__element">Sign In</h3>
        <Form.Group>
          <Form.Control size="lg" name="username" placeholder="User Name" />
        </Form.Group>

        <Form.Group>
          <Form.Control
            size="lg"
            name="password"
            type="password"
            placeholder="Password"
          />
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
