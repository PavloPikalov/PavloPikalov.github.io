import React from 'react'
import styles from './ProjectCard.module.scss'

export default function ProjectCard({project}){
  return (
    <article className={styles.card}>
      {project.image && (
        <img src={project.image} alt={project.imageAlt || project.title} className={styles.image} />
      )}
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.description}</p>
        <a href={project.link} className={styles.link} target="_blank" rel="noopener noreferrer">View</a>
      </div>
    </article>
  )
}
