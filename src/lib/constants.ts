export const COLORS = {
  primary: {
    DEFAULT: '#1a365d',
    light: '#e2e8f0',
    dark: '#0f172a',
    muted: 'rgba(26, 54, 93, 0.1)',
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
    scale: 1.03,
    transition: { duration: 0.2, ease: 'easeInOut' }
  },

  page: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.25, ease: 'easeInOut' }
  }
} as const

export const TYPOGRAPHY = {
  heading: {
    h1: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
    h2: "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
    h3: "text-2xl md:text-3xl font-bold",
    h4: "text-xl md:text-2xl font-semibold",
  },
  body: {
    large: "text-lg md:text-xl leading-relaxed",
    base: "text-base leading-relaxed",
    small: "text-sm leading-relaxed",
  }
} as const

export const COMPONENTS = {
  cta: {
    container: "bg-primary/5 rounded-2xl p-8 hover:bg-primary/10 transition-colors group cursor-pointer",
    content: "flex items-center gap-4",
    iconWrapper: "p-4 bg-primary rounded-xl",
    icon: "h-8 w-8 text-white",
    textWrapper: "flex-1",
    title: "text-xl font-semibold",
    description: "text-muted-foreground",
    arrow: "ml-auto h-6 w-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
  }
} as const 