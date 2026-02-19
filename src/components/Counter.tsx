'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface CounterProps {
    value: number
    suffix?: string
    duration?: number
    className?: string
}

export default function Counter({ value, suffix = "", duration = 2500, className = "" }: CounterProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })
    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
        if (isInView) {
            let start = 0
            const end = value
            const startTime = performance.now()

            const animate = (currentTime: number) => {
                const elapsed = currentTime - startTime
                const progress = Math.min(elapsed / duration, 1)

                // Easing function: easeOutExpo (premium feel)
                const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)

                const currentCount = Math.floor(easeProgress * end)
                setDisplayValue(currentCount)

                if (progress < 1) {
                    requestAnimationFrame(animate)
                }
            }

            requestAnimationFrame(animate)
        }
    }, [isInView, value, duration])

    return (
        <span ref={ref} className={`glow-counter ${className}`}>
            {displayValue}{suffix}
        </span>
    )
}
