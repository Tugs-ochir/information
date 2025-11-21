import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const skillset = ['React', 'Next.js', 'Express.js', 'TypeScript', 'Django', 'Flutter']

const staggerParent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <motion.div
        variants={staggerParent}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full text-center text-white"
      >
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm uppercase tracking-[0.4em] text-cyan-200"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for Projects
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-8 text-4xl sm:text-5xl lg:text-7xl font-semibold leading-tight"
        >
          Tugs-Ochir <span className="text-transparent bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text">Byambasuren</span>
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-6 text-2xl text-slate-200">
          Full Stack Developer
        </motion.p>
  
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap gap-3 justify-center mt-10"
        >
          {skillset.map((skill) => (
            <span
              key={skill}
              className="px-5 py-2 rounded-full border border-white/15 bg-white/5 text-sm tracking-wide text-slate-200"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <motion.a
            href="/resume"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-lg font-semibold shadow-lg shadow-cyan-500/30"
          >
            View My Resume
            <FaArrowRight />
          </motion.a>
          <motion.a
            href="/blog"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-white/20 text-lg font-semibold text-white/90 hover:border-cyan-400"
          >
            Read Blog
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="floating-shape floating-shape--one"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      />
      <motion.div
        className="floating-shape floating-shape--two"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
      />
    </section>
  )
}

export default Home
