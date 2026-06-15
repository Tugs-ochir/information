import React from 'react'
import { motion } from 'framer-motion'
import { FaPenNib, FaArrowLeft } from 'react-icons/fa'

const Blog = () => {
  return (
    <section className="flex min-h-[calc(100vh-8rem)] items-center justify-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-xl text-center"
      >
        <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center">
          <div className="absolute inset-0 animate-pulse-slow rounded-full bg-cyan-500/30 blur-2xl" />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-brand-gradient shadow-glow">
            <FaPenNib className="text-3xl text-white" />
          </div>
        </div>

        <p className="eyebrow">Blog</p>
        <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
          Coming <span className="text-gradient">very soon</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-slate-300">
          I'm putting together articles about web development, the projects I build,
          and the lessons I pick up along the way. Stay tuned!
        </p>

        <motion.a
          href="/"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="btn-ghost mt-10 px-8 py-3.5"
        >
          <FaArrowLeft />
          Back to Home
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Blog
