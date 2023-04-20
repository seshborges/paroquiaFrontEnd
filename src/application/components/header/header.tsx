

import { useContext, useState } from "react"
import styled, { ThemeContext } from "styled-components"

// 

import Dropdown from './dropdown/dropdown'

import * as MenuList from '../../../Global/Menu'
const MenuListL = MenuList.Menu

const HeaderContainer = styled.div`
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  background: rgba(${props =>  props.theme.background}, 1);
  color: rgba(${props =>  props.theme.contrast});

  .displayFlex{
    display: flex;
    align-items: center;
  }

  z-index: 999;

  @media screen and (max-width: 1070px) {
    .pcElement{
      display: none;
    }
  }

  .mobileElement{
    display: none;
    span{
      color: rgba(${props =>  props.theme.contrast});
      font-size: 32px;
    }

    .material-symbols-outlined {
      font-variation-settings:
      'FILL' 1,
      'wght' 800,
      'GRAD' 200,
      'opsz' 48
    }

  }

  @media screen and (max-width: 1070px){
    .mobileElement{
      display: block;
    }
  }

`

const HeaderContent = styled.div`
  width: 100%;
  max-width: ${props =>  props.theme.maxWidth};
  padding: 0px ${props => props.theme.padding};
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1070px) {
    padding: 0px 8px !important;
  }

`

const HeaderLeft = styled.div`
  flex: 1;
`

const HeaderCenter = styled.div`
  justify-content: center;
  flex: 1;

  .headerLogo{
    width: 64px;
    display: none;
    filter: ${props =>  props.theme.name == 'Light' ? 'invert()' : 'none'};
  }
  
  .logo{
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: 0.3s;
    transition-property: opacity;

    :hover{
      opacity: 0.7;
    }
  }

  .betaALERT{
    opacity: 0.5;
    position: relative;
    transform: rotateZ(-90deg);
    font-size: 10px;
    background: none;
    border: 1px solid rgba(${props => props.theme.contrast});
    padding: 4px 3px;
    margin-left: -10px;
    border-radius: 4px;
    font-weight: 800;
    white-space: nowrap;
  }
`

const HeaderRight = styled.div`
  justify-content: right;
  flex: 1;
  // @media screen and (max-width: 1300px){
  //   gap: 0px;
  // }
  flex: 1;
  justify-content: right;
`

const HeaderMenu = styled.ul`
  height: 100%;
  font-size: 14px;
  font-weight: 600;
  gap: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  ::before{
    content: '';
    display: none;
    height: 20%;
    position: relative;
    top: 0px;
    left: 0px;
    opacity: 1;
    width: 1px;
    background: rgba(${props =>  props.theme.contrast}, 0.3);

    margin-left: 32px;
  }
  @media screen and (max-width: 1070px) {
    position: fixed;
    right: 0px;
    top: 0px;
    flex-direction: column;
    gap: 0px;
    background: rgba(${props => props.theme.background});
    width: 100vw;
    z-index: 1;
    display: none;
  }

  .open .dropdown{
    visibility: visible;
  }
`

const Menu = styled.li`
  box-sizing: border-box;
  height: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .menu .material-symbols-outlined{
    position: absolute;
    right: -18px;
    font-size: 16px;
  }

  opacity: 1;
  transition-property: opacity;
  transition-duration: 0.2s;

  position: relative;

  ::after{
    position: absolute;
    content: '';
    height: 1px;
    bottom: 0px;
    width: 0%;
    background: rgba(${props =>  props.theme.contrast}, 0.3);
    transition: 0.5s;
    transition-property: width;
  }

  :hover{
    ::after{
      width: 100%;
    }

    opacity: 1;
    /* color: rgba(${props => props.theme.main}); */
    .dropdownContainer{
      visibility: visible;
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @media screen and (max-width: 1070px) {
    height: fit-content;
    padding-top: 40px;
    padding-bottom: 40px;
    width: 100%;
    gap: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 0px;

    .menu .material-symbols-outlined{
      position: relative;
      right: -4px;
      font-size: 16px;
    }

    ::after{
      display: block;
      content: '';
      opacity: 1;
      width: 100%;
      position: absolute;
    }
  }
`

const HeaderSearch = styled.form`
  position: relative;
  height: fit-content;
  justify-content: right;
  width: 100%;
  input{
    height: 35px;
    width: 100%;
    max-width: 300px;
    padding-left: 16px;
    padding-right: 16px;
    outline: none;
    background-color: rgba(${props => props.theme.contrast}, 0.05);
    border: 1px solid rgba(${props => props.theme.contrast}, 0.2);
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    color: rgb(${props => props.theme.contrast});
    :hover{
      border: 1px solid rgba(${props => props.theme.contrast}, 0.3);
    }
    :focus{
      border: 1px solid rgba(${props => props.theme.contrast}, 0.3);
    }
  }
  button{
    height: 100%;
    background: none;
    position: absolute;
    right: 0px;
    border: none;
    outline: none;
    cursor: pointer;
    span{
      position: relative;
      margin-top: 2px;
      color: rgb(${props => props.theme.contrast});
    }
  }
  @media screen and (max-width: 1070px){
    display: none;
  }
`

const HeaderOptions = styled.div`
  span{
    font-size: 30px;
    margin-right: -8px;
    margin-left: 14px;
    color: rgb(${props => props.theme.contrast});
  }
`

// 

const Component = (props: any) => {
  const logoParoquial = 'https://cdn.discordapp.com/attachments/1004462680582668341/1014967755092537444/logo.png'
  const logoHeader = 'https://cdn.discordapp.com/attachments/1004462680582668341/1068658864171516007/logosite.png'
  const toggleTheme = () => {
    props.toggleTheme()
  }
  const [menuHeader, setMenuHeader] = useState(false)
  const toggleMenu = () => {
    setMenuHeader(!menuHeader)
  }
  const themeContext = useContext(ThemeContext)
  return(
    <>
      <HeaderContainer>
        <HeaderContent>

          <HeaderLeft className="displayFlex">
            <button className="mobileElement"><span className="material-symbols-outlined"> search </span></button>
            <HeaderMenu className={menuHeader ? "displayFlex" : ""}>
              {
                MenuListL.map((el: any, i: number) => 
                  <Menu className="displayFlex menuItems open" key={i}>
                    <div className="displayFlex menu">
                      {el.title}
                      {el.dropdown && <span className="material-symbols-outlined"> expand_more </span>}
                    </div>
                    {el.dropdown &&
                      <Dropdown className="dropdown" items={el.dropdown}/>
                    }
                  </Menu>
                )
              }
              {/* <Menu className="displayFlex">
                Início
              </Menu> */}
            </HeaderMenu>
          </HeaderLeft>

          <HeaderCenter className="displayFlex">
            <a>
              <div title="Paróquia do Divino Pai Eterno" className="logo">
                <img className="headerLogo" src={logoParoquial} alt="logo paroquial"/>
                <span className="betaALERT">V 2</span>
              </div>
            </a>
          </HeaderCenter>

          <HeaderRight className="displayFlex">

            <button onClick={toggleMenu} className="mobileElement"><span className="material-symbols-outlined"> menu </span></button>

            <HeaderSearch className="displayFlex pcElement"> 
              <input type="text" placeholder="Pesquisar" />
              <button><span className="material-symbols-outlined"> search </span></button>
            </HeaderSearch>

            <HeaderOptions className="displayFlex pcElement">
              <button title="Mudar o tema do site" onClick={toggleTheme} className="themeMode"><span className="material-symbols-outlined">{themeContext.name == 'Light' ? 'dark_mode' : 'light_mode'}</span></button>
            </HeaderOptions>

          </HeaderRight>

        </HeaderContent>
      </HeaderContainer>
    </>
  )
}

export default Component