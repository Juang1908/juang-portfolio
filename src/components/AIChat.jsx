/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export const AIChat = () => {
  const chatUrl = import.meta.env.VITE_GPT_CHAT_URL

  return (
    <motion.section
      id="ai"
      className="ai-chat-section"
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="ai-chat-container">
        <motion.h2 className="ai-chat-title" variants={fadeInUp}>
          Ask About My Experience
        </motion.h2>

        <motion.p className="ai-chat-description" variants={fadeInUp}>
          Have questions about my technical background, project experience, or
          the tools I’ve worked with? Use this assistant to learn more about my
          work in IT support, systems administration, infrastructure, and
          technical operations.
        </motion.p>

        <motion.a
          href={chatUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ai-chat-button"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          variants={fadeInUp}
        >
          Ask a Question
        </motion.a>
      </div>
    </motion.section>
  )
}
