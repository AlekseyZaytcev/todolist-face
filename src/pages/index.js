import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Guard from "../components/guard"
import Todolist from "../components/todolist/Todolist"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Guard>
      <div className="todo__content_wrapper">
        <Todolist />
      </div>
    </Guard>
  </Layout>
)

export default IndexPage
