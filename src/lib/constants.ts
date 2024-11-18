export const COLORS = {
  primary: '#0047AB',
  secondary: '#2563eb',
  accent: '#1e40af',
  background: '#F8FAFC',
  text: '#1e293b',
} as const

export const SITE = {
  name: 'Orthotics Now',
  description: 'Professional custom orthotics solutions',
} as const

export const MOTION = {
  // subtle fade up animation for content sections
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  },
  
  // stagger children animations
  stagger: {
    container: {
      animate: { transition: { staggerChildren: 0.1 } }
    },
    item: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 }
    }
  },
  
  // hover effects for interactive elements
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 }
  },

  // page transitions
  page: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  }
} as const 