import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Header from "../components/Header"
import Hero from "../components/Hero"
import Container from "../components/Container"

const IndexPage = () => (
  <Layout>
    <Header />

    <Container>
      <Hero />
    </Container>
  </Layout>
)

export default IndexPage
