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
      <div className="navbar-container">
        <motion.a
          href="#home"
          className="logo"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Juan Galvan
        </motion.a>

        <motion.ul
          className="nav-links"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.li
            variants={fadeInUp}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <a href="#home">Home</a>
          </motion.li>

          <motion.li
            variants={fadeInUp}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <a href="#projects">Projects</a>
          </motion.li>

          <motion.li
            variants={fadeInUp}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <a href="#contact">Contact</a>
          </motion.li>
        </motion.ul>
      </div>
    </motion.nav>
  )
}
