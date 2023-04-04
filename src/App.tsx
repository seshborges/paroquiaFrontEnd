import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components';
import Roteamento from './Global/Routes'
import styled from 'styled-components'

import { BrowserRouter, MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import Testemunhos from './application/pages/testemunhos'

import './Global/Normalize.styles.css'
import './Global/Global.styles.css'

// Components
import Header from './application/components/header/header'

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<p>home</p>} />
          <Route path="/forteste" element={<p>teste</p>} />
          <Route path="/testemunhos" element={<p>testemunhos</p>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
