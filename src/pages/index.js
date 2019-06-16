import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Header from "../components/Header"
import Hero from "../components/Hero"
import Container from "../components/Container"

import OpenSource from "../components/OpenSource"

const IndexPage = () => (
  <Layout>
    <SEO title="CarlosVQ - Carlos E. Valdez Quintín" />
    <Header />

    <Container>
      <Hero />
    </Container>

    <Container>
      <OpenSource />
    </Container>
  </Layout>
)

export default IndexPage
