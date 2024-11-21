'use client'

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { motion } from "framer-motion"
import { Bone, Activity, Footprints, Heart, Brain, ShieldAlert, ArrowRight, Calendar, ArrowRightCircle } from 'lucide-react'
import Image from 'next/image'
import { useModal } from '@/contexts/modal-context'
import { CTAButton } from '@/components/cta-button'

const conditions = [
  {
    title: "Plantar Fasciitis",
    description: "Inflammation of the band of tissue connecting the heel bone to the toes, causing heel pain.",
    symptoms: ["Heel pain", "Arch pain", "Morning stiffness", "Pain after activity"],
    icon: Bone,
    image: "/images/conditions/plantar-fasciitis.png",
    imageAlt: "Plantar Fasciitis foot condition diagram showing inflammation of the plantar fascia",
    treatment: "Custom orthotics provide targeted support to the plantar fascia, helping to distribute pressure and reduce inflammation."
  },
  {
    title: "Metatarsalgia",
    description: "Pain in the ball of the foot that can be caused by various factors including high impact activities.",
    symptoms: ["Ball of foot pain", "Sharp or burning pain", "Numbness", "Increased pain when walking"],
    icon: Brain,
    image: "/images/conditions/metatarsalgia.png",
    imageAlt: "Metatarsalgia foot condition diagram showing pain in the ball of the foot",
    treatment: "Our orthotics provide targeted metatarsal support and cushioning."
  },
  {
    title: "Achilles Tendonitis",
    description: "Inflammation of the tendon connecting the calf muscles to the heel bone.",
    symptoms: ["Heel pain", "Stiffness", "Limited mobility", "Pain during walking"],
    icon: Activity,
    image: "/images/conditions/achilles-tendonitis.png",
    imageAlt: "Achilles Tendonitis foot condition diagram showing inflammation of the Achilles tendon",
    treatment: "Custom orthotics help correct gait mechanics and provide proper heel support to reduce tendon strain."
  },
  {
    title: "Iliotibial Band Syndrome",
    description: "Inflammation where the iliotibial band crosses the knee, often affecting runners and cyclists.",
    symptoms: ["Knee pain", "Hip pain", "Pain while running", "Outer knee inflammation"],
    icon: Activity,
    image: "/images/conditions/itband.png",
    imageAlt: "Iliotibial Band Syndrome foot condition diagram showing inflammation of the outer knee",
    treatment: "Our orthotics address biomechanical imbalances that contribute to IT band stress."
  },
  {
    title: "Morton's Neuroma",
    description: "Thickening of tissue around the nerves between the toes, causing pain and numbness.",
    symptoms: ["Ball of foot pain", "Numbness", "Tingling sensation", "'Pins and needles' feeling"],
    icon: Brain,
    image: "/images/conditions/mortons-neuroma.png",
    imageAlt: "Morton's Neuroma foot condition diagram showing thickening of tissue around the nerves between the toes",
    treatment: "Custom orthotics provide metatarsal support and help reduce nerve compression."
  },
  {
    title: "Runner's Knee",
    description: "Pain around the kneecap, common in runners and athletes.",
    symptoms: ["Front knee pain", "Pain when climbing stairs", "Grinding sensation", "Swelling"],
    icon: Activity,
    image: "/images/conditions/runners-knee.png",
    imageAlt: "Runner's Knee foot condition diagram showing pain around the kneecap",
    treatment: "Specialized orthotics with rear foot posting help correct running mechanics."
  },
  {
    title: "Sacroiliac Syndrome",
    description: "Painful inflammation of the sacroiliac joints affecting the lower back and buttocks.",
    symptoms: ["Lower back pain", "Buttock pain", "Thigh pain", "Pain while sitting"],
    icon: Activity,
    image: "/images/conditions/sacroiliac.png",
    imageAlt: "Sacroiliac Syndrome foot condition diagram showing painful inflammation of the sacroiliac joints",
    treatment: "Custom orthotics help stabilize the pelvis and improve overall body alignment."
  },
  {
    title: "Shin Splints",
    description: "Painful inflammation along the shin bone, common in runners and athletes.",
    symptoms: ["Shin pain", "Muscle soreness", "Tenderness", "Pain during exercise"],
    icon: Bone,
    image: "/images/conditions/shin-splints.png",
    imageAlt: "Shin Splints foot condition diagram showing painful inflammation along the shin bone",
    treatment: "Our orthotics provide proper arch support and shock absorption to reduce shin stress."
  }
] as const

export default function ConditionsPage() {
  return (
    <div className="flex-1">
      <section className="container py-12 md:py-24">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Conditions', href: '/conditions' }
            ]} 
          />

          <div className="text-center space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl"
            >
              Conditions We Treat
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg max-w-[600px] mx-auto"
            >
              Our custom orthotics can help with a variety of foot conditions and alignment issues. 
              Early intervention can prevent long-term complications.
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {conditions.map((condition, index) => (
              <motion.div
                key={condition.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={condition.image}
                      alt={condition.imageAlt}
                      fill
                      className="object-contain p-6"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardHeader className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <condition.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{condition.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base text-muted-foreground">
                      {condition.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Common Symptoms:</h4>
                        <ul className="space-y-2">
                          {condition.symptoms.map((symptom) => (
                            <li key={symptom} className="flex items-center text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Treatment Approach:</h4>
                        <p className="text-sm text-muted-foreground">{condition.treatment}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <CTAButton />
        </div>
      </section>
    </div>
  )
} 