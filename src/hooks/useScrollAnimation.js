import { useEffect, useRef } from 'react'

/**
 * Custom hook for scroll-driven animations using Intersection Observer
 * Elements animate in ONLY on first scroll down, not on scroll back up
 * Performance optimized with hardware-accelerated transforms
 */
export const useScrollAnimation = () => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only trigger animation when element ENTERS viewport (not exits)
          if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated')
            // We don't unobserve - just keep it marked as animated
          }
        })
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before full visibility
      }
    )

    observer.observe(ref.current)

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return ref
}

export default useScrollAnimation
