import React from 'react'
import styles from './Footer.module.scss'

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  )
}
