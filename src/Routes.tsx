import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import Testemunhos from './application/pages/testemunho/testemunhos'
import Home from './application/pages/home/home'
import Videos from './application/pages/videos/videos';

const Rotas = () => {
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/testemunhos" element={<Testemunhos/>} />
      <Route path="/videos" element={<Videos/>}/>
    </Routes>
  )
}

export default Rotas