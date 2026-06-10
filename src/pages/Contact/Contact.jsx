import React, { useRef } from 'react'
import styles from './Contact.module.scss'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function Contact(){
  const formRef = useRef(null)
  const contactRef = useScrollAnimation()

  const handleSubmit = (e) => {
    e.preventDefault()
    // For simple setups use mailto or integrate serverless later
    const form = formRef.current
    const subject = encodeURIComponent(form.subject.value)
    const body = encodeURIComponent(form.message.value)
    window.location.href = `mailto:pablopikalow@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className={styles.contact} aria-label="Contact" ref={contactRef} data-animate>
      <h2>Contact</h2>
      <p>Kyiv, Ukraine • +380 73 315 9810 • <a href="mailto:pablopikalow@gmail.com">pablopikalow@gmail.com</a> • <a href="https://t.me/PavloPikalov" target="_blank" rel="noreferrer">t.me/PavloPikalov</a> • <a href="https://linkedin.com/in/pavlo-p-33577a19b" target="_blank" rel="noreferrer">linkedin.com/in/pavlo-p-33577a19b</a></p>

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
