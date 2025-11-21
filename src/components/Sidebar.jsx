import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaHome,
  FaFileAlt,
  FaBlog,
} from 'react-icons/fa'
import { motion } from 'framer-motion'

const Sidebar = ({ mobileOpen, setMobileOpen }) => {
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/', icon: FaHome },
    { name: 'Resume', path: '/resume', icon: FaFileAlt },

  ]

  const isActive = (path) => location.pathname === path

  const sidebarVariants = {
    hidden: { x: -300 },
    visible: { x: 0 },
  }

  return (
    <>
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-lg"
      >
        {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <motion.aside
        initial="hidden"
        animate="visible"
        variants={sidebarVariants}
        className={`fixed left-0 top-0 h-screen w-80 bg-gradient-to-b from-[#060b25] via-[#090d2f] to-[#120729] text-white p-8 shadow-2xl z-40 transform transition-transform duration-300 ${
          !mobileOpen ? '-translate-x-full lg:translate-x-0' : 'translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="absolute inset-0 blur-2xl bg-cyan-500/40 animate-pulse rounded-full" />
              <div className="relative w-full h-full rounded-[26px] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-1 shadow-2xl">
                <img
                  src="/img/profile.jpg"
                  alt="Tugs-Ochir Byambasuren"
                  className="w-full h-full rounded-[22px] object-cover"
                />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2 tracking-wide">Tugs-ochir Bymbasuren</h1>
            <p className="text-cyan-300 text-lg font-semibold">Full Stack Developer</p>
        

            <div className="flex justify-center gap-3 mt-6">
              {[
                { Icon: FaTwitter, href: 'https://x.com/tugs_0505?s=21' },
                { Icon: FaInstagram, href: 'https://www.instagram.com/ricosgut/' },
                { Icon: FaGithub, href: 'https://github.com/Tugs-ochir' },
                { Icon: FaEnvelope, href: 'mailto:b.tugsochir1@gmail.com' },
              ].map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-white/10 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <nav className="flex-1 mb-8">
            <h3 className="text-gray-500 text-xs font-bold uppercase mb-4 tracking-[0.4em]">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center px-4 py-3 rounded-2xl transition-all duration-300 border ${
                      isActive(link.path)
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-transparent shadow-lg shadow-cyan-500/30'
                        : 'text-gray-300 border-white/10 hover:border-cyan-400/60 hover:bg-white/5'
                    }`}
                  >
                    <span
                      className={`mr-3 flex h-9 w-9 items-center justify-center rounded-xl ${
                        isActive(link.path) ? 'bg-white/20' : 'bg-white/5'
                      }`}
                    >
                      <link.icon size={16} />
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-6"
          >
            <h3 className="text-gray-500 text-xs font-bold uppercase mb-4 tracking-[0.4em]">Quick Actions</h3>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/CV-Бямбасүрэн-Төгс-Очир.pdf"
              className="w-full inline-flex items-center justify-between bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white py-3 px-5 rounded-2xl font-semibold text-center shadow-lg shadow-cyan-500/30 transition-all duration-300"
            >
              Download CV
              <span className="text-lg">↗</span>
            </motion.a>
          </motion.div>

          <p className="text-xs text-slate-500 text-center mt-6">© 2025 Tugs-Ochir Byambasuren</p>
        </div>
      </motion.aside>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
    </>
  )
}

export default Sidebar
