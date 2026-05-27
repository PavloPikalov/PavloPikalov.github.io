import React, { useEffect } from 'react'
import styles from './Modal.module.scss'

export default function Modal({ isOpen, onClose, title, image, description }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <div className={styles.overlay} onClick={onClose} aria-hidden="true" />
      <div className={styles.modal} role="dialog" aria-modal="true">
        <div className={styles.content}>
          <button className={styles.close} onClick={onClose} aria-label="Close modal">
            ✕
          </button>

          <div className={styles.inner}>
            {image && (
              <div className={styles.imageSection}>
                <img src={image} alt={title} className={styles.image} />
              </div>
            )}

            <div className={styles.textSection}>
              <h2 className={styles.title}>{title}</h2>
              <div className={styles.description}>
                {typeof description === 'string' ? (
                  <p>{description}</p>
                ) : (
                  description
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
