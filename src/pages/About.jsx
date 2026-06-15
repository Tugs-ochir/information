import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaLightbulb, FaRocket, FaPuzzlePiece } from 'react-icons/fa'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const features = [
  {
    icon: FaCode,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code that follows best practices and proven design patterns.',
  },
  {
    icon: FaLightbulb,
    title: 'Curiosity',
    description: 'Always exploring new technologies and finding creative solutions to tricky problems.',
  },
  {
    icon: FaPuzzlePiece,
    title: 'End-to-End',
    description: 'Comfortable across the stack — from database and API to polished, accessible interfaces.',
  },
  {
    icon: FaRocket,
    title: 'Ship & Iterate',
    description: 'Focused on shipping real products, then improving them with feedback and data.',
  },
]

const stack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Django', 'PostgreSQL', 'Flutter', 'Docker']

const About = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-5xl space-y-16 py-8 text-white"
    >
      {/* Hero */}
      <motion.section variants={itemVariants} className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow mb-4">About Me</p>
          <h1 className="font-display text-4xl font-bold leading-tight lg:text-5xl">
          </h1>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-300">
            <p>
              I'm B.Tugs-Ochir, a full-stack developer based in Ulaanbaatar, Mongolia. My journey
              into tech started with simple curiosity about how things work — and turned into a
              genuine passion for building software that people enjoy using.
            </p>
            <p>
              I work across the stack with React, Next.js, Node.js and Django, and I'm especially
              drawn to the spot where clean engineering meets thoughtful design.
            </p>
            <p>
              When I'm not coding, you'll usually find me playing volleyball, tennis, or competing
              in e-sports.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[36px] bg-brand-gradient opacity-30 blur-2xl" />
          <div className="relative rounded-[32px] border border-white/10 bg-brand-gradient p-[3px] shadow-card">
            <img
              src="/img/profile.png"
              alt="B.Tugs-Ochir"
              className="h-full w-full rounded-[29px] object-cover"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* What I Do */}
      <motion.section variants={itemVariants} className="space-y-8">
        <h2 className="text-center font-display text-3xl font-semibold lg:text-4xl">What I Do</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                whileHover={{ y: -8 }}
                className="glass glass-hover rounded-3xl p-8"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-white/10 p-3">
                  <Icon className="text-2xl text-cyan-300" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="mt-2 text-slate-300">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.section>

      {/* Tech stack */}
      <motion.section variants={itemVariants} className="space-y-6">
        <h2 className="font-display text-3xl font-semibold">Tech I Use</h2>
        <div className="flex flex-wrap gap-3">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.section>
    </motion.div>
  )
}

export default About
