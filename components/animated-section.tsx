"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scaleIn"
  delay?: number
  duration?: number
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "fadeIn",
  delay = 0,
  duration = 0.6,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getAnimationClass = () => {
    const baseClass = "transition-all ease-out"
    const durationClass = `duration-${Math.round(duration * 1000)}`

    if (!isVisible) {
      switch (animation) {
        case "slideUp":
          return `${baseClass} ${durationClass} opacity-0 translate-y-8`
        case "slideLeft":
          return `${baseClass} ${durationClass} opacity-0 translate-x-8`
        case "slideRight":
          return `${baseClass} ${durationClass} opacity-0 -translate-x-8`
        case "scaleIn":
          return `${baseClass} ${durationClass} opacity-0 scale-95`
        default:
          return `${baseClass} ${durationClass} opacity-0`
      }
    }

    return `${baseClass} ${durationClass} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}
