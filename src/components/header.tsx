'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, MapPin, Menu, X, Footprints, Activity, ChevronDown, Home, Info, HelpCircle, Box, Calendar, ShoppingBag, BedDouble } from 'lucide-react'
import { SITE, MOTION } from '@/lib/constants'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

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
        <div className="container py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center text-sm">
                <MapPin className="mr-2 h-4 w-4 text-primary" />
                286 Sandwich St S, Amherstburg
              </span>
              <a href="tel:5197365353" className="flex items-center text-sm hover:text-primary transition-colors">
                <Phone className="mr-2 h-4 w-4 text-primary" />
                (519) 736-5353
              </a>
            </div>
            <Button variant="default" size="sm" className="btn-hover">
              Book Evaluation
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt={SITE.name} width={40} height={40} className="w-10 h-10" />
            <span className="font-semibold text-xl">{SITE.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Products Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors">
                Products
                <ChevronDown className="h-4 w-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'products' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-64 pt-2"
                  >
                    <div className="bg-white rounded-lg shadow-lg border p-4 space-y-2">
                      {products.map((product) => (
                        <Link
                          key={product.title}
                          href={product.href}
                          className="block p-2 hover:bg-primary/5 rounded-md transition-colors"
                        >
                          <div className="font-medium">{product.title}</div>
                          <div className="text-sm text-muted-foreground">{product.description}</div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Conditions Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('conditions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors">
                Conditions
                <ChevronDown className="h-4 w-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'conditions' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-64 pt-2"
                  >
                    <div className="bg-white rounded-lg shadow-lg border p-4 space-y-2">
                      {conditionsMenu.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="block p-2 hover:bg-primary/5 rounded-md transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <item.Icon className="h-5 w-5 text-primary" />
                            <div>
                              <div className="font-medium">{item.title}</div>
                              <div className="text-sm text-muted-foreground">{item.description}</div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-primary/5 rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container py-4 space-y-6">
              {/* Main Navigation */}
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="p-2 bg-primary/10 rounded-md">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
              
              {/* Mobile Products */}
              <div className="space-y-2">
                <div className="font-medium text-sm text-muted-foreground px-3">Products</div>
                {products.map((product) => (
                  <Link
                    key={product.title}
                    href={product.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="p-2 bg-primary/10 rounded-md">
                      <product.Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{product.title}</div>
                      <div className="text-sm text-muted-foreground">{product.description}</div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Mobile Conditions */}
              <div className="space-y-2">
                <div className="font-medium text-sm text-muted-foreground px-3">Conditions</div>
                {conditionsMenu.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="p-2 bg-primary/10 rounded-md">
                      <item.Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <div className="border-t pt-6 space-y-4">
                <a 
                  href="tel:5197365353" 
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  <div className="p-2 bg-primary/10 rounded-md">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <span>(519) 736-5353</span>
                </a>
                <div className="flex items-center gap-3 p-3 rounded-lg">
                  <div className="p-2 bg-primary/10 rounded-md">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <span>286 Sandwich St S, Amherstburg</span>
                </div>
                <Button 
                  className="w-full btn-hover flex items-center justify-center gap-2" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Calendar className="h-5 w-5" />
                  Book Evaluation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 