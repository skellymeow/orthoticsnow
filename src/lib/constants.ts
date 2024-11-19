export const COLORS = {
  primary: {
    DEFAULT: '#0047AB',
    light: '#E6F0FF',
    dark: '#003380',
    muted: 'rgba(0, 71, 171, 0.1)',
  },
  secondary: {
    DEFAULT: '#2563eb',
    light: '#EEF2FF',
    dark: '#1e40af',
  },
  neutral: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },
  success: '#16A34A',
  warning: '#EAB308',
  error: '#DC2626',
} as const

export const SITE = {
  name: 'Orthotics Now',
  description: 'Professional custom orthotics solutions',
  contact: {
    phone: '(519) 736-5353',
    email: 'info@orthoticsnow.com',
    address: '286 Sandwich St S, Amherstburg, ON N9V 2A7',
  },
} as const

export const MOTION = {
  fadeIn: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: 'easeOut' }
  },
  
  stagger: {
    container: {
      animate: { transition: { staggerChildren: 0.08 } }
    },
    item: {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  },
  
  hover: {
    scale: 1.02,
    transition: { duration: 0.2, ease: 'easeInOut' }
  },

  page: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.25, ease: 'easeInOut' }
  }
} as const 