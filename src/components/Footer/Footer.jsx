import React from 'react'
import styles from './Footer.module.scss'

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p>© {new Date().getFullYear()} by Pavlo Pikalov.</p>
          <p>Technical PM | B2B SaaS Delivery Expert</p>
        </div>

        <div className={styles.sections}>
          <div className={styles.section}>
            <h4>Call</h4>
            <a href="tel:+380733159810">+380 73 315 9810</a>
          </div>
          
          <div className={styles.section}>
            <h4>Write</h4>
            <a href="mailto:pablopikalow@gmail.com">pablopikalow@gmail.com</a>
          </div>

          <div className={styles.section}>
            <h4>Follow</h4>
            <div className={styles.socials}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">𝕏</a>
              <a href="https://linkedin.com/in/pavlo-p-33577a19b" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
              <a href="https://t.me/PavloPikalov" target="_blank" rel="noreferrer" aria-label="Telegram">✉</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
