import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Edu from "../components/education"

const IndexPage = () => (
  <Layout>
    <nav>
      <Link to="/about">About</Link>
    </nav>
    <Seo title="TechTalk" />
    <h1>Welcome</h1>
    <p>Welcome! My name is Emma Blackwell and I am an interdisciplinary individual who loves to fuse my interests in design, writing, and tech all into one.</p>
    <h2>Education</h2>
    <hr/>
    <Edu major="Computer Science B.A." univ="Southern Illinois University, Carbondale" year="expected by May 2022"></Edu>
    <hr/>

  </Layout>
)

export default IndexPage
