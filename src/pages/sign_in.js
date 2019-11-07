import React from "react"
import { Link } from "gatsby"
import { Form, Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SignInPage = () => (
  <Layout pageInfo={{ pageName: "sign_in" }}>
    <SEO title="SignIn" keywords={[`gatsby`, `react`, `bootstrap`]} />

    <Form className="form">
      <h3 className="form_element">Sign In</h3>
      <Form.Group controlId="formUserName">
        <Form.Control size="lg" placeholder="User Name" />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Control size="lg" type="password" placeholder="Password" />
      </Form.Group>

      <Button
        size="lg"
        className="form_element"
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

export default SignInPage
