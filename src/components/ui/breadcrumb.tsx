import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbProps {
  items: {
    label: string
    href: string
  }[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
          <Link 
            href={item.href}
            className={`hover:text-primary transition-colors ${
              index === items.length - 1 ? 'text-foreground font-medium' : ''
            }`}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  )
} 