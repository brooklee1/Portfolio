import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import AboutSection from "../components/AboutSection";

const IndexPage = () => (
  <Layout>
  <SEO title="Brooklee Wilson Watters developer" />
    <Hero />
    <AboutSection />
  </Layout>
)

export default IndexPage
