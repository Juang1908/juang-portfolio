import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { AIChat } from './components/AIChat'
import { Contact } from './components/Contact'

import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }, [])

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      <Navbar />
      <Hero />
      <Projects />
      <AIChat />
      <Contact />

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="footer-content">
          <h3>Juan Galvan</h3>
          <p>
            IT Support • Systems Administration • Infrastructure • Technical
            Operations
          </p>

          <div className="footer-links">
            <a
              href="https://www.linkedin.com/in/juan-galvan1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Juang1908"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="/Juan-Galvan-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a href="#contact">Contact</a>
          </div>

          <p className="footer-copy">
            &copy; 2026 Juan Galvan. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </div>
  )
}

export default App
