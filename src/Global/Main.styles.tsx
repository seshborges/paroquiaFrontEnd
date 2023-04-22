import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(${props => props.theme.background});
  width: 100%;
`

export const Content = styled.div`
  box-sizing: border-box;
  margin-top: 40px;
  margin-left: 80px;
  margin-right: 80px;

  @media screen and (max-width: 1200px){
    margin-left: 0px;
    margin-right: 0px;
  }
`