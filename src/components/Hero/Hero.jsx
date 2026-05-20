import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Hero.module.scss'

export default function Hero(){
  return (
    <section className={styles.hero} aria-label="Introduction">
      <h1 className={styles.title}>Hi, I'm [Your Name]</h1>
      <p className={styles.lead}>Frontend developer focusing on accessible, responsive React apps.</p>
      <Link to="/projects" className={styles.cta}>View Projects</Link>
    </section>
  )
}
