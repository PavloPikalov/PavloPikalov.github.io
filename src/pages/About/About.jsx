import React from 'react'
import styles from './About.module.scss'

export default function About(){
  return (
    <section className={styles.about} aria-label="About me">
      <h2>About</h2>
      <p><strong>Technical PM for 3 years in fintech with expertise in B2B SaaS projects scaling.</strong></p>

      <h3>Experience</h3>
      <h4>Stobox — Project and Delivery Manager (Jan 2023 – Present)</h4>
      <ul>
        <li>Delivered modules powering the product: SSO, Price Oracle, SBID, Auction, DS Swap.</li>
        <li>Led delivery across 5 product workstreams, applying SDLC to structure development and releases.</li>
        <li>Integrated Scrum, improving task breakdown speed by 20% and reducing critical bugs by 30%.</li>
        <li>Integrated and supported RPC services, Mailgun, Dune, The Graph and other vendor tooling.</li>
        <li>Coordinated cross-functional teams (up to 10 specialists) to align priorities and scope.</li>
        <li>Created platform guides and feature manuals, reducing support workload by 25%.</li>
      </ul>

      <h3>Skills & Tools</h3>
      <p>Agile, Scrum, Kanban • Jira • Confluence • Notion • Figma • Miro • Vendor integration (RPC providers, Mailgun, Dune, The Graph)</p>

      <h3>Education</h3>
      <p>Project Manager in IT Certification (2023) — Genius space<br />MSc in History and Archeology (2023) — Lviv National University</p>

      <h3>Languages</h3>
      <p>English (intermediate), Ukrainian (native), Spanish (elementary)</p>
    </section>
  )
}
