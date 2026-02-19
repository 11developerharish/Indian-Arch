'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'

export default function GlobalBackground() {
    const { scrollYProgress } = useScroll()
    const shouldReduceMotion = useReducedMotion()
    const [isMobile, setIsMobile] = useState(false)
    const [mounted, setMounted] = useState(false)

    // Optimized parallax grid
    const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

    const particles = useMemo(() => {
        if (!mounted) return []
        const count = isMobile ? 3 : 8
        return [...Array(count)].map((_, i) => ({
            id: i,
            x: Math.random() * 80 - 40,
            y: Math.random() * 80 - 40,
            duration: 10 + Math.random() * 15,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            scale: 0.5 + Math.random(),
        }))
    }, [mounted, isMobile])

    if (!mounted) return null

    return (
        <div className="fixed inset-0 z-[-10] overflow-hidden pointer-events-none bg-[#0E0E0E]">
            {/* Ambient Base Gradient */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    background: `radial-gradient(circle at 20% 20%, rgba(0,209,255,0.1) 0%, transparent 50%),
                                 radial-gradient(circle at 80% 80%, rgba(255,77,0,0.08) 0%, transparent 50%)`
                }}
            />

            {/* Architectural Grid - GPU Accelerated Parallax */}
            <motion.div
                style={{
                    y: gridY,
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                                    linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                    backgroundSize: '120px 120px',
                    willChange: 'transform'
                }}
                className="absolute inset-[-20%] opacity-40"
            />

            {/* Floating Bokeh Particles */}
            <div className="absolute inset-0">
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        animate={{
                            x: [0, p.x, 0],
                            y: [0, p.y, 0],
                            opacity: [0.05, 0.15, 0.05]
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute w-64 h-64 bg-[#00D1FF]/10 blur-[90px] rounded-full"
                        style={{
                            left: p.left,
                            top: p.top,
                            scale: p.scale,
                            willChange: 'transform, opacity'
                        }}
                    />
                ))}
            </div>

            {/* Subtle Noise Texture */}
            <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        </div>
    )
}
