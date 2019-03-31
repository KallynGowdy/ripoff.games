import React from "react"

import Layout from "../components/layout"
import TitleParallax from "../components/title-parallax"
import SEO from "../components/seo"

import style from './index.module.css'

const IndexPage = () => (
  <Layout showTitle={false}>
    <SEO title="Home" keywords={[`gaming`, `video games`, `ripoff games`]} />
    <div className={style.titleParallax}>
      <TitleParallax />
    </div>
    <h1 style={{ textAlign: 'center', marginTop: '6rem', fontSize: '4em' }}>Ripoff Games</h1>
  </Layout>
)

export default IndexPage
