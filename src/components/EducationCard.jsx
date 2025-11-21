import React from 'react'
import { motion } from 'framer-motion'

const EducationCard = ({ school, degree, field, year, details }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{school}</h3>
          <p className="text-blue-600 font-semibold">{degree} in {field}</p>
        </div>
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{year}</span>
      </div>
      {details && <p className="text-gray-600">{details}</p>}
    </motion.div>
  )
}

export default EducationCard
