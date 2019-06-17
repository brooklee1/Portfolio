import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Hero = styled.div`
  margin: 0 auto;
  padding: 150px 50px;
  text-align: center;
`

const SecondPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Hero>
      <h2>Project page coming soon</h2>
      <h2>See a prototype of this page 
        <a href= "https://brooklee1.github.io/latest-posts-portfolio/" target="_blank"> here</a></h2>
      <p>
        <a href= "https://github.com/brooklee1" target="_blank">github</a>
        <a href="https://www.linkedin.com/in/brooklee-wilson/" target="_blank"> codepen</a>
        <a href="https://dribbble.com/brooklee" target="_blank"> dribbble</a>
        <a href="https://www.behance.net/brookleewilson" target="_blank"> behance</a>
        <a href="https://www.linkedin.com/in/brooklee-wilson/" target="_blank"> linkedin</a>
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Hero>
    
  </Layout>
)

export default SecondPage