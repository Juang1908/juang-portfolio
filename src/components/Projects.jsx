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

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="projects-title"
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView={'animate'}
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: 'url(/projects/Video-Surveillance.png)' }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Surveillance System Deployment</h3>
          <p>
            Led the installation of a surveillance system across all key hubs of
            the country club, including mounting security cameras, running
            network cables, and connecting devices to centralized monitoring
            equipment. Also installed companion mobile and desktop apps on
            authorized devices, enabling staff to securely access live feeds and
            recorded footage.
          </p>
          <div className="project-tech">
            <span>IP Cameras</span>
            <span>Mobile App Setup</span>
            <span>LAN Cabling</span>
            <span>Remote Access</span>
          </div>
        </motion.div>
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: 'url(/projects/SCC1.png)' }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Trackman Golf Installation</h3>
          <p>
            Supported the installation of Trackman golf systems at the country
            club by assisting with hardware setup, routing Ethernet cabling
            across the golf range, and configuring network connectivity. Ensured
            devices were correctly powered, connected, and operational for
            seamless data capture and real-time analysis.
          </p>
          <div className="project-tech">
            <span>Ethernet Cabling</span>
            <span>Trackman Hardware</span>
            <span>Network Configuration</span>
            <span>Power Distribution</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: 'url(/projects/clubessemtial.png)' }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Club Essential POS</h3>
          <p>
            Assisted with setting up Clubessential's POS system at a private
            country club, supporting both hardware installation and software
            configuration across multiple departments. Helped deploy networking
            equipment, configure static IPs for printers and terminals, and
            ensured smooth integration with credit card readers and member
            databases.
          </p>
          <div className="project-tech">
            <span>Windows Server</span>
            <span>POS Hardware</span>
            <span>Clubessential</span>
            <span>Networking</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
