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
} from 'react-icons/fa'

const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const contactItems = [
    { icon: FaEnvelope, label: 'Имэйл', value: 'B.Tugsochir1@gmail.com' },
    { icon: FaPhone, label: 'Утас', value: '95210505 ' },
    { icon: FaMapMarkerAlt, label: 'Байршил', value: 'Улаанбаатар, Монгол' },
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
    {
      category: 'Frontend',
      items: ['React.js', 'Next.js', 'TailwindCSS', 'HTML5/CSS3'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'Django', 'GraphQL'],
    },
    {
      category: 'Database & Tools',
      items: ['MongoDB', 'PostgreSQL', 'Prisma', 'Git'],
    },
    {
      category: 'DevOps & Cloud',
      items: ['Docker (Beginner)', 'AWS (Beginner)', 'GCP (Beginner)', 'CI/CD (Beginner)'],
    },
  ]

  const experiences = [

  ]

  const education = [
    {
      school: 'University of the Humanities',
      degree: "Bachelor's Degree",
      details: 'Computer Science in software',
    },
   
  ]

  const projects = [
    {
      title: 'System for registering and monitoring web servers',
      stack: 'Next.js, Django, PostgreSQL, Socket.io, Docker',
      description:
        '   Серверүүдийн бүртгэл болон realtime хяналтын систем.',
    },
    {
      title: 'Date Invitation Generator Website',
      stack: 'Next.js, Django, PostgreSQL, Socket.io, Docker',
      description:
        'Болзооны урилга үүсгэх веб сайт.',
    },

  ]

  const interests = [
    {
      icon: FaGamepad,
      title: 'E-Sport',
    },
    {
      icon: FaVolleyballBall,
      title: 'Volleyball',
     
    },
    {
      icon: FaTableTennis,
      title: 'Tennis',
    },
  ]

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-transparent text-white px-4 sm:px-8 lg:px-20 py-16 space-y-16"
    >
      <motion.section variants={itemVariants} className="text-center space-y-6">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-200">Resume</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">Tugs-Ochir Byambasuren</h1>
        <p className="text-2xl text-slate-200">Middle Full-Stack Developer</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/CV-Бямбасүрэн-Төгс-Очир.pdf"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 font-semibold shadow-lg shadow-cyan-500/30"
          >
            Download CV
            <FaDownload />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white/90 hover:border-cyan-400"
          >
            Featured Projects
            <FaArrowRight />
          </a>
        </div>
      </motion.section>

      <motion.section variants={itemVariants}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactItems.map((item) => (
            <div
              key={item.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md"
            >
              <item.icon className="text-cyan-300 text-2xl mb-3" />
              <p className="text-sm uppercase tracking-wide text-slate-400">{item.label}</p>
              <p className="font-semibold text-lg">{item.value}</p>
            </div>
          ))}
        </div>
      </motion.section>
      <motion.section variants={itemVariants} className="space-y-6">
        {experiences.map((experience) => (
          <div
            key={experience.role}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">{experience.company}</p>
                <h3 className="text-2xl font-semibold mt-2">{experience.role}</h3>
              </div>
              <span className="text-slate-300 text-sm">{experience.period}</span>
            </div>
            <ul className="list-disc list-outside pl-5 space-y-2 text-slate-200">
              {experience.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.section>

      <motion.section variants={itemVariants} className="space-y-8">
        <h2 className="text-3xl font-semibold">Skills & Technologies</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.category} className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200 mb-3">{skill.category}</p>
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item.name || item}
                    className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm"
                  >
                    {item.name ? `${item.name} · ${item.level}` : item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="space-y-6">
        <h2 className="text-3xl font-semibold">Education</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu) => (
            <div key={edu.school} className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">{edu.school}</p>
              <h3 className="text-2xl font-semibold mt-2">{edu.degree}</h3>
              <p className="text-slate-300 mt-3">{edu.details}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section id="projects" variants={itemVariants} className="space-y-8">
        <h2 className="text-3xl font-semibold">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">{project.metrics}</p>
              <h3 className="text-2xl font-semibold mt-3">{project.title}</h3>
              <p className="text-slate-300 mt-3">{project.description}</p>
              <p className="text-sm text-slate-400 mt-4">{project.stack}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="space-y-6">
        <h2 className="text-3xl font-semibold">Interests</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {interests.map((interest) => (
            <div
              key={interest.title}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md"
            >
              <div className="p-4 rounded-2xl bg-white/10">
                <interest.icon className="text-2xl text-cyan-300" />
              </div>
              <div>
                <p className="text-lg font-semibold">{interest.title}</p>
                <p className="text-slate-300 text-sm">{interest.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.footer variants={itemVariants} className="text-center text-slate-400 text-sm">
        © 2025 Tugs-Ochir Byambasuren
      </motion.footer>
    </motion.div>
  )
}

export default Resume
