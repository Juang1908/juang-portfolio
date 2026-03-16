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
            IT Professional | Infrastructure, Admin & Web Development
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            I’m an IT Coordinator with hands-on experience supporting
            infrastructure, networking, cloud platforms, and business technology
            operations. My work includes Microsoft 365 administration, Entra ID,
            Intune, Active Directory, hardware and software support, domain and
            DNS management, cybersecurity practices, and network deployment
            projects. I also bring experience in document management,
            operational reporting, budget tracking, and Power BI KPI visibility,
            helping teams stay organized, secure, and efficient. Alongside my IT
            background, I’m expanding my skills in frontend and backend
            development using technologies like Next.js, Tailwind CSS, Framer
            Motion, Node.js, Docker, and Azure. My goal is to bridge IT
            operations and development to build practical, modern solutions that
            improve both systems and user experience.
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
              {`const aboutMe: ProfessionalProfile = {
  codename: "Juan Galvan",
  origin: "Spring, TX",
  role: "IT Coordinator // Systems Support // Emerging Full-Stack Developer",
  stack: {
    infrastructure: ["Microsoft 365", "Entra ID", "Intune", "Active Directory", "Networking"],
    operations: ["Document Management", "Power BI", "Operational Reporting", "Budget Tracking"],
    development: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js"]
  },
  traits: [
    "detail-oriented",
    "solution-driven",
    "tech-forward",
    "always learning"
  ],
  missionStatement:
    "Building the bridge between infrastructure, cloud systems, and modern web experiences.",
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
