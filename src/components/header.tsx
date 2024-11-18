'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ShoppingBag, BedDouble, Footprints, Activity, Home, Info, HelpCircle, Box, ChevronDown, Phone, MapPin, Menu, X, Calendar } from 'lucide-react'
import { SITE, MOTION } from '@/lib/constants'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useModal } from '@/contexts/modal-context'

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: Info },
  { name: 'FAQ', href: '/faq', icon: HelpCircle },
] as const

const products = [
  {
    title: "Custom Orthotics",
    description: "Professional prescription orthotics for all lifestyles",
    href: "/products/orthotics",
    Icon: ShoppingBag
  },
  {
    title: "Chiroflow Pillow",
    description: "Waterbase pillow for optimal neck support",
    href: "/products/chiroflow",
    Icon: BedDouble
  }
] as const

const conditionsMenu = [
  {
    title: "Common Conditions",
    description: "Explore foot conditions we treat with custom orthotics",
    href: "/conditions",
    Icon: Footprints
  },
  {
    title: "Body Biomechanics",
    description: "Understanding how feet affect whole-body health",
    href: "/conditions/biomechanics",
    Icon: Activity
  }
] as const

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { openContactModal } = useModal()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur-md transition-all duration-200 ${scrolled ? 'shadow-md' : ''}`}>
      {/* Top Contact Bar */}
      <div className="hidden md:block bg-primary/5 text-foreground border-b border-primary/10">
        <div className="container py-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm">
                286 Sandwich St S, Amherstburg
              </span>
              <a href="tel:5197365353" className="text-sm hover:text-primary transition-colors">
                (519) 736-5353
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container py-2">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-12 h-12 relative">
              <Image 
                src="/logo.png" 
                alt={SITE.name} 
                width={48} height={48}
                className="w-12 h-12 origin-center"
              />
            </div>
            <span className="font-semibold text-lg hidden sm:block">{SITE.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 text-sm text-foreground/80 hover:text-primary transition-colors">
              
                Products
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'products' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 w-64 pt-2"
                  >
                    <div className="bg-white rounded-lg shadow-lg border p-3 space-y-1">
                      {products.map((product) => (
                        <Link
                          key={product.title}
                          href={product.href}
                          className="flex items-center gap-3 p-2 hover:bg-primary/5 rounded-md transition-colors"
                        >
                          <div className="p-2 bg-primary/10 rounded-md">
                            <product.Icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-sm">{product.title}</div>
                            <div className="text-xs text-muted-foreground">{product.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Conditions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('conditions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 text-sm text-foreground/80 hover:text-primary transition-colors">
                
                Conditions
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'conditions' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 w-64 pt-2"
                  >
                    <div className="bg-white rounded-lg shadow-lg border p-3 space-y-1">
                      {conditionsMenu.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="flex items-center gap-3 p-2 hover:bg-primary/5 rounded-md transition-colors"
                        >
                          <div className="p-2 bg-primary/10 rounded-md">
                            <item.Icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-sm">{item.title}</div>
                            <div className="text-xs text-muted-foreground">{item.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Book Button */}
            <Button 
              variant="default"
              size="sm"
              onClick={openContactModal}
              className="shadow-sm hover:shadow-md transition-all"
            >
              Book Evaluation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-primary/5 rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100vh - 64px)' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden fixed inset-x-0 top-[64px]"
          >
            <div className="h-full overflow-y-auto mobile-menu-scroll">
              <div className="container py-2 space-y-2">
                {/* Main Navigation */}
                <div className="space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="p-1.5 bg-primary/10 rounded-md">
                        <item.icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm">{item.name}</span>
                    </Link>
                  ))}
                </div>
                
                {/* Mobile Products */}
                <div className="space-y-1">
                  <div className="font-medium text-xs text-muted-foreground px-2 py-1">Products</div>
                  {products.map((product) => (
                    <Link
                      key={product.title}
                      href={product.href}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="p-1.5 bg-primary/10 rounded-md">
                        <product.Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">{product.title}</div>
                        <div className="text-xs text-muted-foreground">{product.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Mobile Conditions */}
                <div className="space-y-1">
                  <div className="font-medium text-xs text-muted-foreground px-2 py-1">Conditions</div>
                  {conditionsMenu.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="p-1.5 bg-primary/10 rounded-md">
                        <item.Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">{item.title}</div>
                        <div className="text-xs text-muted-foreground">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Mobile Contact Info */}
                <div className="border-t mt-2 pt-3 space-y-2 pb-4">
                  <a 
                    href="tel:5197365353" 
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <div className="p-1.5 bg-primary/10 rounded-md">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm">(519) 736-5353</span>
                  </a>
                  <div className="flex items-center gap-2 p-2 rounded-lg">
                    <div className="p-1.5 bg-primary/10 rounded-md">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm">286 Sandwich St S, Amherstburg</span>
                  </div>
                  <Button 
                    className="w-full btn-hover flex items-center justify-center gap-2 mt-2" 
                    onClick={() => {
                      setIsMenuOpen(false)
                      openContactModal()
                    }}
                  >
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">Book Evaluation</span>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 