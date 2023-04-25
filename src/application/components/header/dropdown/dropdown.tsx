import { useEffect, useState } from "react";
import styled from "styled-components";

const DropdownContainer = styled.div`
  @media screen and (min-width: ${props =>  props.theme.default.tabletSize}) {
    position: absolute;
    top: 16px;
    width: 170px;
    margin-top: 17px;
    overflow: hidden;

    visibility: hidden;
    opacity: 0;
    transform: translateY(10px);

    transition-property: visibility, opacity, transform;
    transition-duration: 0.3s;
    padding-top: 8px;
  }

  @media screen and (max-width: ${props =>  props.theme.default.tabletSize}) {
    position: relative;
    top: 0px;
    width: 100%;
    margin-top: 40px;
  }
`

const DropdownContent = styled.ul`
  @media screen and (min-width: ${props =>  props.theme.default.tabletSize}) {
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid rgba(${props => props.theme.contrast}, 0.2);
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.2);
    background-color: rgba(${props => props.theme.background});
  }
`

const Item = styled.li`
  @media screen and (min-width: ${props =>  props.theme.default.tabletSize}) {
    padding: 22px;
    box-sizing: border-box;
    background-color: rgba(${props => props.theme.background});
    width: 100%;
    position: relative;
    cursor: pointer;
    text-align: center;
    color: rgba(${props => props.theme.contrast}, 1);

    :hover{
      background-color: rgba(${props => props.theme.contrast}, 0.1);
    }

    ::after{
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 1px;
      left: 0px;
      bottom: 0px;
      background-color: rgba(${props => props.theme.contrast}, 0.2);
    }
  }

  @media screen and (max-width: ${props =>  props.theme.default.tabletSize}) {
    background: rgba(${props => props.theme.contrast}, 1);
    color: rgba(${props => props.theme.background}, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 40px;
    visibility: hidden;
  }
`

const Component = (props: any) => {
  const dropdownItems = props.items

  return(
    <DropdownContainer className="dropdownContainer">
      <DropdownContent>
          {
            dropdownItems.map((el: any, i: number) =>
              <a key={i} href={el.path}>
                <Item>
                  {el.title}
                </Item>
              </a>
            )
          }
      </DropdownContent>
    </DropdownContainer>
  )
}

export default Component