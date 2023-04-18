import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(${props => props.theme.background});
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  /* justify-content: center; */
  width: 100%;
  // background: red;
`

export const Content = styled.div`
  box-sizing: border-box;
  // width: 1200px;
  margin-top: 40px;
  margin-left: 80px;
  margin-right: 80px;
  // background: red;

  @media screen and (max-width: 1200px){
    margin-left: 0px;
    margin-right: 0px;
  }
`