import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaLightbulb, FaUsers, FaTrophy } from 'react-icons/fa'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const features = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices and design patterns.',
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions to complex problems.',
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'Working effectively in teams and mentoring junior developers for growth.',
    },
    {
      icon: FaTrophy,
      title: 'Results Driven',
      description: 'Focused on delivering high-quality solutions that exceed client expectations.',
    },
  ]

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gray-50 px-4 lg:px-16 py-12"
    >
      {/* About Hero */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Me</h1>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              I'm a passionate full-stack developer with a love for creating beautiful, 
              functional web applications. My journey in tech started with a curiosity about 
              how things work, and it has evolved into a career dedicated to solving real-world 
              problems through code.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              With over 4 years of professional experience, I've worked with startups and 
              enterprises, helping them build scalable solutions. I'm particularly interested 
              in the intersection of design and functionality, ensuring that every application 
              I build is not just powerful, but also delightful to use.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you can find me contributing to open-source projects, 
              writing technical blogs, or exploring the latest web technologies.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
              alt="About"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* What I Do */}
      <motion.section variants={itemVariants} className="mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <Icon className="text-4xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section variants={itemVariants} className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-2xl shadow-lg text-center">
            <p className="text-4xl font-bold mb-2">50+</p>
            <p className="text-lg">Projects Completed</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gradient-to-br from-purple-600 to-purple-700 text-white p-8 rounded-2xl shadow-lg text-center">
            <p className="text-4xl font-bold mb-2">30+</p>
            <p className="text-lg">Happy Clients</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gradient-to-br from-pink-600 to-pink-700 text-white p-8 rounded-2xl shadow-lg text-center">
            <p className="text-4xl font-bold mb-2">4+</p>
            <p className="text-lg">Years Experience</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-2xl shadow-lg text-center">
            <p className="text-4xl font-bold mb-2">15+</p>
            <p className="text-lg">Technologies</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Interests */}
      <motion.section variants={itemVariants} className="mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Interests & Hobbies</h2>
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Beyond programming, I'm passionate about:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl font-bold">•</span>
              <span><strong>Open Source Contribution:</strong> Contributing to projects that make a difference in the developer community</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl font-bold">•</span>
              <span><strong>Technical Writing:</strong> Sharing knowledge through blog posts and tutorials</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl font-bold">•</span>
              <span><strong>Mentoring:</strong> Helping aspiring developers grow their skills and careers</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl font-bold">•</span>
              <span><strong>Gaming:</strong> Relaxing with strategy and indie games in my free time</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-2xl font-bold">•</span>
              <span><strong>Photography:</strong> Capturing moments and exploring visual storytelling</span>
            </li>
          </ul>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default About
