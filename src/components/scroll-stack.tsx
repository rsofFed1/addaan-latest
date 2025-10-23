"use client"

import { motion, MotionValue, useScroll, useTransform } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface ScrollStackProps {
  children: ReactNode[]
  className?: string
}

export default function ScrollStack({ children, className = "" }: ScrollStackProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {children.map((child, index) => {
        const start = index / children.length
        const end = (index + 1) / children.length

        return (
          <Card key={index} index={index} progress={scrollYProgress} range={[start, end]} totalCards={children.length}>
            {child}
          </Card>
        )
      })}
    </div>
  )
}

interface CardProps {
  children: ReactNode
  index: number
  progress: MotionValue<number>
  range: [number, number]
  totalCards: number
}

function Card({ children, index, progress, range, totalCards }: CardProps) {
  const isLast = index === totalCards - 1

  const scale = useTransform(progress, range, [1, isLast ? 1 : 0.95])
  const opacity = useTransform(progress, range, [1, isLast ? 1 : 1])

  return (
    <motion.div
      style={{
        scale,
        opacity,
        top: `${index * 20 + 100}px`,
      }}
      className="sticky w-full"
    >
      {children}
    </motion.div>

  )
}
