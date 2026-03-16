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
        Featured Projects
      </motion.h2>

      <motion.p
        className="projects-intro"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        Selected work that reflects my experience in infrastructure support,
        systems administration, technical operations, and business technology
        environments.
      </motion.p>

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
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
            Supported the deployment of surveillance systems across key business
            locations by helping install cameras, route network cabling, connect
            monitoring equipment, and configure secure device access. Also
            assisted with mobile and desktop viewing setup so authorized staff
            could monitor live and recorded footage efficiently.
          </p>
          <div className="project-tech">
            <span>IP Cameras</span>
            <span>Network Cabling</span>
            <span>Device Setup</span>
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
          <h3>Trackman Golf Installation Support</h3>
          <p>
            Assisted with the installation of Trackman golf technology by
            supporting hardware setup, Ethernet cabling, connectivity
            validation, and operational readiness across the range environment.
            Helped ensure devices were powered, connected, and functioning
            properly for reliable data capture and user experience.
          </p>
          <div className="project-tech">
            <span>Ethernet Cabling</span>
            <span>Hardware Support</span>
            <span>Network Connectivity</span>
            <span>Deployment Support</span>
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
          <h3>Clubessential POS Deployment</h3>
          <p>
            Supported the rollout of Clubessential POS systems by assisting with
            hardware installation, printer and terminal connectivity, static IP
            configuration, and onsite troubleshooting. Helped improve deployment
            readiness across departments by supporting both technical setup and
            day-to-day issue resolution.
          </p>
          <div className="project-tech">
            <span>POS Systems</span>
            <span>Static IPs</span>
            <span>Printer Support</span>
            <span>Networking</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: 'url(/projects/microsoft-admin.png)' }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Microsoft 365 / Entra ID Administration</h3>
          <p>
            Supported Microsoft 365 administrative tasks including user account
            assistance, password resets, identity troubleshooting, and
            device-related workflows. Worked with Entra ID, Intune, and Active
            Directory to help maintain secure access, organized account
            management, and reliable day-to-day support.
          </p>
          <div className="project-tech">
            <span>Microsoft 365</span>
            <span>Entra ID</span>
            <span>Intune</span>
            <span>User Management</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: 'url(/projects/google-workspace.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundColor: '#fff',
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Google Workspace Administration</h3>
          <p>
            Built working knowledge of Google Workspace administration through
            hands-on learning and platform use, including user support,
            permissions, access controls, and collaboration tools such as Gmail,
            Drive, Calendar, and the Admin Console.
          </p>
          <div className="project-tech">
            <span>Google Workspace</span>
            <span>Admin Console</span>
            <span>Gmail & Drive</span>
            <span>User Support</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: 'url(/projects/document.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundColor: '#fff',
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Document Management & Operational Reporting</h3>
          <p>
            Supported document organization and operational reporting workflows
            by improving file structure, retrieval processes, and information
            visibility across teams. Contributed to budget tracking, searchable
            digital records, and Power BI KPI reporting to help support better
            operational decisions.
          </p>
          <div className="project-tech">
            <span>Document Management</span>
            <span>Power BI</span>
            <span>OneDrive</span>
            <span>SharePoint</span>
            <span>Budget Tracking</span>
            <span>Reporting</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
