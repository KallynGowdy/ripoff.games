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
        skull: file(relativePath: { eq: "Skull.png" }) {
          childImageSharp {
            fixed(width: 512, height: 384) {
                ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        sword1: file(relativePath: { eq: "Sword1.png" }) {
            childImageSharp {
                fixed(width: 512, height: 384) {
                    ...GatsbyImageSharpFixed_noBase64
                }
            }
        }
        sword2: file(relativePath: { eq: "Sword2.png" }) {
            childImageSharp {
                fixed(width: 512, height: 384) {
                    ...GatsbyImageSharpFixed_noBase64
                }
            }
        }
      }
    `}
    render={data => 
        <Parallax>
            <Layer depth={0.5}>
                <Img critical={true} fixed={data.skull.childImageSharp.fixed}/>
            </Layer>
            <Layer depth={0.4}>
                <Img critical={true} fixed={data.sword1.childImageSharp.fixed}/>
            </Layer>
            <Layer depth={0.6}>
                <Img critical={true} fixed={data.sword2.childImageSharp.fixed}/>
            </Layer>
        </Parallax>
    }
  />
);

export default TitleParallax
