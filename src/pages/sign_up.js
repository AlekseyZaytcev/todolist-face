import React from "react"
import { Link } from "gatsby"
import { Form, Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

class SignUpPage extends React.Component {
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
      <Layout pageInfo={{ pageName: "sign_up" }}>
        <SEO title="SignUp" keywords={[`gatsby`, `react`, `bootstrap`]} />

        <Form className="form" onSubmit={this.handleSubmit}>
          <h3 className="form_element">Sign Up</h3>
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
            className="form_element"
            variant="primary"
            type="submit"
          >
            Sign Up
          </Button>
          <div>
            <span>
              Allready a member? <Link to="/sign_in">Sign In</Link>
            </span>
          </div>
        </Form>
      </Layout>
    )
  }
}

export default SignUpPage
