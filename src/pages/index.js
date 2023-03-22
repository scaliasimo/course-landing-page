import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <div>
          <h1>
            Learn to code cool <b>React</b> apps
          </h1>
          <p>
            Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.
          </p>
          <Link to="/page-2/">Watch the video</Link>
        </div>
      </div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
