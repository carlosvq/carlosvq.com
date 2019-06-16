import React from "react"
import styled from "styled-components"

import NODEJS from "../images/nodejs.png"
import WEBPACK from "../images/webpack.png"

const Wrapper = styled.div`
  display: grid;
  align-items: flex-start;
  margin: 80px 0;
  grid-gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: auto;
    margin: 32px 0;
  }
`

const Title = styled.h1`
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.unit.getRem(36)};
  font-weight: 400;
  margin: 0;
  padding: 0;

  span {
    display: block;
  }

  @media (max-width: 768px) {
    font-size: ${props => props.theme.unit.getRem(24)};

    span {
      font-weight: 400;
    }
  }
`

const ProjectsContainer = styled.div`
  display: grid;
  grid-gap: 56px 40px;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fit, minmax(auto, 454px));
`

const Project = styled.div`
  display: grid;
  grid-template-areas: "title title" "image description";

  .title {
    grid-area: title;
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    h3 {
      font-weight: 500;
      margin: 0;
      padding: 0;
    }

    a {
      color: ${props => props.theme.colors.primary};
      text-decoration: none;
    }
  }

  .featured-image {
    border-radius: 8px;
    grid-area: image;
    max-width: 144px;
  }

  .description {
    color: ${props => props.theme.colors.darkGray};
    line-height: 1.5;
    grid-area: description;
    max-width: 280px;
    margin-left: 8px;
  }
`

const OpenSource = () => {
  return (
    <Wrapper>
      <Title>Open Source</Title>

      <ProjectsContainer>
        <Project>
          <div className="title">
            <h3>Node</h3>
            <span style={{ margin: "0 8px" }}>•</span>
            <span>
              <a href="https://github.com/nodejs">github.com/nodejs</a>
            </span>
          </div>

          <img src={NODEJS} alt="nodejs" className="featured-image" />

          <div className="description">
            Node.js is a JavaScript runtime built on Chrome's V8 JavaScript
            engine.
          </div>
        </Project>

        <Project>
          <div className="title">
            <h3>Webpack</h3>
            <span style={{ margin: "0 8px" }}>•</span>
            <span>
              <a href="https://github.com/webpack">github.com/webpack</a>
            </span>
          </div>

          <img src={WEBPACK} alt="webpack" className="featured-image" />

          <div className="description">
            At its core, webpack is a static module bundler for modern
            JavaScript applications.
          </div>
        </Project>
      </ProjectsContainer>
    </Wrapper>
  )
}

export default OpenSource
