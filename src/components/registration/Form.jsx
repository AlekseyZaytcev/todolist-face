import React from "react"
import { Form, Button } from "react-bootstrap"

class ReginstrationForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.target)

    fetch("https://todolist-endpoints.herokuapp.com/users", {
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
        <h3 className="form__element">Sign Up</h3>
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

        <Form.Group>
          <Form.Control
            size="lg"
            name="password_confirmation"
            type="password"
            placeholder="Confirm Password"
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
