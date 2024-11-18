'use client'

import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FileQuestion, Calendar, Settings, ArrowRight, Footprints, Clock, ArrowRightCircle } from 'lucide-react'

const faqCategories = [
  {
    title: "About Custom Orthotics",
    icon: "FileQuestion",
    items: [
      {
        question: "What is a custom orthotic?",
        answer: "A custom orthotic is a device designed to align the foot and ankle into the most anatomically efficient position. They look like insoles, but are biomechanical medical appliances that are custom made to correct your specific foot imbalance. Custom orthotics work on your feet much like glasses work on your eyes – they reduce stress and strain on your body by bringing your feet back into proper alignment. The plastic body of the custom orthotic helps to re-align the foot by redirecting and reducing certain motion that takes place during the gait cycle. Custom orthotics fit into your shoes as comfortably as an insole – and they have the advantage of having been made from precise imprints of your feet."
      },
      {
        question: "How can orthotics help me?",
        answer: "Orthotics support your foot and ankle during weight-bearing movements like walking, running, skiing and more. These custom insoles align the joints within the foot providing stability and comfort. This allows for more normalized weight distribution throughout your body, significantly reducing your pain and discomfort and helping to prevent injuries like shin splints. In addition, when one area of our body is affected, a chain reaction occurs throughout the body. So, if the foundation of your body is stabilized through correcting imbalances in your feet, you will promote overall body stability."
      },
      {
        question: "Who would benefit from a custom foot orthotics/exam?",
        answer: "In my years of practice I have found many people who don't realize that they are a candidate for orthotics. They may have biomechanical faults or their arches may have \"fallen\". This is an unfortunate result of aging for many of us where we gain weight and lose muscle tone. In many cases these people have not yet experienced any of the pain syndromes associated with \"bad feet\". It's really just a question of time. Our exam process can reveal problems before they start.\n\nOnce there is enough joint irritation and some cases degeneration the pain signals will begin. Conversely there are some people who already suffer from foot, shin, knee, hip or back pain. These people are obvious candidates for an orthotic/exam. Either way, our process will help determine what your unique needs are and a solution will be recommended."
      }
    ]
  },
  {
    title: "Appointment & Process",
    icon: "Calendar",
    items: [
      {
        question: "What do I need to bring for an appointment?",
        answer: "For your appointment, please bring:\n- Shoes you plan to use (both preferred and required footwear)\n- Insurance plan details if applicable\n- Doctor's prescription slip if required by your insurance\n- Any questions you may have\n\nDr. Rob will evaluate your shoes and feet, perform a digital scan, and determine the best orthotic solution for your needs."
      },
      {
        question: "How long does it take to receive my orthotics?",
        answer: "Depending on your exam results, we offer two manufacturing options:\n1. Onsite manufacturing: Complete within 1 business day\n2. Off-site manufacturing through The Orthotic Group: Requires additional processing time, but ensures fast and efficient turnaround"
      },
      {
        question: "What is the one visit custom orthotic we offer?",
        answer: "Our one-visit custom orthotic is a directly formed foot supportive device that positions your feet in proper biomechanical alignment. This method is used by numerous professional sports teams, Olympic training centers, and top athletes. The same advanced technology is available right here at Orthotics Now in Amherstburg."
      }
    ]
  },
  {
    title: "Usage & Care",
    icon: "Settings",
    items: [
      {
        question: "When should I wear my custom orthotics?",
        answer: "For maximum benefit, wear your custom orthotics as much as possible. If your daily activities require different types of footwear, consider getting multiple pairs designed for specific activities (e.g., work shoes vs. gym shoes)."
      },
      {
        question: "Why do my new custom orthotics feel uncomfortable?",
        answer: "Initial discomfort is normal as your feet adjust to proper alignment. Like starting a new exercise program, your feet need time to adapt. We recommend wearing them in two-hour intervals, gradually increasing wear time over two weeks."
      },
      {
        question: "Will my muscles in my feet get weaker wearing a custom orthotic?",
        answer: "No, custom orthotics won't reduce muscle tone. Instead, they help position your foot to use the right muscles at the right time, improving efficiency and reducing fatigue."
      },
      {
        question: "Do my custom insoles require special care?",
        answer: "Yes, basic maintenance includes:\n- Remove from shoes nightly\n- Allow to dry completely if wet\n- Clean with damp cloth as needed\n- Ensure thorough drying after cleaning"
      }
    ]
  },
  {
    title: "Shoes & Fitting",
    icon: "Footprints",
    items: [
      {
        question: "Do Custom Foot Orthotics require special shoes?",
        answer: "Since the orthotic insole supports the foot and the shoe supports the foot and orthotic, you will find that choosing a better quality shoe will improve the effectiveness of your custom insole. This custom foot orthotic can be made to fit easily in most shoes; however, those with removable insoles that have good support work best."
      },
      {
        question: "Should I take my custom orthotics along when I buy new shoes?",
        answer: "Yes – if the shoes are appropriate for that style of insole. Custom orthotics are most effective when used in shoes with good construction, fit, and condition. By bringing along your custom orthotics it can help you choose the proper shoe for you – if a shoe can't accommodate an orthotic which has been custom made for your foot, then that shoe is not the proper size or shoe for you."
      }
    ]
  },
  {
    title: "Long-term Care",
    icon: "Clock",
    items: [
      {
        question: "How long can I expect my custom orthotics to be effective?",
        answer: "Like wearing eyeglasses, your specific prescription for orthotics may change to reflect the way your body changes over time. For this same reason, we recommend an annual re-exam to confirm that your custom insoles are still providing the best support for you."
      }
    ]
  }
] as const

export default function FAQPage() {
  return (
    <div className="flex-1">
      <section className="container py-12 md:py-24">
        <div className="max-w-[1000px] mx-auto space-y-12">
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'FAQ', href: '/faq' }
            ]} 
          />
          
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {category.icon === 'FileQuestion' && <FileQuestion className="h-5 w-5 text-primary" />}
                      {category.icon === 'Calendar' && <Calendar className="h-5 w-5 text-primary" />}
                      {category.icon === 'Settings' && <Settings className="h-5 w-5 text-primary" />}
                      {category.icon === 'Footprints' && <Footprints className="h-5 w-5 text-primary" />}
                      {category.icon === 'Clock' && <Clock className="h-5 w-5 text-primary" />}
                    </div>
                    <h2 className="text-xl font-semibold">{category.title}</h2>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((item, index) => (
                      <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                        <AccordionTrigger className="text-left">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {item.answer.split('\n').map((paragraph, i) => (
                            <p key={i} className="mb-4 last:mb-0">{paragraph}</p>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <div className="bg-primary/5 rounded-2xl p-8 hover:bg-primary/10 transition-colors group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary rounded-xl">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Book Your Evaluation</h3>
                  <p className="text-muted-foreground">Schedule a consultation with Dr. Rob</p>
                </div>
                <ArrowRightCircle className="ml-auto h-6 w-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 