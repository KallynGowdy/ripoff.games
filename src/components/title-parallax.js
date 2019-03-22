import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Parallax from './parallax'
import Layer from './layer';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const TitleParallax = ({}) => (
    <StaticQuery
    query={graphql`
      query {
        layer1: file(relativePath: { eq: "pirate-skull.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => 
        <Parallax>
            <Layer depth={0.5}>
                <Img fluid={data.layer1.childImageSharp.fluid}/>
            </Layer>
            {/* <Layer depth={0.2}>
            </Layer>
            <Layer depth={0.3}>
            </Layer> */}
        </Parallax>
    }
  />
);

export default TitleParallax
