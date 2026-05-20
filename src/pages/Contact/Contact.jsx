import React, { useRef } from 'react'
import styles from './Contact.module.scss'

export default function Contact(){
  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // For simple setups use mailto or integrate serverless later
    const form = formRef.current
    const subject = encodeURIComponent(form.subject.value)
    const body = encodeURIComponent(form.message.value)
    window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`
  }

  return (
    <section className={styles.contact} aria-label="Contact">
      <h2>Contact</h2>
      <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
        <label>
          Name
          <input name="name" type="text" required />
        </label>
        <label>
          Subject
          <input name="subject" type="text" required />
        </label>
        <label>
          Message
          <textarea name="message" rows="6" required></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  )
}
