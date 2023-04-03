import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components'
import { HashRouter } from "react-router-dom";

import './Global/Normalize.styles.css'
import './Global/Global.styles.css'

// Components
import Header from './application/components/header/header'
import Rotas from './Global/Routes'


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
      <HashRouter>
        <Rotas/>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
