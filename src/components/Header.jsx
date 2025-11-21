import React from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = ({ setMobileOpen }) => {
  const location = useLocation()

  const getPageTitle = () => {
    const titles = {
      '/': 'Home',
      '/resume': 'Resume',
      '/about': 'About Me',
      '/contact': 'Contact',
    }
    return titles[location.pathname] || 'Portfolio'
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="hidden lg:block bg-white border-b border-gray-200 px-8 py-4 shadow-sm"
    >
      <h2 className="text-2xl font-bold text-gray-800">{getPageTitle()}</h2>
    </motion.header>
  )
}

export default Header
