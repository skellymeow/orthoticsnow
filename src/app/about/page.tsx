'use client'

import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { SITE } from "@/lib/constants"
import { GraduationCap, BookOpen, Award, HeartPulse, Users, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { motion } from "framer-motion"

export default function About() {
  return (
    <div className="flex-1">
      <section className="container py-12 md:py-24">
        <div className="max-w-[1000px] mx-auto space-y-12">
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' }
            ]} 
          />
          
          {/* Hero Section */}
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-4xl font-bold tracking-tighter">
                Dr. Robert Neposlan
                <span className="block text-xl font-normal text-muted-foreground mt-2">
                  M.B.A., D.C.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Known warmly as Dr. Rob to his patients, he has been serving the Amherstburg community 
                since 1997 with a patient-first approach to chiropractic care and orthotic solutions.
              </p>
              <Button size="lg" className="group">
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/rob.png"
                alt="Dr. Robert Neposlan"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          {/* Education & Experience */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold tracking-tighter">Education & Experience</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <CardHeader className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Professional Education</CardTitle>
                  </div>
                  <CardDescription className="text-base text-foreground">
                    Graduated from Logan Chiropractic College in St. Louis, MO in 1996 with a Doctor of 
                    Chiropractic (D.C.) degree. Established Family Chiropractic Wellness Centre in 
                    Amherstburg the following year.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="p-6">
                <CardHeader className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Continuous Learning</CardTitle>
                  </div>
                  <CardDescription className="text-base text-foreground">
                    Committed to ongoing education, studying with leading professionals in nutrition, 
                    energy-based healing, and advanced chiropractic techniques.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Partnership Section */}
          <div className="space-y-6 bg-muted/30 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold tracking-tighter">Partnership with Foot Levelers</h2>
            <p className="text-lg text-muted-foreground">
              In September 2020, we proudly partnered with Foot Levelers, a company with an impressive 
              history dating back to 1952. Their commitment to research and innovation in custom orthotics 
              aligns perfectly with our mission to provide the best care possible.
            </p>
            <div className="grid gap-6 md:grid-cols-3 mt-8">
              {[
                {
                  icon: Award,
                  title: "Patented Design",
                  description: "Unique 3-arch design addressing all aspects of foot biomechanics"
                },
                {
                  icon: HeartPulse,
                  title: "Advanced Technology",
                  description: "3D body view imaging with laser-precise measurements of 16 foot zones"
                },
                {
                  icon: Users,
                  title: "Proven Results",
                  description: "Hundreds of published studies demonstrating whole-body benefits"
                }
              ].map((feature) => (
                <Card key={feature.title} className="p-6">
                  <CardHeader className="p-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-base">{feature.title}</CardTitle>
                    </div>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Quote Section */}
          <motion.blockquote 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-lg italic text-muted-foreground border-l-4 border-primary pl-6 py-4"
          >
            "Through my years in practice I have seen and experienced many benefits and many great products 
            when it comes to orthotics. I have manufactured them myself and partnered with really great 
            companies but there is no better technology, no other company that has dedicated so much effort, 
            resources and research than Foot Levelers."
            <footer className="mt-4 text-base font-medium text-foreground">
              — Dr. Rob Neposlan
            </footer>
          </motion.blockquote>
        </div>
      </section>
    </div>
  )
} 