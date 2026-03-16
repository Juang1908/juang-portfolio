/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const skillGroups = [
  {
    title: 'IT Support & Systems',
    items: [
      'Microsoft 365',
      'Entra ID',
      'Intune',
      'Active Directory',
      'User Support',
      'Account Troubleshooting',
    ],
  },
  {
    title: 'Infrastructure & Networking',
    items: [
      'Network Cabling',
      'Static IP Configuration',
      'Hardware Deployment',
      'Printer Support',
      'POS Support',
      'Connectivity Troubleshooting',
    ],
  },
  {
    title: 'Operations & Reporting',
    items: [
      'Document Management',
      'Power BI',
      'Reporting',
      'Budget Tracking',
      'OneDrive',
      'SharePoint',
    ],
  },
  {
    title: 'Development',
    items: [
      'JavaScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Framer Motion',
      'Vite',
    ],
  },
]

export const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="skills"
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
    >
      <motion.h2 className="skills-title" variants={fadeInUp}>
        Skills & Tools
      </motion.h2>

      <motion.p className="skills-intro" variants={fadeInUp}>
        A quick overview of the technologies, systems, and tools I’ve worked
        with across IT support, infrastructure, operations, and development.
      </motion.p>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            className="skills-card"
            variants={fadeInUp}
          >
            <h3>{group.title}</h3>

            <div className="skills-tags">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
