import * as React from "react"
import { Link } from "gatsby"
import Header from "../components/Header/header"
import Card from "../components/Card/Card"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Header />
    <div className="Hero">
      <div className="HeroGroup">
        <div>
          <h1>
            Learn to code cool <br /><b>React</b> apps
          </h1>
          <p>
            Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.
          </p>
          <Link to="/page-2/">Watch the video</Link>
          <div className="logos">
            <img src={require("../images/logo-sketch.png").default} width="50" />
            <img src={require("../images/logo-figma.png").default} width="50" />
            <img src={require("../images/logo-studio.png").default} width="50" />
            <img src={require("../images/logo-framer.png").default} width="50" />
            <img src={require("../images/logo-react.png").default} width="50" />
            <img src={require("../images/logo-swift.png").default} width="50" />
          </div>
          <svg width="100%" height="200px" fill="none" version="1.1"
            xmlns="http://www.w3.org/2000/svg">
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fff" />
              <stop offset="50%" stopColor="#fff" />
              <stop offset="100%" stopColor="#fff" />
            </linearGradient>
            <path
              fill="url(#grad1)"
              d="
          M0 67
          C 273,183
            822,-40
            1920.00,106 
          
          V 359 
          H 0 
          V 67
          Z">
              <animate
                repeatCount="indefinite"
                fill="url(#grad1)"
                attributeName="d"
                dur="15s"
                attributeType="XML"
                values="
            M0 77 
            C 473,283
              822,-40
              1920,116 
            
            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,-40
              1222,283
              1920,136 
            
            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 973,260
              1722,-53
              1920,120 
            
            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,283
              822,-40
              1920,116 
            
            V 359 
            H 0 
            V 67 
            Z
            ">
              </animate>
            </path>
          </svg>
        </div>
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses, more coming</h2>
      <div className="cardGroup">
        <Card
          title="Design System"
          text="10 section"
          image={require("../images/course-wallpaper-1.jpg").default}
        />
        <Card
          title="React for Designers"
          text="12 section"
          image={require("../images/course-wallpaper-2.jpg").default}
        />
        <Card
          title="Sound Design"
          text="5 section"
          image={require("../images/course-wallpaper-3.jpg").default}
        />
        <Card
          title="ARKit 2"
          text="10 section"
          image={require("../images/course-wallpaper-4.jpg").default}
        />
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
