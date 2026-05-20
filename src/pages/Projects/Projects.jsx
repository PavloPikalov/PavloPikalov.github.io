import React from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import styles from './Projects.module.scss'

const sample = [
  { title: 'Project One', description: 'Short description', link: '#' },
  { title: 'Project Two', description: 'Short description', link: '#' },
  { title: 'Project Three', description: 'Short description', link: '#' }
]

export default function Projects(){
  return (
    <section className={styles.grid} aria-label="Projects">
      {sample.map((p, i) => (
        <ProjectCard key={i} project={p} />
      ))}
    </section>
  )
}
