import React from 'react'
import { motion } from 'framer-motion'

const ProjectCard = ({ title, description, tags, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 block cursor-pointer"
    >
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  )
}

export default ProjectCard
