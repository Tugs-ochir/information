import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa'

const EMAIL = 'b.tugsochir1@gmail.com'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const contactMethods = [
  { icon: FaEnvelope, title: 'Email', value: EMAIL, link: `mailto:${EMAIL}` },
  { icon: FaPhone, title: 'Phone', value: '+976 9521 0505', link: 'tel:+97695210505' },
  { icon: FaMapMarkerAlt, title: 'Location', value: 'Ulaanbaatar, Mongolia', link: null },
]

const socials = [
  { Icon: FaGithub, href: 'https://github.com/Tugs-ochir', label: 'GitHub' },
  { Icon: FaTwitter, href: 'https://x.com/tugs_0505?s=21', label: 'Twitter' },
  { Icon: FaInstagram, href: 'https://www.instagram.com/ricosgut/', label: 'Instagram' },
]

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Compose an email the visitor can send from their own mail client.
    const subject = encodeURIComponent(formData.subject || `Message from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition-all focus:border-cyan-400/60 focus:bg-white/10 focus:ring-2 focus:ring-cyan-400/20'

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-5xl space-y-16 py-8 text-white"
    >
      {/* Header */}
      <motion.section variants={itemVariants} className="space-y-5 text-center">
        <p className="eyebrow">Contact</p>
        <h1 className="font-display text-4xl font-bold lg:text-5xl">
          Let's <span className="text-gradient">work together</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-300">
          Have a project in mind or just want to say hi? I'm always open to new
          opportunities and collaborations.
        </p>
      </motion.section>

      {/* Contact methods */}
      <motion.section variants={itemVariants}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {contactMethods.map((method) => {
            const Icon = method.icon
            const Wrapper = method.link ? motion.a : motion.div
            return (
              <Wrapper
                key={method.title}
                {...(method.link ? { href: method.link } : {})}
                whileHover={{ y: -6 }}
                className="glass glass-hover block rounded-3xl p-8 text-center"
              >
                <Icon className="mx-auto mb-4 text-3xl text-cyan-300" />
                <h3 className="text-lg font-bold">{method.title}</h3>
                <p className="mt-1 break-words text-slate-300">{method.value}</p>
              </Wrapper>
            )
          })}
        </div>
      </motion.section>

      {/* Form */}
      <motion.section variants={itemVariants}>
        <div className="mx-auto max-w-3xl">
          <div className="glass rounded-3xl p-8 lg:p-12">
            <h2 className="mb-8 font-display text-3xl font-semibold">Send me a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-200">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-200">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-200">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-200">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className={`${inputClass} resize-none`}
                  placeholder="Tell me more about your project..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-gradient w-full py-4 text-lg"
              >
                {submitted ? '✓ Opening your mail app…' : 'Send Message'}
              </motion.button>
            </form>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-center font-medium text-emerald-300"
              >
                Thanks! Your email draft is ready — just hit send.
              </motion.div>
            )}
          </div>
        </div>
      </motion.section>

      {/* Socials */}
      <motion.section variants={itemVariants} className="text-center">
        <h3 className="mb-6 font-display text-2xl font-semibold">Find me online</h3>
        <div className="flex justify-center gap-4">
          {socials.map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="glass glass-hover rounded-2xl p-4 text-cyan-300"
            >
              <Icon className="text-2xl" />
            </motion.a>
          ))}
        </div>
      </motion.section>
    </motion.div>
  )
}

export default Contact
