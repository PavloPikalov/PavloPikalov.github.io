import React from 'react'
import styles from './About.module.scss'

export default function About(){
  return (
    <section className={styles.about} aria-label="About me">
      <h2>About</h2>
      <p>I build accessible, responsive frontends using React.</p>
    </section>
  )
}
