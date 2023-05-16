import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(${props => props.theme.background});
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  margin-left: 0px;
  margin-right: 0px;
  box-sizing: border-box;
  margin-top: calc(8*8px);
  width: 1200px;
  max-width: 100%;
  @media screen and (max-width: 768px) {
    margin-top: calc(8*4px);
  }
`

export const MarginElem = styled.div`
  min-height: 100vh;
  width: 100%;
`