import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SkillsModal from '../../components/SkillsModal/SkillsModal'
import styles from './About.module.scss'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function About(){
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false)
  const aboutRef = useScrollAnimation()

  const performanceMetrics = [
    {
      metric: '+20%',
      title: 'Delivery Velocity',
      description: 'Scrum methodology adoption & sprint optimization accelerated task breakdown.'
    },
    {
      metric: '-30%',
      title: 'Engineering Quality',
      description: 'QA workflows & risk management protocols reduced critical bugs at release.'
    },
    {
      metric: '+30%',
      title: 'Team eNPS',
      description: 'Cross-functional leadership across 10+ specialists prevented key turnover.'
    },
    {
      metric: '-25%',
      title: 'Support Workload',
      description: 'Platform documentation and user onboarding guides automated field guidance.'
    }
  ]

  const ecosystemStreams = [
    { name: 'SSO', description: 'Single Sign-On Integration' },
    { name: 'Price Oracle', description: 'Real-time Asset Valuation' },
    { name: 'SBID', description: 'Blockchain Identity Layer' },
    { name: 'Auction', description: 'On-chain Bidding Engine' },
    { name: 'DS Swap', description: 'Decentralized Exchange' }
  ]


  const expertiseTags = [
    'RWA Tokenization',
    'Web3 & Blockchain',
    'Agile / Scrum / Kanban',
    'Fintech SaaS',
    'System Integrations',
    'SDLC Management'
  ]

  const personalInterests = [
    {
      icon: '🗣️',
      title: 'Competitive Debating',
      description: 'Spent 2 years in the Ukrainian Debate Federation (British Parliamentary format). As an experienced debater trained for judging accreditation, I thrive on structured argument, sharp logic, and fast crisis communication.'
    },
    {
      icon: '⚔️',
      title: 'History & Medieval Combat',
      description: 'Deeply fascinated by history. I used to practice historical medieval battle (HMB) sports and volunteered for an NGO focused on restoring historical traditions and cultural heritage in Lviv.'
    },
    {
      icon: '✍️',
      title: 'Creative Writing',
      description: 'I write original stories and immersive world-building plots—an exercise that keeps my strategic thinking and documentation sharp.'
    }
  ]

  return (
    <>
      <section 
        className={styles.about} 
        aria-label="About me"
        ref={aboutRef}
        data-animate
      >
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeadline}>
              Technical Project & Delivery Manager
            </h1>
            <p className={styles.heroTagline}>
              Bridging Web3 Complexity with High-Performing Teams
            </p>
            <div className={styles.heroDivider}></div>
            <p className={styles.heroDescription}>
              Over 3 years driving engineering, product, design, and QA workflows in Web3 and fintech. I transform complex technical challenges into predictable, stable releases by architecting on-chain/off-chain systems, integrating critical infrastructure, and leading cross-functional teams of 10+ specialists.
            </p>
          </div>
          
          <div className={styles.heroParagraphs}>
            <div className={styles.heroBenefits}>
              <div className={styles.benefit}>
                <span className={styles.benefitIcon}>→</span>
                <span>Technical fluency meets people-first leadership</span>
              </div>
              <div className={styles.benefit}>
                <span className={styles.benefitIcon}>→</span>
                <span>Eliminating legacy blockers, accelerating time-to-market</span>
              </div>
              <div className={styles.benefit}>
                <span className={styles.benefitIcon}>→</span>
                <span>RWA tokenization, infrastructure integration, team orchestration</span>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Impact - Grid Layout with Work Experience Context */}
        <div className={styles.performanceSection}>
          <div className={styles.performanceHeader}>
            <span className={styles.eyebrow}>
              Stobox <span className={styles.eyebrowSeparator}>•</span> Jan 2023 – Present
            </span>
            <h2 className={styles.sectionTitle}>Performance Impact</h2>
          </div>
          
          <div className={styles.metricsGrid}>
            {performanceMetrics.map((metric, index) => (
              <div key={index} className={styles.metricCard}>
                <div className={styles.metricValue}>{metric.metric}</div>
                <h3 className={styles.metricTitle}>{metric.title}</h3>
                <p className={styles.metricDescription}>{metric.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ecosystem Integration Section */}
        <div className={styles.ecosystemSection}>
          <h2 className={styles.sectionTitle}>5 Cross-Functional Streams</h2>
          <p className={styles.ecosystemIntro}>
            Delivered core product modules bridging on-chain infrastructure (RPC, Dune, The Graph) with user-facing features (SSO, tokenization, identity, auction). Each stream required cross-functional alignment to maintain system stability and market readiness.
          </p>
          <div className={styles.streamGrid}>
            {ecosystemStreams.map((stream, index) => (
              <div key={index} className={styles.streamCard}>
                <div className={styles.streamLabel}>{stream.name}</div>
                <p className={styles.streamDesc}>{stream.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Highlights */}
        <div className={styles.expertiseSection}>
          <h2 className={styles.sectionTitle}>Expertise Highlights</h2>
          <div className={styles.tagsContainer}>
            {expertiseTags.map((tag, index) => (
              <span key={index} className={styles.expertiseTag}>
                {tag}
              </span>
            ))}
          </div>
          <button 
            className={styles.techStackBtn}
            onClick={() => setIsSkillsModalOpen(true)}
            aria-label="View full stack and tools"
          >
            View Full Tech Stack →
          </button>
        </div>

        {/* Beyond the Sprints */}
        <div className={styles.personalSection}>
          <h2 className={styles.sectionTitle}>Beyond the Sprints</h2>
          <p className={styles.personalIntro}>
            When I'm not refining backlogs or tracking cycle times, I actively seek out environments that challenge my logic and expand my perspective:
          </p>
          
          <div className={styles.personalGrid}>
            {personalInterests.map((interest, index) => (
              <div key={index} className={styles.personalCard}>
                <div className={styles.personalIcon}>{interest.icon}</div>
                <h3 className={styles.personalTitle}>{interest.title}</h3>
                <p className={styles.personalDescription}>{interest.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Languages */}
        <div className={styles.educationSection}>
          <div className={styles.educationGrid}>
            <div>
              <h3>Education</h3>
              <ul className={styles.noBulletList}>
                <li>Project Manager in IT Certification (2023) — Genius space</li>
                <li>MSc in History and Archeology (2023) — Lviv National University</li>
              </ul>
            </div>
            <div>
              <h3>Languages</h3>
              <ul className={styles.noBulletList}>
                <li>English (intermediate)</li>
                <li>Ukrainian (native proficiency)</li>
                <li>Spanish (elementary)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaHeadline}>Want to build something complex yet predictable?</h2>
            <p className={styles.ctaSubtitle}>
              Let's discuss your product delivery targets, workflow automation goals, or simply share a great story.
            </p>
            <Link to="/contact" className={styles.ctaButton}>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <SkillsModal isOpen={isSkillsModalOpen} onClose={() => setIsSkillsModalOpen(false)} />
    </>
  )
}
