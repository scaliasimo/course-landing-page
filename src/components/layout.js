/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./Footer/Footer"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      allContentfulLink(sort: {fields: [createdAt], order: ASC}) {
        edges {
          node {
            title
            url
            createdAt
          }
        }
      }
    }
  `)

  return (
    <>
      <div>
        <main>
          {children}
          <Footer data={data}>
            Backgrounds made in Cinema 4D, iOS app in Swift, site in React.<br /><br />© 2018
          </Footer>
        </main>
      </div>
    </>
  )
}

export default Layout
