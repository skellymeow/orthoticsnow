'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX, Zap, Moon, Bed, Thermometer, Waves, Brain, Heart, Activity, Calendar, ArrowRightCircle } from 'lucide-react'
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { useState, useRef } from 'react'

export default function ChiroflowPage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100
      setProgress(progress)
    }
  }

  return (
    <div className="flex-1">
      <section className="container py-12 md:py-24">
        <div className="max-w-[800px] mx-auto space-y-8">
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Chiroflow Pillow', href: '/products/chiroflow' }
            ]} 
          />

          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter">
              Chiroflow Pillow
            </h1>
            <p className="text-muted-foreground text-lg">
              The clinically proven waterbase pillow for optimal neck support and pain relief
            </p>
          </div>

          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg mb-8 group">
            <video
              ref={videoRef}
              src="/products/video.mp4"
              className="w-full h-full object-cover"
              poster="/images/chiroflow-poster.jpg"
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
            />
            
            {/* Custom Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full transition-transform group-hover:translate-y-0">
              {/* Progress Bar */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 bg-white/20 cursor-pointer"
                onClick={(e) => {
                  if (videoRef.current) {
                    const rect = e.currentTarget.getBoundingClientRect()
                    const x = e.clientX - rect.left
                    const percentage = x / rect.width
                    videoRef.current.currentTime = percentage * videoRef.current.duration
                  }
                }}
              >
                <div 
                  className="h-full bg-primary transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>
              
              {/* Controls */}
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={togglePlay}
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5" />
                  )}
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={toggleMute}
                >
                  {isMuted ? (
                    <VolumeX className="h-5 w-5" />
                  ) : (
                    <Volume2 className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </div>

            {/* Big Play Button (shown when video is not playing) */}
            {!isPlaying && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-primary/90 text-white hover:bg-primary hover:scale-110 transition-transform"
                onClick={togglePlay}
              >
                <Play className="h-8 w-8" />
              </Button>
            )}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Clinical Benefits</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-primary mt-1" />
                <p className="text-muted-foreground">Reduces morning pain intensity</p>
              </div>
              <div className="flex items-start gap-3">
                <Moon className="h-5 w-5 text-primary mt-1" />
                <p className="text-muted-foreground">Improves quality of sleep</p>
              </div>
              <div className="flex items-start gap-3">
                <Bed className="h-5 w-5 text-primary mt-1" />
                <p className="text-muted-foreground">Provides responsive support for any sleeping position</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Waterbase Technology</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Heart className="h-5 w-5 text-primary mt-1" />
                <p className="text-muted-foreground">
                  Super-soft, hypo-allergenic DuPont® polyester fiber top layer
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Thermometer className="h-5 w-5 text-primary mt-1" />
                <p className="text-muted-foreground">
                  Thermal insulator prevents heat loss during sleep
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Waves className="h-5 w-5 text-primary mt-1" />
                <p className="text-muted-foreground">
                  Responsive water pouch provides dynamic head and neck support
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Research Backed</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Clinical trials at Johns Hopkins School of Medicine found significant improvements in:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-primary" />
                  Pain relief and management
                </li>
                <li className="flex items-center gap-2">
                  <Moon className="h-4 w-4 text-primary" />
                  Sleep quality and duration
                </li>
                <li className="flex items-center gap-2">
                  <Brain className="h-4 w-4 text-primary" />
                  Overall neck support and comfort
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* New CTA Section */}
          <div className="bg-primary/5 rounded-2xl p-8 hover:bg-primary/10 transition-colors group cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary rounded-xl">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Get Your Pillow Now</h3>
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