import React from 'react'
import { motion } from 'framer-motion'

const SkillBadge = ({ icon: Icon, name }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -5 }}
      className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
    >
      <Icon size={32} className="text-blue-600" />
      <span className="text-sm font-semibold text-gray-800 text-center">{name}</span>
    </motion.div>
  )
}

export default SkillBadge
