/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
}

export const Hero = () => {
  const resumeUrl =
    'https://drive.google.com/file/d/1O064N_B4BNYww97nR4LHkreR3HtPYEHB/view?usp=sharing' // replace with your actual resume file path

  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge" variants={fadeInUp}>
            <span>👋 Hello, I&apos;m</span>
          </motion.div>

          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
          >
            Juan Galvan
          </motion.h1>

          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            IT Support | Systems Administration | Infrastructure & Technical
            Operations
          </motion.h2>

          <motion.p className="hero-description" variants={fadeInUp}>
            I&apos;m an IT professional with hands-on experience supporting
            business technology, infrastructure, end users, and operational
            systems. My background includes Microsoft 365 administration, Entra
            ID, Intune, Active Directory, hardware deployment, connected
            devices, troubleshooting, and operational reporting. I help teams
            stay secure, connected, and efficient while continuing to build
            modern web development skills.
          </motion.p>

          <motion.p className="hero-availability" variants={fadeInUp}>
            Open to IT Support, Systems Administration, Desktop Support, and
            Technical Operations opportunities.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1O064N_B4BNYww97nR4LHkreR3HtPYEHB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Juang1908"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </motion.a>

            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/juan-galvan1/"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>

            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1O064N_B4BNYww97nR4LHkreR3HtPYEHB/view?usp=sharing"
              aria-label="Resume"
            >
              <i className="far fa-file-alt"></i>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              language="typescript"
              customStyle={{
                margin: 0,
                padding: '2rem',
                height: '100%',
                borderRadius: '20px',
                background: 'rgba(30, 41, 59, 0.85)',
                backdropFilter: 'blur(10px)',
                marginBottom: 50,
              }}
              style={vscDarkPlus}
            >
              {`const profile = {
  name: "Juan Galvan",
  location: "Spring, TX",
  focus: "IT Support // Systems Administration // Infrastructure",
  strengths: [
    "Microsoft 365",
    "Entra ID",
    "Intune",
    "Active Directory",
    "Networking",
    "Hardware Support",
    "Power BI",
    "Google Workspace"
  ],
  development: ["JavaScript", "React", "Next.js", "Tailwind CSS"],
  mindset: ["detail-oriented", "solution-driven", "always learning"],
  status: "Open to opportunities"
};`}
            </SyntaxHighlighter>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="card-content">
              <span className="card-icon">🧑🏻‍💻</span>
              <span className="card-text">
                Building practical IT and web solutions
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
