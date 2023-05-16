import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './application/pages/home/home'
import Videos from './application/pages/videos/videos'
import Pesquisa from './application/pages/pesquisa/pesquisa'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/videos',
        element: <Videos/>
      },
      {
        path: '/pesquisa',
        element: <Pesquisa/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router}/>
)
