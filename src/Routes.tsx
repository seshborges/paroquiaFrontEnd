import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import Testemunhos from './application/pages/testemunhos'
import Home from './application/pages/home'

const Rotas = () => {
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/testemunhos" element={<Testemunhos/>} />
    </Routes>
  )
}

export default Rotas