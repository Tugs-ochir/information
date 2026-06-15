import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Resume from './pages/Resume'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import './App.css'

// Scroll the main content back to the top whenever the route changes.
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen bg-[#05021b] text-ink">
        <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

        {/* Main Content */}
        <main className="hero-space relative min-h-screen flex-1 lg:ml-80">
          <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 sm:px-8 lg:px-16">
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
