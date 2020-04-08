import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Container from "./Container"

import HEADER_BACKGROUND from "../images/header_background.svg"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 32px auto;
  max-width: 100%;

  ul {
    display: flex;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style-type: none;

    li {
      font-size: ${(props) => props.theme.unit.getRem(16)};
      font-weight: 400;

      a {
        text-decoration: none;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    ul {
      margin: 16px 0;
    }
  }
`

const Title = styled.h1`
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.unit.getRem(30)};
  font-weight: 600;
`

const LeftMenu = styled.ul`
  flex: 1;
  margin-left: 48px;

  li {
    margin-left: 16px;

    :first-child {
      margin-left: 0;
    }

    a {
      color: ${(props) => props.theme.colors.black};
    }
  }
`

const RightMenu = styled.ul`
  li {
    a {
      color: ${(props) => props.theme.colors.white};
    }
  }

  @media (max-width: 768px) {
    li {
      padding: 8px 32px;
      border-radius: 24px;
      background: #8e2de2;
      background: linear-gradient(
        to right,
        ${(props) => props.theme.colors.primary},
        ${(props) => props.theme.colors.secondary}
      );
    }
  }
`

const Shape = styled.img`
  position: absolute;
  right: 0;
  z-index: -1;

  @media (max-width: 1440px) {
    max-width: 55%;
  }

  @media (max-width: 1024px) {
    max-width: 50%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const Header = () => {
  return (
    <React.Fragment>
      <Shape src={HEADER_BACKGROUND} />
      <Container>
        <Wrapper>
          <Title>CarlosVQ</Title>

          <LeftMenu>
            <li>
              <Link to="/about-me">about me</Link>
            </li>
            <li>
              <Link to="/blog">blog</Link>
            </li>
          </LeftMenu>

          <RightMenu>
            <li>
              <a href="mailto:carlos@carlosvq.com">contact</a>
            </li>
          </RightMenu>
        </Wrapper>
      </Container>
    </React.Fragment>
  )
}

export default Header
