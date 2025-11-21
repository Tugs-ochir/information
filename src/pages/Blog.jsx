import React from 'react'
import { motion } from 'framer-motion'

const articles = [

]

const Blog = () => {
  return (
    <section className="max-w-5xl mx-auto text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-semibold">Very soon </h1>
        <p className="text-lg text-slate-300 mt-4 max-w-2xl">

        </p>
      </motion.div>

      <div className="grid gap-6">
        {articles.map((article, index) => (
          <motion.article
            key={article.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-cyan-400/50 transition-all duration-300"
          >
            <p className="text-sm text-cyan-200 mb-2">{article.date}</p>
            <h2 className="text-2xl font-semibold mb-3">{article.title}</h2>
            <p className="text-slate-200 leading-relaxed">{article.summary}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Blog

