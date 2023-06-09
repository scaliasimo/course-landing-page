import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Header from "../components/Header/header"
import Card from "../components/Card/Card"
import Cell from "../components/Cell/Cell"
import staticdata from "../../staticdata.json"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SectionCaption = styled.div`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
  margin-bottom: 24px;
`

const SectionCellGroup = styled.div`
  max-width: 900px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <Layout>
    <Header />
    <div className="Hero">
      <div className="HeroGroup">
        <div>
          <h1>
            Learn to code cool <br />
            <b>React</b> apps
          </h1>
          <p>
            Complete courses about the best tools and design systems. Prototype
            and build apps with React and Swift.
          </p>
          <Link to="/page-2/">Watch the video</Link>
          <div className="logos">
            <img
              src={require("../images/logo-sketch.png").default}
              alt="Sketch"
              width="50"
            />
            <img src={require("../images/logo-figma.png").default}
              alt="Figma"
              width="50" />
            <img
              src={require("../images/logo-studio.png").default}
              alt="Studio"
              width="50"
            />
            <img
              src={require("../images/logo-framer.png").default}
              alt="Framer"
              width="50"
            />
            <img src={require("../images/logo-react.png").default} alt="React" width="50" />
            <img src={require("../images/logo-swift.png").default} alt="Swift" width="50" />
          </div>
          <svg
            width="100%"
            height="200px"
            fill="none"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
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
          Z"
            >
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
            "
              ></animate>
            </path>
          </svg>
        </div>
      </div>
    </div>
    <div className="Cards">
      <h2>10 courses, more coming</h2>
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
        <Card
          title="Web3 for Creatives"
          text="6 section"
          image={require("../images/course-wallpaper-5.jpg").default}
        />
        <Card
          title="Data Visualization"
          text="15 section"
          image={require("../images/course-wallpaper-6.jpg").default}
        />
        <Card
          title="CLI for Designers"
          text="4 section"
          image={require("../images/course-wallpaper-7.jpg").default}
        />
        <Card
          title="Page Transitions"
          text="9 section"
          image={require("../images/course-wallpaper-8.jpg").default}
        />
        <Card
          title="Advanced Animations with GSAP"
          text="11 section"
          image={require("../images/course-wallpaper-9.jpg").default}
        />
        <Card
          title="Instagram Filters + Spark AR"
          text="14 section"
          image={require("../images/course-wallpaper-10.jpg").default}
        />
      </div>
    </div>
    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell key={cell.title} title={cell.title} image={cell.image} />
      ))}
    </SectionCellGroup>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
