import React, { useEffect } from 'react'
import styles from './SkillsModal.module.scss'

const skillsData = [
  {
    category: 'Delivery & Agile Management',
    items: ['Agile Project Management', 'Scrum', 'Kanban', 'SDLC', 'Project Planning', 'Project Coordination & Leadership', 'Requirements Management', 'Resource Estimation']
  },
  {
    category: 'Web3 & Tech Architecture',
    items: ['RWA Tokenization', 'Blockchain / Crypto', 'RPC Integrations', 'The Graph', 'Dune Analytics', 'Mailgun', 'On-chain/Off-chain Workflows']
  },
  {
    category: 'Domain Expertise',
    items: ['Fintech', 'B2B SaaS']
  },
  {
    category: 'Tools & Automation',
    items: ['Jira & Confluence', 'n8n', 'BPMN', 'UML', 'Figma', 'Notion', 'Miro', 'Slack']
  },
  {
    category: 'Core Competencies',
    items: ['Team Management', 'Conflict Mediation', 'Emotional Intelligence', 'Stakeholder Communication', 'Knowledge Management']
  }
]

export default function SkillsModal({ isOpen, onClose }) {
  // Handle scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Handle Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className={styles.modalOverlay} onClick={onClose} aria-modal="true" role="dialog" aria-labelledby="skills-modal-title">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
          type="button"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className={styles.header}>
          <h2 id="skills-modal-title" className={styles.title}>Full Stack & Tools</h2>
        </div>

        {/* Modal Content - Bento Grid */}
        <div className={styles.contentWrapper}>
          <div className={styles.bentoGrid}>
            {skillsData.map((skillGroup, index) => (
              <div key={index} className={styles.skillCard}>
                <h3 className={styles.cardTitle}>{skillGroup.category}</h3>
                <div className={styles.tagContainer}>
                  {skillGroup.items.map((item, itemIndex) => (
                    <span key={itemIndex} className={styles.tag}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
