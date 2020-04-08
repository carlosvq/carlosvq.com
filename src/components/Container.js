import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 960px;

  @media (max-width: 1280px) {
    width: calc(100% - 160px);
  }

  @media (max-width: 768px) {
    width: calc(100% - 40px);
  }
`

export default Container
