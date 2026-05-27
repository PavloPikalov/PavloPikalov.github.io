import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Hero.module.scss'

export default function Hero(){
  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.photoWrap}>
            <img 
              src="https://via.placeholder.com/220?text=Pavlo" 
              alt="Pavlo Pikalov" 
              className={styles.photo}
            />
          </div>
          <h2 className={styles.name}>Pavlo Pikalov</h2>
          <p className={styles.role}>PROJECT MANAGER</p>
          <div className={styles.underline} aria-hidden="true" />
          <div className={styles.socials}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">𝕏</a>
            <a href="https://linkedin.com/in/pavlo-p-33577a19b" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
            <a href="https://t.me/PavloPikalov" target="_blank" rel="noreferrer" aria-label="Telegram">✉</a>
          </div>
        </div>

        <div className={styles.right}>
          <h1 className={styles.title}>Hello</h1>
          <p className={styles.headline}>Here's who I am & what I do</p>
          <p className={styles.lead}>Technical PM for 3 years in fintech with expertise in B2B SaaS projects scaling, team coordination, and delivery excellence. Experienced with Agile, Scrum, Kanban, and vendor integrations.</p>
          <div className={styles.actions}>
            <a href="mailto:pablopikalow@gmail.com" className={styles.resumeBtn}>RESUME</a>
            <Link to="/projects" className={styles.projectsBtn}>PROJECTS</Link>
          </div>
          <p className={styles.extraText}>I'm passionate about delivering value, building high-performing teams, and creating seamless product experiences. Let's collaborate to bring your vision to life.</p>
        </div>
      </div>
    </section>
  )
}
