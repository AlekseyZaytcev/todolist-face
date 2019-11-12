import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Guard from "../components/guard"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Guard>
      <div>Here will be content</div>
    </Guard>
  </Layout>
)

export default IndexPage
