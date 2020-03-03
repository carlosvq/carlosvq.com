import React from "react"
import styled from "styled-components"

import PETTED from "../images/petted.svg"
import SHUTTLEPAD from "../images/shuttlepad.svg"

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
  grid-gap: 40px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: image;
    width: 144px;
    border-radius: 8px;
  }

  .description {
    color: ${props => props.theme.colors.darkGray};
    line-height: 1.5;
    grid-area: description;
    max-width: 280px;
    margin-left: 8px;
  }
`

const Icon = styled.img`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40px;
`

const Projects = () => {
  return (
    <Wrapper>
      <Title>Projects</Title>

      <ProjectsContainer>
        <Project>
          <div className="title">
            <h3>Shuttlepad</h3>
            <span style={{ margin: "0 8px" }}>•</span>
            <span>
              <a href="https://shuttlepad.io">shuttlepad.io</a>
            </span>
          </div>

          <div className="featured-image" style={{ backgroundColor: "#000" }}>
            <Icon src={SHUTTLEPAD} />
          </div>

          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec leo
            consectetur, accumsan lorem et, dapibus lacus.
          </div>
        </Project>

        <Project>
          <div className="title">
            <h3>Petted</h3>
            <span style={{ margin: "0 8px" }}>•</span>
            <span>
              <a href="https://petted.app">petted.app</a>
            </span>
          </div>

          <div
            className="featured-image"
            style={{ backgroundColor: "#f6f6f6" }}
          >
            <Icon src={PETTED} />
          </div>

          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec leo
            consectetur, accumsan lorem et, dapibus lacus.
          </div>
        </Project>
      </ProjectsContainer>
    </Wrapper>
  )
}

export default Projects
