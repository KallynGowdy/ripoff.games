import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout showTitle={false} >
    <SEO title="404: Not found" />
    <div style={{ margin: 'auto', marginTop: '6rem', textAlign: 'center' }}>
      <h1>NOT FOUND</h1>
      <p>It's almost like this page doesn't even exist.</p>
      <Link to="/">Go Home</Link>
    </div>
  </Layout>
)

export default NotFoundPage
