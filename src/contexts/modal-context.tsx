'use client'

import { createContext, useContext, useState } from 'react'
import { ContactModal } from '@/components/contact-modal'

type ModalContextType = {
  openContactModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isContactOpen, setIsContactOpen] = useState(false)

  const openContactModal = () => setIsContactOpen(true)

  return (
    <ModalContext.Provider value={{ openContactModal }}>
      {children}
      <ContactModal 
        open={isContactOpen} 
        onOpenChange={setIsContactOpen} 
      />
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
} 