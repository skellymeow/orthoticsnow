'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { 
  Footprints, 
  Calendar, 
  ArrowRightCircle, 
  ShoppingBag, 
  Ruler, 
  User, 
  Shield, 
  Star,
  Sparkles
} from 'lucide-react'
import Image from 'next/image'
import { useModal } from '@/contexts/modal-context'

const orthotic_products = [
  {
    title: "DressFlex",
    image: "/images/orthotics/dressflex.jpg",
    description: "For slip-on or narrow cut dress shoes",
    details: {
      shoes: "Slip-on or narrow cut dress shoes",
      control: ["2mm semi-flexible", "3mm semi-rigid", "3.5mm rigid"],
      patientType: "Patients who require mild to moderate biomechanical control in their narrow dress shoes. Designed primarily for women.",
      cover: "3/4 Length – A 1mm grey naugahyde topcover, Sulcus or Full Length – A 1mm grey naugahyde topcover with a vinyl bottom cover.",
      additionalFeatures: null
    }
  },
  {
    title: "FashionFlex",
    image: "/images/orthotics/fashionflex.jpg",
    description: "For high heeled and dance shoes",
    details: {
      shoes: "High heeled shoes or dance shoes",
      control: ["2mm semi-flexible", "3mm semi-rigid", "3.5mm rigid"],
      patientType: "Patients who require mild to moderate biomechanical control in their high heel or dance shoes.",
      cover: "Full Length – A 1mm black naugahyde topcover with a bottom vinyl sandwich.",
      additionalFeatures: null
    }
  },
  {
    title: "SuperFlex",
    image: "/images/orthotics/superflex.jpg",
    description: "Versatile orthotics for various shoe types",
    details: {
      shoes: "A variety of shoes",
      control: ["2mm semi-flexible", "3mm semi-rigid", "3.5mm rigid"],
      patientType: "Those who require one pair of orthotics that can be worn in a variety of shoes. Offers patients moderate to maximum biomechanical control.",
      cover: "3/4 Length – A black 1mm naugahyde topcover. Sulcus or Full Length – A black 2mm starsuede topcover.",
      additionalFeatures: null
    }
  },
  {
    title: "CushionFlex",
    image: "/images/orthotics/cushionflex.jpg",
    description: "Superior shock absorption for casual wear",
    details: {
      shoes: "Casual lace up and walking shoes",
      control: ["1mm flexible"],
      patientType: "Mild to moderate biomechanical control with superior shock absorption. For feet that can afford to sacrifice some correction for increased comfort and cushioning (i.e. geriatric patients, arthritic patients).",
      cover: "Sulcus or Full Length – A blue 3mm starsuede topcover.",
      features: "Soft poron arch fill, rubber non-slip heel cap.",
      additionalFeatures: null
    }
  },
  {
    title: "SportFlex",
    image: "/images/orthotics/sportflex.jpg",
    description: "Maximum control for athletic activities",
    details: {
      shoes: "Athletic shoes",
      control: ["2mm semi-flexible", "3mm semi-rigid", "3.5mm rigid"],
      patientType: "Athletes and other active patients who require moderate to maximum biomechanical control. Designed to prevent sport related injuries by protecting against pressure and impact shock.",
      cover: "Sulcus and Full Length — A blue 3mm ETC™ topcover.",
      additionalFeatures: null
    }
  },
  {
    title: "RunFlex",
    image: "/images/orthotics/runflex.jpg",
    description: "Engineered for high performance runners",
    details: {
      shoes: "Running shoes",
      control: ["2mm semi-flexible", "3mm semi-rigid", "3.5mm rigid"],
      patientType: "Specially engineered for the high performance runner.",
      cover: "Full Length – A blue 3mm ETC™ topcover with a vinyl bottom cover.",
      features: "Extrinsic rearfoot flexpost (Lunalite™ post with 3mm Lunasoft™ foam heel lift). Designed to take pressure off the Achilles Tendon, promote greater ankle dorsiflexion and to increase shock absorption.",
      additionalFeatures: "Extrinsic rearfoot flexpost (Lunalite™ post with 3mm Lunasoft™ foam heel lift). Designed to take pressure off the Achilles Tendon, promote greater ankle dorsiflexion and to increase shock absorption."
    }
  },
  {
    title: "GolfFlex",
    image: "/images/orthotics/golfflex.jpg",
    description: "Specialized support for golfers",
    details: {
      shoes: "Golf shoes",
      control: ["2mm semi-flexible", "3mm semi-rigid", "3.5mm rigid"],
      patientType: "Golfers who require comfort and support while walking the golf course.",
      cover: "Sulcus and Full Length – A green 3mm ETC™ topcover.",
      additionalFeatures: null
    }
  }
] as const

export default function OrthoticsPage() {
  const { openContactModal } = useModal()
  
  return (
    <div className="flex-1">
      <section className="container py-12 md:py-24">
        <div className="max-w-[800px] mx-auto space-y-8">
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Custom Orthotics', href: '/products/orthotics' }
            ]} 
          />

          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter">
              Custom Orthotics
            </h1>
            <p className="text-muted-foreground text-lg">
              Professional prescription orthotics tailored to your specific needs
            </p>
          </div>

          <div className="grid gap-6">
            {orthotic_products.map((product) => (
              <Card key={product.title} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="grid lg:grid-cols-[1fr,1.5fr] gap-6">
                  {product.image && (
                    <div className="relative h-[250px] sm:h-[300px] lg:h-full bg-muted/30 rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority
                      />
                    </div>
                  )}
                  <div className="p-4 sm:p-6">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Footprints className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-xl sm:text-2xl text-primary">{product.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-muted/30 rounded-xl p-4 space-y-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Shield className="h-4 w-4 text-primary" />
                            <h4 className="font-medium text-primary">Standard Cover</h4>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">{product.details.cover}</p>
                        </div>
                        <div className="bg-muted/30 rounded-xl p-4 space-y-3">
                          <div className="flex items-center gap-2 mb-1">
                            <Ruler className="h-4 w-4 text-primary" />
                            <h4 className="font-medium text-primary">Control Options</h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {product.details.control.map((option) => (
                              <span key={option} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-full">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                {option}
                              </span>
                            ))}
                          </div>
                        </div>
                        {product.details.additionalFeatures && (
                          <div className="bg-muted/30 rounded-xl p-4 space-y-3 sm:col-span-2">
                            <div className="flex items-center gap-2 mb-1">
                              <Star className="h-4 w-4 text-primary" />
                              <h4 className="font-medium text-primary">Special Features</h4>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">{product.details.additionalFeatures}</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div 
            className="bg-primary/5 rounded-2xl p-8 hover:bg-primary/10 transition-colors group cursor-pointer"
            onClick={openContactModal}
          >
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary rounded-xl">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Get Your Custom Orthotics</h3>
                <p className="text-muted-foreground">Schedule a consultation with Dr. Rob</p>
              </div>
              <ArrowRightCircle className="ml-auto h-6 w-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

        </div>
      </section>
    </div>
  )
} 