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
  max-width: 820px;
  margin-top: 96px;
  grid-gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: auto;
    margin-top: 0;
  }
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.unit.getRem(36)};
  font-weight: 600;
  margin: 32px 0 0 0;
  padding: 0;
  max-width: 520px;

  span {
    display: block;
    font-size: ${props => props.theme.unit.getRem(32)};
  }

  @media (max-width: 768px) {
    font-size: ${props => props.theme.unit.getRem(24)};

    span {
      font-weight: 400;
    }
  }
`

const Content = styled.div`
  font-size: ${props => props.theme.unit.getRem(16)};
  line-height: 1.5;
  margin: 16px 0 0 0;
  max-width: 520px;
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

const Skills = styled.div`
  .tags {
  }
`

const Tag = styled.div`
  background-color: #6f4a9e20;
  border-radius: 8px;
  color: ${props => props.theme.colors.primary};
  display: inline-flex;
  font-size: ${props => props.theme.unit.getRem(16)};
  font-weight: 400;
  margin: 0 16px 16px 0;
  padding: 8px;
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
          Hi! I'm Carlos.{" "}
          <span>Python and Javascript full-stack software engineer.</span>
        </Title>

        <Content>
          Passionate about Technology, Design and Sports. I'm also active in the
          open source community.
        </Content>

        <Skills>
          <h3 style={{ fontSize: "24px", fontWeight: 400 }}>Skills</h3>

          <div className="tags">
            {skills.map((skill, index) => (
              <Tag key={index}>{skill}</Tag>
            ))}
          </div>
        </Skills>
      </div>

      <Profile src={PROFILE} />
    </Wrapper>
  )
}

export default Hero
