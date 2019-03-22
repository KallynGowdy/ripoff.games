import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import TitleParallax from "../components/title-parallax"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout showTitle={false}>
    <SEO title="Home" keywords={[`gaming`, `video games`, `ripoff games`]} />
    <h1>Ripoff Games</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <TitleParallax />
    </div>
  </Layout>
)

export default IndexPage
