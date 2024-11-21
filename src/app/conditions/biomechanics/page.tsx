'use client'

import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Activity, Brain, ArrowDown, Footprints, Calendar, ArrowRightCircle } from 'lucide-react'
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useModal } from '@/contexts/modal-context'
import { CTAButton } from '@/components/cta-button'

export default function BiomechanicsPage() {
  const { openContactModal } = useModal()
  
  return (
    <div className="flex-1">
      <section className="container py-12 md:py-24">
        <div className="max-w-[1000px] mx-auto space-y-12">
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Conditions', href: '/conditions' },
              { label: 'Body Biomechanics', href: '/conditions/biomechanics' }
            ]} 
          />

          <div className="grid gap-12 lg:grid-cols-[1fr,400px] items-start">
            <div className="space-y-12">
              <div className="space-y-6">
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl font-bold tracking-tighter"
                >
                  Understanding Body Biomechanics
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-muted-foreground"
                >
                  Your body functions as an interconnected kinetic chain, where each component influences the whole. 
                  Understanding this relationship is key to addressing pain and optimizing overall wellness.
                </motion.p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
                {[
                  {
                    icon: Activity,
                    title: "The Kinetic Chain",
                    description: "Your body operates as an integrated system, with each joint and muscle group working in harmony. When one element is misaligned, it affects the entire chain."
                  },
                  {
                    icon: Footprints,
                    title: "Foundation First",
                    description: "Your feet form the foundation of your body's support system. Proper foot alignment is crucial for optimal biomechanical function throughout the body."
                  },
                  {
                    icon: Brain,
                    title: "Total Body Wellness",
                    description: "By addressing foot imbalances through custom orthotics, we can positively influence your entire musculoskeletal system."
                  }
                ].map((feature) => (
                  <Card key={feature.title} className="p-6">
                    <CardHeader className="p-0">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <feature.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base text-foreground">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative h-[800px] rounded-2xl overflow-hidden shadow-xl lg:sticky lg:top-24"
            >
              <Image
                src="/images/biomechanics-diagram.jpg"
                alt="Body Biomechanics Diagram"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full bg-muted/50">
        <div className="container py-24">
          <div className="max-w-[1200px] mx-auto space-y-8">
            <div className="max-w-[800px] mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                The Chain Reaction
              </h2>
              <p className="text-lg text-muted-foreground">
                When your feet are properly supported and balanced, it creates a positive chain reaction throughout your body. 
                This alignment can help resolve issues that may seem unrelated to foot health, such as neck pain or lower back discomfort. 
                Our custom orthotics are designed to optimize this biomechanical relationship, promoting stability from the ground up.
              </p>
            </div>

            <CTAButton />
          </div>
        </div>
      </section>
    </div>
  )
} 