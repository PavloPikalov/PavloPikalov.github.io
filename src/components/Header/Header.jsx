import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link to="/">
            <span className={styles.icon} aria-hidden="true">■</span>
            <span className={styles.name}>Pavlo Pikalov</span>
            <span className={styles.role}>PROJECT MANAGER</span>
          </Link>
        </div>
        <nav aria-label="Main navigation">
          <ul className={styles.navList}>
            <li>
              <NavLink to="/about" className={({isActive})=> isActive ? styles.active : ''}>About</NavLink>
            </li>
            <li>
              <a href="mailto:pablopikalow@gmail.com" className={styles.navLink}>Resume</a>
            </li>
            <li>
              <NavLink to="/projects" className={({isActive})=> isActive ? styles.active : ''}>Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({isActive})=> isActive ? styles.active : ''}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
