'use client'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { SITE } from "@/lib/constants"
import { motion } from "framer-motion"
import { ArrowRight, Activity, Footprints, LineChart, Star, Scan, MapPin, Phone, Calendar, ArrowRightCircle, ClipboardList, FileText, Send, Zap, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { MOTION } from "@/lib/constants"
import { useModal } from '@/contexts/modal-context'

const processSteps = [
  {
    step: "STEP 1",
    title: "EVALUATION",
    description: "Our specialist will evaluate your gait biomechanics and perform comprehensive testing to determine orthotic needs.",
    icon: ClipboardList,
  },
  {
    step: "STEP 2",
    title: "DIGITAL SCAN",
    icon: Scan,
    description: "Using advanced 3D scanning technology, we capture precise measurements of your feet for optimal orthotic design."
  },
  {
    step: "STEP 3",
    title: "DIGITAL REPORT",
    icon: FileText,
    description: "The personalized digital scanner provides a digital, state-of-the-art coloured photo comparison of your feet in relation to a healthy foot structure."
  },
  {
    step: "STEP 4",
    title: "IMMEDIATE ELECTRONIC TRANSFER",
    icon: Send,
    description: "Your complete evaluation is electronically transferred for immediate custom crafting of the perfect orthotic specific to your needs."
  },
  {
    step: "STEP 5",
    title: "CUSTOM FIT",
    icon: Zap,
    description: "Your precision-crafted orthotics are fitted and adjusted to ensure optimal comfort and biomechanical support."
  }
] as const

const officeHours = [
  { day: "Monday", morning: "7:00 - 12:00", afternoon: "2:00 - 6:00" },
  { day: "Tuesday", morning: "7:00 - 12:00", afternoon: "—" },
  { day: "Wednesday", morning: "—", afternoon: "2:00 - 6:00" },
  { day: "Thursday", morning: "7:00 - 12:00", afternoon: "2:00 - 6:00" },
  { day: "Friday", morning: "Closed", afternoon: "Closed" },
  { day: "Saturday", morning: "8:00 - 11:00", afternoon: "—" },
  { day: "Sunday", morning: "Closed", afternoon: "Closed" }
] as const

const stepImages = {
  "EVALUATION": "/images/process/1.png",
  "DIGITAL SCAN": "/images/process/2.png",
  "DIGITAL REPORT": "/images/process/3.png",
  "IMMEDIATE ELECTRONIC TRANSFER": "/images/process/4.png",
  "CUSTOM FIT": "/images/process/5.png"
} as const

const stepAlts = {
  "EVALUATION": "Orthotic specialist performing comprehensive foot evaluation",
  "DIGITAL SCAN": "3D scanning technology capturing precise foot measurements",
  "DIGITAL REPORT": "Digital comparison report showing foot structure analysis",
  "IMMEDIATE ELECTRONIC TRANSFER": "Electronic transfer of custom orthotic specifications",
  "CUSTOM FIT": "Custom orthotic fitting and adjustment process"
} as const

export default function Home() {
  const { openContactModal } = useModal()
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % processSteps.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <motion.section
        initial="initial"
        animate="animate"
        variants={MOTION.page}
        className="relative overflow-hidden bg-muted/30"
      >
        <div className="container py-16 md:py-32">
          <motion.div 
            variants={MOTION.stagger.container}
            className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center"
          >
            <motion.div variants={MOTION.stagger.item} className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Custom Orthotics for Better Living
              </h1>
              <p className="text-lg text-muted-foreground max-w-[600px]">
                Experience relief from foot, knee, hip, and back pain with our precision-crafted orthotics. 
                Same-day service available in Amherstburg.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="btn-hover"
                  onClick={openContactModal}
                >
                  Book Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="btn-hover">
                  Learn More
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                {[
                  { number: "25+", label: "Years Experience" },
                  { number: "10k+", label: "Happy Patients" },
                  { number: "100%", label: "Satisfaction" }
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              variants={MOTION.stagger.item}
              whileHover={MOTION.hover}
              className="relative h-[400px] lg:h-[600px]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Card className="w-full h-full overflow-hidden card-hover">
                  <div className="grid grid-cols-1 h-full">
                    <div className="relative">
                      <Image
                        src={stepImages[processSteps[currentSlide].title]}
                        alt={stepAlts[processSteps[currentSlide].title]}
                        fill
                        className="object-contain p-4"
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="space-y-2">
                          <div className="text-primary font-semibold tracking-wide">
                            STEP {currentSlide + 1}
                          </div>
                          <h3 className="text-2xl font-bold tracking-tight">
                            {processSteps[currentSlide].title}
                          </h3>
                          <p className="text-zinc-200 text-sm leading-relaxed">
                            {processSteps[currentSlide].description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <section className="w-full bg-white">
        <div className="container py-16 md:py-24">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose Orthotics NOW?
            </h2>
            <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
              We combine decades of experience with cutting-edge technology to provide 
              personalized orthotic solutions that work.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Same Day Service",
                description: "Get your custom orthotics in just one visit with our advanced on-site manufacturing",
                icon: Zap
              },
              {
                title: "3D Scanning",
                description: "Precise measurements using state-of-the-art digital scanning technology",
                icon: Scan
              },
              {
                title: "Expert Care",
                description: "Personalized treatment from Dr. Rob, with over 25 years of experience",
                icon: CheckCircle2
              }
            ].map((feature) => (
              <Card key={feature.title} className="p-6 card-hover">
                <CardHeader className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full bg-muted/30"
      >
        <div className="container py-16 md:py-24">
          {/* Removing the redundant cards section */}
        </div>
      </motion.section>

      <section id="testimonials" className="w-full">
        <div className="container py-24">
          <div className="max-w-[1200px] mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Trusted by Thousands
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Here's what our clients have to say about their experience
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3 md:gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Marathon Runner",
                  content: "The custom orthotics have completely transformed my running experience. No more foot pain!"
                },
                {
                  name: "Michael Chen",
                  role: "Office Professional",
                  content: "Finally found relief from my plantar fasciitis. The team's expertise is unmatched."
                },
                {
                  name: "Emily Davis",
                  role: "Yoga Instructor",
                  content: "These orthotics provide the perfect balance of support and flexibility for my practice."
                }
              ].map((testimonial) => (
                <Card key={testimonial.name} className="relative card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <CardDescription className="text-foreground">
                      "{testimonial.content}"
                    </CardDescription>
                    <div className="mt-4">
                      <CardTitle className="text-sm">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="w-full bg-muted/30">
        <div className="container py-16 md:py-24">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Visit Our Office
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-[800px] mx-auto">
              Conveniently located in downtown Amherstburg, we're here to serve you with expert orthotic care
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-xl h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1475.0998646693293!2d-83.10868162442168!3d42.10074153711271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b3c9baacba821%3A0x3a9e60d565d475aa!2sOrthotics%20NOW!5e0!3m2!1sen!2sca!4v1709901234567!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-4">Office Hours</h2>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Day</TableHead>
                      <TableHead>Morning</TableHead>
                      <TableHead>Afternoon</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {officeHours.map((hours) => (
                      <TableRow key={hours.day}>
                        <TableCell className="font-medium">{hours.day}</TableCell>
                        <TableCell>{hours.morning}</TableCell>
                        <TableCell>{hours.afternoon}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">286 Sandwich St S, Amherstburg, ON N9V 2A7</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">(519) 736-5353</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-16 md:py-24">
        <div 
          className="bg-primary/5 rounded-2xl p-6 md:p-8 hover:bg-primary/10 transition-colors group cursor-pointer"
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
    </>
  )
}
