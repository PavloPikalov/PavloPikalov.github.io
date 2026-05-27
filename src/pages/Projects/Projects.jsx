import React, { useState } from 'react'
import Modal from '../../components/Modal/Modal'
import styles from './Projects.module.scss'

const projects = [
  {
    id: 1,
    title: 'DS Dashboard',
    role: 'Project Manager',
    description: 'Business Platform for Asset Tokenization',
    shortDesc: 'Built the all-in-one platform where business issuers tokenize assets, manage investors, process distributions, and run compliance.',
    fullDesc: (
      <div>
        <p>
          <strong>DS Dashboard</strong> is a comprehensive business platform designed for issuers to tokenize assets efficiently and compliantly.
        </p>
        <h3>Key Features</h3>
        <ul>
          <li><strong>Asset Submission & Tokenization:</strong> AI-assisted onboarding framework for structured asset information input</li>
          <li><strong>Cap Table Management:</strong> Real-time, on-chain, auditable, and exportable cap table tracking</li>
          <li><strong>KYC/AML & Investor Onboarding:</strong> Sumsub integration with eligibility enforcement and DID activation</li>
          <li><strong>Investor Portal:</strong> Holdings, transactions, documents, and distribution tracking</li>
          <li><strong>Distributions:</strong> Issuer-triggered per cap table with PDF/CSV reporting</li>
          <li><strong>White-Label Deployment:</strong> Custom domain, brand styling, your platform, your name</li>
        </ul>
        <h3>Impact</h3>
        <p>
          Every feature is available to every client from day one — nothing is gated. The platform is deployed at your domain with full white-label support, enabling seamless tokenization workflows for diverse asset classes.
        </p>
      </div>
    ),
    image: 'https://via.placeholder.com/500x600?text=DS+Dashboard',
  },
  {
    id: 2,
    title: 'SBID',
    role: 'Project Manager',
    description: 'Soulbound Identity for Blockchain Ecosystem',
    shortDesc: 'Led development of blockchain-based identity solution with 12,500+ users minting Non-Transferable Tokens and 18,000+ passing KYC.',
    fullDesc: (
      <div>
        <p>
          <strong>SBID (Soulbound ID)</strong> is a groundbreaking blockchain-based identity solution integrated into the Stobox ecosystem, enabling secure and trustworthy digital identity management.
        </p>
        <h3>Key Milestones</h3>
        <ul>
          <li><strong>User Growth:</strong> 12,500+ users minting Non-Transferable Tokens (NTTs)</li>
          <li><strong>KYC Compliance:</strong> 18,000+ users passed KYC and planning to mint SBID</li>
          <li><strong>Revenue Sharing:</strong> 40 cents per 100 SLX Revenue Share Security Tokens in dividends</li>
          <li><strong>Token Utilization:</strong> 7,600,000 SOULB tokens utilized with conversion to SLX</li>
          <li><strong>STO Success:</strong> Raised $120k in phase two, surpassing 25% of target</li>
        </ul>
        <h3>Features & Integration</h3>
        <ul>
          <li>Ethereum and Polygon chain integration for broader accessibility</li>
          <li>SBID 2.0 in development with enhanced $SOULB token utility</li>
          <li>Blockchain-based identities for accredited and corporate investors</li>
          <li>Seamless integration into Stobox ecosystem</li>
        </ul>
      </div>
    ),
    image: 'https://via.placeholder.com/500x600?text=SBID+Identity',
  },
  {
    id: 3,
    title: 'DS Swap',
    role: 'Project Manager',
    description: 'Decentralized Swap Module for Stobox',
    shortDesc: 'Managed delivery of DEX functionality enabling seamless token swaps and liquidity operations within the Stobox platform.',
    fullDesc: (
      <div>
        <p>
          <strong>DS Swap</strong> is the decentralized swap module integrated into Stobox, providing users with secure and efficient token exchange capabilities.
        </p>
        <h3>Capabilities</h3>
        <ul>
          <li>Seamless token swaps within the Stobox ecosystem</li>
          <li>Liquidity pool management and operations</li>
          <li>Integration with multiple blockchain networks</li>
          <li>Real-time pricing and slippage protection</li>
        </ul>
        <h3>Technical Highlights</h3>
        <ul>
          <li>Built with reliability and security in mind</li>
          <li>Optimized for cross-chain interoperability</li>
          <li>User-friendly interface for both novice and advanced traders</li>
        </ul>
      </div>
    ),
    image: 'https://via.placeholder.com/500x600?text=DS+Swap',
  },
]

export default function Projects(){
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const openModal = (project) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <>
      <section className={styles.projects}>
        <div className={styles.header}>
          <span className={styles.icon} aria-hidden="true">■</span>
          <h2>Projects</h2>
        </div>

        <div className={styles.container}>
          {projects.map((project, index) => (
            <article key={project.id} className={`${styles.project} ${index % 2 === 1 ? styles.reverse : ''}`}>
              <div className={styles.textCol}>
                <div className={styles.sidebar} aria-hidden="true" />
                <div className={styles.content}>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.role}>{project.role}</p>
                  <p className={styles.desc}>{project.shortDesc}</p>
                  <button 
                    className={styles.detailsBtn}
                    onClick={() => openModal(project)}
                    aria-label={`View details about ${project.title}`}
                  >
                    View Details →
                  </button>
                </div>
              </div>

              <div className={styles.imageCol}>
                <div className={styles.imagePlaceholder}>
                  <img src={project.image} alt={project.title} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selectedProject && (
        <Modal
          isOpen={modalOpen}
          onClose={closeModal}
          title={selectedProject.title}
          image={selectedProject.image}
          description={selectedProject.fullDesc}
        />
      )}
    </>
  )
}
