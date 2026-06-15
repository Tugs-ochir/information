import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaGithub } from 'react-icons/fa'

const skillset = ['React', 'Next.js', 'Express.js', 'TypeScript', 'Django', 'Flutter']

const stats = [
  { value: 'Full-Stack', label: 'Web & Mobile' },
  { value: '6+', label: 'Core Technologies' },
  { value: 'Remote', label: 'Available worldwide' },
]

const staggerParent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const Home = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-8rem)] items-center justify-center">
      <motion.div
        variants={staggerParent}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl text-center text-white"
      >
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200 backdrop-blur-md"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Available for Projects
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-8 font-display text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
        >
          B.Tugs-Ochir
          <br />
        </motion.h1>

        <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
          A Full Stack Developer crafting fast, accessible and delightful
          web &amp; mobile products from idea to deployment.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap justify-center gap-3">
          {skillset.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm tracking-wide text-slate-200 backdrop-blur-md transition-colors hover:border-cyan-400/50 hover:text-white"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <motion.a
            href="/resume"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-gradient px-9 py-4 text-lg"
          >
            View My Resume
            <FaArrowRight />
          </motion.a>
          <motion.a
            href="https://github.com/Tugs-ochir"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-ghost px-9 py-4 text-lg"
          >
            <FaGithub />
            GitHub
          </motion.a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl px-5 py-6 text-center"
            >
              <p className="font-display text-2xl font-bold text-gradient">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="floating-shape floating-shape--one"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 26, ease: 'linear' }}
      />
      <motion.div
        className="floating-shape floating-shape--two"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
      />
    </section>
  )
}

export default Home
