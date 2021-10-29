import React from "react"
import styled from "styled-components"

import Linkedin from "../images/icons/linkedin.inline.svg"
import Github from "../images/icons/github.inline.svg"
import Dribbble from "../images/icons/dribbble.inline.svg"
import Twitter from "../images/icons/twitter.inline.svg"

import PROFILE from "../images/profile.jpg"

const skills = [
  "CSS",
  "BEM",
  "SASS",
  "Javascript",
  "Node",
  "React",
  "Jest",
  "Cypress",
  "GraphQL",
  "Webpack",
  "D3.js",
  "Webpack",
  "GSAP",
  "MongoDB",
  "SQL",
  "Prisma",
  "Amazon Web Services",
  "Digital Ocean",
  "Firebase",
  "Docker",
]

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: flex-start;
  grid-gap: 32px;
  margin-top: 96px;
  max-width: 820px;

  @media (max-width: 768px) {
    margin-top: 0;
    grid-template-columns: auto;
  }
`

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;

  a {
    text-decoration: none;

    svg {
      max-width: 20px;
      max-height: 20px;
      cursor: pointer;
    }
  }
`

const Title = styled.h1`
  margin: 32px 0 0 0;
  padding: 0;
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.unit.getRem(36)};
  font-weight: 600;
  max-width: 520px;

  span {
    display: block;
    font-size: ${(props) => props.theme.unit.getRem(32)};
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.unit.getRem(24)};

    span {
      font-weight: 400;
    }
  }
`

const Content = styled.div`
  margin: 16px 0 0 0;
  max-width: 520px;
  font-size: ${(props) => props.theme.unit.getRem(16)};
  line-height: 1.5;
`

const Profile = styled.img`
  border: 5px solid rgba(198, 198, 198, 0.3);
  border-radius: 50%;
  height: 250px;
  width: 250px;

  @media (max-width: 768px) {
    display: none;
  }
`

const Tag = styled.div`
  display: inline-flex;
  margin: 0 16px 16px 0;
  padding: 8px;
  border-radius: 8px;
  background-color: #6f4a9e20;
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.unit.getRem(16)};
  font-weight: 400;
`

const Hero = () => {
  return (
    <Wrapper>
      <div className="content">
        <IconContainer>
          <a href="https://linkedin.com/in/carlosvq">
            <Linkedin />
          </a>

          <a href="https://github.com/carlosvq">
            <Github />
          </a>

          <a href="https://dribbble.com/carlosvq">
            <Dribbble />
          </a>

          <a href="https://twitter.com/carlosvq_">
            <Twitter />
          </a>
        </IconContainer>

        <Title>
          Hi! I'm Carlos. <span>Javascript full-stack software engineer.</span>
        </Title>

        <Content>Passionate about Technology, Design and Sports.</Content>

        <div>
          <h3 style={{ fontSize: "24px", fontWeight: 400 }}>Skills</h3>

          <div className="tags">
            {skills.map((skill, index) => (
              <Tag key={index}>{skill}</Tag>
            ))}
          </div>
        </div>
      </div>

      <Profile src={PROFILE} />
    </Wrapper>
  )
}

export default Hero
