import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { css } from '@emotion/css'
import styled from 'styled-components'

import './Global/Normalize.styles.css'
import './Global/Global.styles.css'

// Components
import Header from './application/components/header/header'
import Banner from './application/components/banner/banner'
import Card from './application/card/card'
import Alert from './application/components/alert/alert'


const lightTheme = {
  name: 'Light',
  background: '255, 255, 255',
  contrast: '24, 24, 24',
  main: '0, 80, 191',
  maxWidth: '1750px',
  padding: '40px', 
};

const darkTheme = {
  name: 'Dark',
  background: '24, 24, 24',
  contrast: '255, 255, 255',
  main: '0, 80, 191',
  maxWidth: '1750px',
  padding: '40px', 
};

const Main = styled.main`
  height: 5000px;
  width: 100%;
  background-color: rgba(${props => props.theme.background});
  color: rgba(${props => props.theme.contrast});
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  .MainContent{
    width: 1200px;
    background: red;
  }
`

const Title01 = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: 800;
  width: fit-content;
  position: relative;
`

const Cards = [
  {
    title: "Ave Maria",
    desc: "Rogai Por Nós",
    tipo: "Áudio",
    tamanho: "10 Min",
    background: "https://cdn.discordapp.com/attachments/1004462680582668341/1090750352976007330/image.png",
  }
]

function App() {
  const [isDarkTheme, setDarkTheme] = useState(false)

  const setThemeLight = () => {
    setDarkTheme(false)
    localStorage.setItem('Theme', 'Light');
  }

  const setThemeDark = () => {
    setDarkTheme(true)
    localStorage.setItem('Theme', 'Dark');
  }

  const toggleTheme = () => {
    if (isDarkTheme) {
      setThemeLight()
    }else{
      setThemeDark()
    }
  }

  useEffect(()=>{
    if(!localStorage.getItem('Theme')){
      setThemeLight()
      return
    }

    if(localStorage.getItem('Theme') == 'Light'){
      setThemeLight()
    }else{
      setThemeDark()
    }
  }, [])

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Header toggleTheme={toggleTheme} />
      <Banner/>
      <Main>
        <div className="MainContent">
          {/* <Title01>Reze Conosco</Title01> */}
          <div className={css`
            width: 100%;
          `} >
            <Card sendTo={Cards}/>
          </div>
        </div>
      </Main>
    </ThemeProvider>
  )
}

export default App
