/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export const AIChat = () => {
  const chatUrl = import.meta.env.VITE_GPT_CHAT_URL

  return (
    <motion.section
      id="ai"
      className="bg-black text-white py-20 px-4 text-center"
      initial="initial"
      animate="animate"
      variants={fadeInUp}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6 text-blue-400">
        Ask My AI Assistant
      </h2>
      <p className="text-gray-400 mb-6">
        Have questions about my experience, skills, or projects? Ask away!
      </p>

      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ opacity: [0, 1], scale: [0.95, 1] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        href={chatUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition hover:shadow-[0_0_30px_#00ffff]"
      >
        Chat with My GPT
      </motion.a>
    </motion.section>
  )
}
