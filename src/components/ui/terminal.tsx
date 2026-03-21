"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "motion/react"
import { cn } from "@/lib/utils"

// ─── Types ───────────────────────────────────────────────────────────────────

interface TerminalProps {
  children: React.ReactNode
  className?: string
}

interface AnimatedSpanProps {
  children: React.ReactNode
  delay?: number // delay in ms
  className?: string
}

interface TypingAnimationProps {
  children: string
  delay?: number // delay in ms
  duration?: number // ms per character
  className?: string
}

// ─── Terminal Wrapper ─────────────────────────────────────────────────────────

export function Terminal({ children, className }: TerminalProps) {
  return (
    <div
      className={cn(
        "w-full rounded-lg border border-foreground/10 dark:border-foreground/20 bg-background dark:bg-background overflow-hidden z-20",
        className
      )}
    >
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-foreground/10 bg-white/5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
      </div>

      {/* Content */}
      <pre className="p-4 text-xs font-mono leading-relaxed overflow-auto">
        <code className="flex flex-col gap-y-1">
          {children}
        </code>
      </pre>
    </div>
  )
}

// ─── AnimatedSpan ─────────────────────────────────────────────────────────────
// Fades + slides in after `delay` ms once in view

export function AnimatedSpan({ children, delay = 0, className }: AnimatedSpanProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    amount: 0.3,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -6 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.25, delay: delay / 1000 }}
      className={cn("text-xs font-mono tracking-tight", className)}
    >
      {children}
    </motion.div>
  )
}

// ─── TypingAnimation ──────────────────────────────────────────────────────────
// Types out text character by character after `delay` ms once in view

export function TypingAnimation({
  children,
  delay = 0,
  duration = 30,
  className,
}: TypingAnimationProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    amount: 0.3,
  })

  const [displayed, setDisplayed] = useState("")
  const [started, setStarted] = useState(false)

  // Start after delay once in view
  useEffect(() => {
    if (!isInView) return
    const t = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(t)
  }, [isInView, delay])

  // Type characters
  useEffect(() => {
    if (!started) return
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayed(children.substring(0, i))
      if (i >= children.length) clearInterval(interval)
    }, duration)
    return () => clearInterval(interval)
  }, [started, children, duration])

  return (
    <span
      ref={ref}
      className={cn("text-xs font-mono tracking-tight", className)}
    >
      {displayed}
      {displayed.length < children.length && (
        <span className="animate-pulse">▋</span>
      )}
    </span>
  )
}