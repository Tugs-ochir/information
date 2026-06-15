import React from 'react'
import { motion } from 'framer-motion'
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaDownload,
  FaArrowRight,
  FaGamepad,
  FaVolleyballBall,
  FaTableTennis,
  FaGraduationCap,
} from 'react-icons/fa'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const contactItems = [
  { icon: FaEnvelope, label: 'Email', value: 'b.tugsochir1@gmail.com' },
  { icon: FaPhone, label: 'Phone', value: '+976 9521 0505' },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'Ulaanbaatar, Mongolia' },
  { icon: FaGithub, label: 'GitHub', value: 'github.com/Tugs-ochir' },
]

const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'Python', level: 'Intermediate' },
      { name: 'Dart', level: 'Intermediate' },
    ],
  },
  { category: 'Frontend', items: ['React.js', 'Next.js', 'TailwindCSS', 'HTML5/CSS3'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'Django', 'GraphQL'] },
  { category: 'Database & Tools', items: ['MongoDB', 'PostgreSQL', 'Prisma', 'Git'] },
  { category: 'DevOps & Cloud', items: ['Docker', 'AWS', 'GCP', 'CI/CD'] },
]

const education = [
  {
    school: 'University of the Humanities',
    degree: "Bachelor's Degree",
    details: 'Computer Science — Software Engineering',
  },
]

const projects = [
  {
    title: 'Web Server Registration & Monitoring System',
    stack: 'Next.js · Django · PostgreSQL · Socket.io · Docker',
    description: 'Серверүүдийн бүртгэл болон realtime хяналтын систем.',
  },
  {
    title: 'Date Invitation Generator',
    stack: 'Next.js · Django · PostgreSQL · Socket.io · Docker',
    description: 'Болзооны урилга үүсгэх систем.',
  },
]

const interests = [
  { icon: FaGamepad, title: 'E-Sport' },
  { icon: FaVolleyballBall, title: 'Volleyball' },
  { icon: FaTableTennis, title: 'Tennis' },
]

const Resume = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-5xl space-y-16 py-8 text-white"
    >
      {/* Header */}
      <motion.section variants={itemVariants} className="space-y-6 text-center">
        <p className="eyebrow">Resume</p>
        <h1 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
          Tugs-Ochir <span className="text-gradient">Byambasuren</span>
        </h1>
        <p className="text-xl text-slate-300">Full-Stack Developer</p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a href="/CV-Бямбасүрэн-Төгс-Очир.pdf" download className="btn-gradient px-8 py-4">
            Download CV
            <FaDownload />
          </a>
          <a href="#projects" className="btn-ghost px-8 py-4">
            Featured Projects
            <FaArrowRight />
          </a>
        </div>
      </motion.section>

      {/* Contact grid */}
      <motion.section variants={itemVariants}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item) => (
            <div key={item.label} className="glass glass-hover rounded-2xl p-5">
              <item.icon className="mb-3 text-2xl text-cyan-300" />
              <p className="text-xs uppercase tracking-wide text-slate-400">{item.label}</p>
              <p className="mt-1 break-words font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section variants={itemVariants} className="space-y-8">
        <h2 className="font-display text-3xl font-semibold">Skills &amp; Technologies</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.category} className="glass glass-hover rounded-3xl p-6">
              <p className="eyebrow mb-4">{skill.category}</p>
              <div className="flex flex-wrap gap-2.5">
                {skill.items.map((item) => (
                  <span
                    key={item.name || item}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm"
                  >
                    {item.name ? (
                      <>
                        {item.name}
                        <span className="ml-1.5 text-cyan-300/80">· {item.level}</span>
                      </>
                    ) : (
                      item
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Education */}
      <motion.section variants={itemVariants} className="space-y-6">
        <h2 className="font-display text-3xl font-semibold">Education</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu) => (
            <div key={edu.school} className="glass glass-hover flex gap-4 rounded-3xl p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                <FaGraduationCap className="text-xl text-cyan-300" />
              </div>
              <div>
                <p className="eyebrow">{edu.school}</p>
                <h3 className="mt-1 text-xl font-semibold">{edu.degree}</h3>
                <p className="mt-2 text-slate-300">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section id="projects" variants={itemVariants} className="space-y-8 scroll-mt-24">
        <h2 className="font-display text-3xl font-semibold">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <div key={project.title} className="glass glass-hover group rounded-3xl p-6">
              <span className="font-display text-sm font-bold text-cyan-300/70">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 text-xl font-semibold transition-colors group-hover:text-cyan-200">
                {project.title}
              </h3>
              <p className="mt-3 text-slate-300">{project.description}</p>
              <p className="mt-4 text-sm text-slate-400">{project.stack}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Interests */}
      <motion.section variants={itemVariants} className="space-y-6">
        <h2 className="font-display text-3xl font-semibold">Interests</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {interests.map((interest) => (
            <div key={interest.title} className="glass glass-hover flex items-center gap-4 rounded-3xl p-6">
              <div className="rounded-2xl bg-white/10 p-4">
                <interest.icon className="text-2xl text-cyan-300" />
              </div>
              <p className="text-lg font-semibold">{interest.title}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.footer variants={itemVariants} className="text-center text-sm text-slate-500">
        © 2025 Tugs-Ochir Byambasuren
      </motion.footer>
    </motion.div>
  )
}

export default Resume
