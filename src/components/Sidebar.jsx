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
  FaUser,
  FaPaperPlane,
  FaBlog,
} from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', path: '/', icon: FaHome },
  { name: 'Resume', path: '/resume', icon: FaFileAlt },
  { name: 'About', path: '/about', icon: FaUser },
  { name: 'Contact', path: '/contact', icon: FaPaperPlane },
  { name: 'Blog', path: '/blog', icon: FaBlog },
]

const socials = [
  { Icon: FaTwitter, href: 'https://x.com/tugs_0505?s=21', label: 'Twitter' },
  { Icon: FaInstagram, href: 'https://www.instagram.com/ricosgut/', label: 'Instagram' },
  { Icon: FaGithub, href: 'https://github.com/Tugs-ochir', label: 'GitHub' },
  { Icon: FaEnvelope, href: 'mailto:b.tugsochir1@gmail.com', label: 'Email' },
]

const Sidebar = ({ mobileOpen, setMobileOpen }) => {
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  const content = (
    <div className="flex h-full flex-col">
      {/* Profile */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="mb-8 text-center"
      >
        <div className="relative mx-auto mb-6 h-32 w-32">
          <div className="absolute inset-0 animate-pulse-slow rounded-full bg-cyan-500/40 blur-2xl" />
          <div className="relative h-full w-full rounded-[26px] bg-brand-gradient p-[3px] shadow-glow">
            <img
              src="/img/profile.png"
              alt="Tugs-Ochir Byambasuren"
              className="h-full w-full rounded-[22px] object-cover"
            />
          </div>
          <span className="absolute -bottom-1 -right-1 flex items-center gap-1 rounded-full border border-white/10 bg-[#0b0a23] px-2.5 py-1 text-[10px] font-semibold text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Open
          </span>
        </div>
        <h1 className="font-display text-2xl font-bold tracking-wide">Tugs-Ochir Byambasuren</h1>
        <p className="mt-1 font-semibold text-cyan-300">Full Stack Developer</p>

        <div className="mt-6 flex justify-center gap-3">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Navigation */}
      <nav className="flex-1">
        <h3 className="eyebrow mb-4">Navigation</h3>
        <ul className="space-y-2">
          {navLinks.map((link) => {
            const active = isActive(link.path)
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`group flex items-center rounded-2xl border px-4 py-3 transition-all duration-300 ${
                    active
                      ? 'border-transparent bg-brand-gradient text-white shadow-glow'
                      : 'border-white/10 text-slate-300 hover:border-cyan-400/50 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span
                    className={`mr-3 flex h-9 w-9 items-center justify-center rounded-xl transition-colors ${
                      active ? 'bg-white/20' : 'bg-white/5 group-hover:bg-white/10'
                    }`}
                  >
                    <link.icon size={16} />
                  </span>
                  <span className="font-medium">{link.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* CTA */}
      <div className="mt-8">
        <h3 className="eyebrow mb-4">Quick Actions</h3>
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="/CV-Бямбасүрэн-Төгс-Очир.pdf"
          download
          className="flex w-full items-center justify-between rounded-2xl bg-brand-gradient px-5 py-3 font-semibold text-white shadow-glow transition-all duration-300 hover:shadow-glow-purple"
        >
          Download CV
          <span className="text-lg">↗</span>
        </motion.a>
      </div>

      <p className="mt-6 text-center text-xs text-slate-500">© 2025 Tugs-Ochir Byambasuren</p>
    </div>
  )

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
        className="fixed left-4 top-4 z-50 rounded-xl border border-white/10 bg-brand-gradient p-2.5 text-white shadow-glow lg:hidden"
      >
        {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Desktop sidebar — always visible */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-80 border-r border-white/10 bg-gradient-to-b from-[#070b25] via-[#0a0a2a] to-[#120729] p-8 lg:block">
        {content}
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: -340 }}
              animate={{ x: 0 }}
              exit={{ x: -340 }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
              className="fixed left-0 top-0 z-40 h-screen w-80 max-w-[85vw] overflow-y-auto border-r border-white/10 bg-gradient-to-b from-[#070b25] via-[#0a0a2a] to-[#120729] p-8 pt-16 lg:hidden"
            >
              {content}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Sidebar
