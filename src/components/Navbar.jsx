/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'

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

export const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div className="logo">Juan Galvan</motion.div>

      <motion.ul
        className="nav-links"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.li variants={fadeInUp}>
          <a href="#home">Home</a>
        </motion.li>

        <motion.li variants={fadeInUp}>
          <a href="#projects">Projects</a>
        </motion.li>

        <motion.li variants={fadeInUp}>
          <a
            href="https://drive.google.com/file/d/1O064N_B4BNYww97nR4LHkreR3HtPYEHB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </motion.li>

        <motion.li variants={fadeInUp}>
          <a href="#contact">Contact</a>
        </motion.li>
      </motion.ul>
    </motion.nav>
  )
}
