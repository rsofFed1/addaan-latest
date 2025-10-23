"use client"

import { useParallax } from "@/hooks/use-parallax"
import type React from "react"


interface ParallaxElementProps {
  children: React.ReactNode
  speed?: number
  className?: string
  direction?: "up" | "down" | "left" | "right"
  scale?: boolean
}

export default function ParallaxElement({
  children,
  speed = 0.5,
  className = "",
  direction = "up",
  scale = false,
}: ParallaxElementProps) {
  const scrollY = useParallax()

  const getTransform = () => {
    const movement = scrollY * speed
    let transform = ""

    switch (direction) {
      case "up":
        transform = `translateY(${-movement}px)`
        break
      case "down":
        transform = `translateY(${movement}px)`
        break
      case "left":
        transform = `translateX(${-movement}px)`
        break
      case "right":
        transform = `translateX(${movement}px)`
        break
    }

    if (scale) {
      const scaleValue = 1 + movement * 0.0001
      transform += ` scale(${Math.max(0.8, Math.min(1.2, scaleValue))})`
    }

    return transform
  }

  return (
    <div
      className={className}
      style={{
        transform: getTransform(),
        willChange: "transform",
      }}
    >
      {children}
    </div>
  )
}
