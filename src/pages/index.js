import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Header from "../components/Header"
import Hero from "../components/Hero"
import Container from "../components/Container"

import Projects from "../components/Projects"

const IndexPage = () => (
  <Layout>
    <Header />

    <Container>
      <Hero />
    </Container>

    <Container>
      <Projects />
    </Container>
  </Layout>
)

export default IndexPage
