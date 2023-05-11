import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import Testemunhos from './application/pages/testemunho/testemunhos'
import Home from './application/pages/home/home'
import Videos from './application/pages/videos/videos';
import Pesquisa from './application/pages/pesquisa/pesquisa'
import Auth from './application/pages/auth/login'

import styled from 'styled-components';

const FooterMargin = styled.div`
  min-height: 100vh;
`

const Rotas = () => {
  return(
    <FooterMargin>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/testemunhos" element={<Testemunhos/>} />
        <Route path="/videos" element={<Videos/>}/>
        <Route path="/pesquisa" element={<Pesquisa/>}/>
        {/* <Route path="/login" element={<Auth/>}/> */}
      </Routes>
    </FooterMargin>
  )
}

export default Rotas