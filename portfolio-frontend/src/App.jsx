import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Blog from './components/blog'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
