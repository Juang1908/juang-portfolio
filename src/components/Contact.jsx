import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { useEffect, useState } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: '',
  })

  const [fieldErrors, setFieldErrors] = useState({})
  const [cooldown, setCooldown] = useState(0)

  useEffect(() => {
    if (cooldown <= 0) return

    const timer = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [cooldown])

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    setFieldErrors((prev) => ({
      ...prev,
      [name]: '',
    }))
  }

  const validateForm = () => {
    const errors = {}

    if (!formData.name.trim()) {
      errors.name = 'Please enter your name.'
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters.'
    }

    if (!formData.email.trim()) {
      errors.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.'
    }

    if (!formData.message.trim()) {
      errors.message = 'Please enter a message.'
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters.'
    }

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (cooldown > 0) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: `Please wait ${cooldown}s before sending again.`,
      })
      return
    }

    if (!validateForm()) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Please fix the highlighted fields.',
      })
      return
    }

    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: '',
    })

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )

      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: 'Message sent successfully!',
      })

      setFormData({
        name: '',
        email: '',
        message: '',
      })

      setFieldErrors({})
      setCooldown(20)

      setTimeout(() => {
        setFormStatus({
          submitting: false,
          success: false,
          error: false,
          message: '',
        })
      }, 4000)
    } catch (error) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Failed to send message. Please try again.',
      })
    }
  }

  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 variants={fadeInUp} initial="initial" animate="animate">
        Let&apos;s Connect
      </motion.h2>

      <motion.p
        className="contact-intro"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        If you&apos;re hiring for an IT support, systems, infrastructure, or
        technical operations role, I&apos;d be glad to connect. Feel free to
        reach out about opportunities, projects, or how I can help support your
        team.
      </motion.p>

      <motion.div className="contact-content" variants={fadeInUp}>
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name..."
            whileFocus={{ scale: 1.02 }}
            onChange={handleInputChange}
            value={formData.name}
            className={fieldErrors.name ? 'input-error' : ''}
          />
          {fieldErrors.name && <p className="error-text">{fieldErrors.name}</p>}

          <motion.input
            type="email"
            name="email"
            placeholder="Your Email..."
            whileFocus={{ scale: 1.02 }}
            onChange={handleInputChange}
            value={formData.email}
            className={fieldErrors.email ? 'input-error' : ''}
          />
          {fieldErrors.email && (
            <p className="error-text">{fieldErrors.email}</p>
          )}

          <motion.textarea
            name="message"
            placeholder="Your Message..."
            whileFocus={{ scale: 1.02 }}
            onChange={handleInputChange}
            value={formData.message}
            className={fieldErrors.message ? 'input-error' : ''}
          />
          {fieldErrors.message && (
            <p className="error-text">{fieldErrors.message}</p>
          )}

          <motion.button
            className="submit-btn"
            type="submit"
            whileHover={{
              scale: formStatus.submitting || cooldown > 0 ? 1 : 1.05,
            }}
            whileTap={{
              scale: formStatus.submitting || cooldown > 0 ? 1 : 0.95,
            }}
            disabled={formStatus.submitting || cooldown > 0}
          >
            {formStatus.submitting ? (
              <span className="btn-loading">
                <span className="spinner" />
                Sending...
              </span>
            ) : cooldown > 0 ? (
              `Please wait ${cooldown}s`
            ) : (
              'Send Message'
            )}
          </motion.button>

          {formStatus.message && (
            <motion.div
              className={`form-status ${formStatus.success ? 'success' : 'error'}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {formStatus.message}
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </motion.section>
  )
}
