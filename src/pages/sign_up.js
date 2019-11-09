import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RegistrationForm from "../components/registration/Form"

class SignUpPage extends React.Component {
  render() {
    return (
      <Layout pageInfo={{ pageName: "sign_up" }}>
        <SEO title="SignUp" keywords={[`gatsby`, `react`, `bootstrap`]} />

        <div className="form_wrapper">
          <RegistrationForm />
          <span>
            Allready a member? <Link to="/sign_in">Sign In</Link>
          </span>
        </div>
      </Layout>
    )
  }
}

export default SignUpPage
