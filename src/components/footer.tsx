import { Phone, MapPin, Mail, Facebook, Instagram, Twitter } from 'lucide-react'
import { SITE } from '@/lib/constants'
import { businessSchema } from '@/lib/schema'

export function Footer() {
  return (
    <footer className="bg-muted mt-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-4">Orthotics NOW</h3>
            <p className="text-sm text-muted-foreground">
              Expert custom orthotics for foot, knee, hip & back pain. Same-day service available.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                285 Sandwich St S, Amherstburg, ON N9V 2A7
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                (519) 736-5353
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                info@orthoticsnow.com
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5" />
              <Instagram className="h-5 w-5" />
              <Twitter className="h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 