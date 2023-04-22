import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components';
import Roteamento from './Routes'

import './Global/Normalize.styles.css'
import './Global/Global.styles.css'

// Components
import Header from './application/components/header/header'

const defaultTheme = {
  tabletSize: '1024px',
  mobileSize: '768px',
  padding: '40px',
  primary: '0, 80, 191', 
}

const lightTheme = {
  name: 'Light',
  background: '255, 255, 255',
  contrast: '24, 24, 24',
  default: defaultTheme
};

const darkTheme = {
  name: 'Dark',
  background: '24, 24, 24',
  contrast: '255, 255, 255',
  default: defaultTheme
};

// Create Global Style

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: rgba(${(props: any) => props.theme.background});
    color: rgba(${(props: any) => props.theme.contrast});
  }

  /* *{
    transition: 0.2s;
    transition-property: background;
  } */
`

// Application

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
      <GlobalStyle/>
      <Header toggleTheme={toggleTheme} />
      <Roteamento/>
    </ThemeProvider>
  )
}

export default App
