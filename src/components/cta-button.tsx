'use client'

import { Calendar, ArrowRightCircle } from 'lucide-react'
import { COMPONENTS } from '@/lib/constants'
import { useModal } from '@/contexts/modal-context'

interface CTAButtonProps {
  title?: string
  description?: string
}

export function CTAButton({ 
  title = "Get Your Custom Orthotics",
  description = "Schedule a consultation with Dr. Rob"
}: CTAButtonProps) {
  const { openContactModal } = useModal()
  const c = COMPONENTS.cta

  return (
    <div className={c.container} onClick={openContactModal}>
      <div className={c.content}>
        <div className={c.iconWrapper}>
          <Calendar className={c.icon} />
        </div>
        <div className={c.textWrapper}>
          <h3 className={c.title}>{title}</h3>
          <p className={c.description}>{description}</p>
        </div>
        <ArrowRightCircle className={c.arrow} />
      </div>
    </div>
  )
} 