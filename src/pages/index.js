import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import TitleParallax from "../components/title-parallax"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout showTitle={false}>
    <SEO title="Home" keywords={[`gaming`, `video games`, `ripoff games`]} />
    <div style={{ margin: 'auto', marginTop: `5rem`, width: '512px' }}>
      <TitleParallax />
    </div>
    <h1 style={{ textAlign: 'center', marginTop: '6rem', fontSize: '4em' }}>Ripoff Games</h1>
  </Layout>
)

export default IndexPage
