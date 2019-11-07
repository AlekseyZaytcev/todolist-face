import React from "react"
import { Link } from "gatsby"
import { Form, Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SignUpPage = () => (
  <Layout pageInfo={{ pageName: "sign_up" }}>
    <SEO title="SignUp" keywords={[`gatsby`, `react`, `bootstrap`]} />

    <Form className="form">
      <h3 className="form_element">Sign Up</h3>
      <Form.Group controlId="formUserName">
        <Form.Control size="lg" placeholder="User Name" />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Control size="lg" type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group controlId="formConfirmPassword">
        <Form.Control
          size="lg"
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

export default SignUpPage
