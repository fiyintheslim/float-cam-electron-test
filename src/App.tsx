import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import { Home } from './pages/Home/Home'
import { Pokemon } from './pages/Pokemon/Pokemon'


function App() {

  const router = createBrowserRouter([{
    path: "/",
    element: <Home />
  }, {
    path: "/:pokemon",
    element: <Pokemon />
  }])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
