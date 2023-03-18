import React from 'react'
import { Routes, Route } from "react-router-dom"

import About from './pages/About'
import MainPage from './pages/MainPage'
import NotFound from './pages/NotFound'

import './App.css'
import HomePage from 'pages/MainPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="about" element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
