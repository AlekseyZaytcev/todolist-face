import React from "react"
import { Link } from "gatsby"
import { Form, Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

class SignInPage extends React.Component {
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
      <Layout pageInfo={{ pageName: "sign_in" }}>
        <SEO title="SignIn" keywords={[`gatsby`, `react`, `bootstrap`]} />

        <Form className="form" onSubmit={this.handleSubmit}>
          <h3 className="form_element">Sign In</h3>
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
            className="form_element"
            size="lg"
            variant="primary"
            type="submit"
          >
            Sign In
          </Button>
          <div>
            <span>
              Don't have an account? <Link to="/sign_up">Sign Up</Link>
            </span>
          </div>
        </Form>
      </Layout>
    )
  }
}

export default SignInPage
