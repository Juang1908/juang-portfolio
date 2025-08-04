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
          <motion.div className="hero-badge">
            <span>🤚 Hello, I'm</span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
          >
            Juan Galvan
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            Creative Developer & Designer
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            I’m an experienced IT Coordinator with a strong foundation in
            infrastructure, networking, and business technology solutions.I lead
            IT operations across the company—managing Microsoft 365,
            cybersecurity, domain and DNS configurations, hardware procurement,
            and networking projects. Alongside my IT work, I’m actively growing
            my skills in frontend and backend development, focusing on building
            modern web applications using tools like Next.js, Tailwind CSS, and
            Framer Motion on the frontend, and exploring backend technologies
            like Node.js, Docker, and Azure services. My goal is to bridge
            infrastructure and development—delivering end-to-end solutions that
            are both functional and visually compelling. Whether it’s optimizing
            operations, building tech from the ground up, or learning new tools,
            I’m passionate about solving problems, supporting teams, and growing
            with the evolving tech landscape.
          </motion.p>
          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View MY Work
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
            <motion.a target="_blank" href="https://github.com/Juang1908">
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a
              target="_blank"
              href="https://www.linkedin.com/in/juan-galvan1/"
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
            <motion.a target="_blank" href="https://yourresume.com">
              <i className="far fa-file-excel"></i>
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
                background: 'rgba(30, 41, 59, 0.8)',
                backdropFilter: 'blur(10px)',
                marginBottom: 50,
              }}
              style={vscDarkPlus}
            >
              {`const aboutMe: DeveloperProfile = {
  codename: "Juan Galvan",
  origin: "🌍 ",
  role: "Fullstack Web Developer",
  stack: {
    languages: ["JavaScript", "TypeScript", "SQL"],
    frameworks: ["React", "Next.js", "TailwindCSS", "Supabase"],
  },
  traits: [
    "pixel-perfectionist",
    "API whisperer",
    "dark mode advocate",
    "terminal aesthetic enthusiast",
  ],
  missionStatement:
    "Turning ideas into interfaces and bugs into feature",
  availability: "Available for hire",
};`}
            </SyntaxHighlighter>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="card-content">
              <span className="card-icon">🧑🏻‍💻</span>
              <span className="card-text">
                Currently Working on something AWESOME!
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
