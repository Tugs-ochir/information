import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Resume from './pages/Resume'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import './App.css'

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <Router>
      <div className="flex min-h-screen bg-[#05021b] text-white">
        {/* Sidebar */}
        <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

        {/* Main Content */}
        <main className="flex-1 min-h-screen overflow-y-auto lg:ml-80 hero-space relative">
          <div className="relative z-10 p-4 sm:p-8 lg:p-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </div>
          <div className="space-glow" />
        </main>
      </div>
    </Router>
  )
}

export default App
