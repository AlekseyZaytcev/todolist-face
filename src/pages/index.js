import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Guard from "../components/guard"
import ProjectsList from "../components/project/ProjectsList"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Guard>
      <div className="todo__content_wrapper">
        <ProjectsList />
      </div>
    </Guard>
  </Layout>
)

export default IndexPage
