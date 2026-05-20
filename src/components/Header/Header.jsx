import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <a href="/">MyPortfolio</a>
        </div>
        <nav aria-label="Main navigation">
          <ul className={styles.navList}>
            <li>
              <NavLink to="/" className={({isActive})=> isActive ? styles.active : ''} end>Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({isActive})=> isActive ? styles.active : ''}>Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({isActive})=> isActive ? styles.active : ''}>About</NavLink>
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
