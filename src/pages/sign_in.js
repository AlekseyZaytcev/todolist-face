import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LoginContainer from "../components/login/LoginContainer"

class SignInPage extends React.Component {
  render() {
    return (
      <Layout pageInfo={{ pageName: "sign_in" }}>
        <SEO title="SignIn" keywords={[`gatsby`, `react`, `bootstrap`]} />

        <div className="form_wrapper">
          <LoginContainer />
          <span>
            Don't have an account? <Link to="/sign_up">Sign Up</Link>
          </span>
        </div>
      </Layout>
    )
  }
}

export default SignInPage
