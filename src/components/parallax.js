import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Parallax from 'parallax-js'

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

class ParallaxComponent extends Component {
    componentDidMount() {
        this.parallax = new Parallax(this.scene)
    }
    componentWillUnmount() {
        this.parallax.disable()
    }
    render() {
        return (
            <ul ref={el => this.scene = el}>
                {this.props.children}
            </ul>
        )
    }
}

export default ParallaxComponent
