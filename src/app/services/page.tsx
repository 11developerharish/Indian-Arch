'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import { servicesData } from '@/lib/data'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

function ServiceCard({ service, index }: { service: any, index: number }) {
    const [imgSrc, setImgSrc] = useState(service.image)
    const [isLoading, setIsLoading] = useState(true)

    // Robust Fallback handling
    const handleError = () => {
        setImgSrc('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80')
    }

    return (
        <div
            className="reveal group relative bg-[#131313] rounded-3xl overflow-hidden border border-white/10 card-lift"
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="aspect-[4/3] overflow-hidden relative">
                {isLoading && (
                    <div className="absolute inset-0 bg-white/5 animate-pulse z-10" />
                )}
                <Image
                    src={imgSrc}
                    alt={service.title}
                    fill
                    className={`object-cover transition-all duration-[2s] group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0 brightness-[0.7] group-hover:brightness-100 ${isLoading ? 'blur-lg' : 'blur-0'}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onLoadingComplete={() => setIsLoading(false)}
                    onError={handleError}
                    priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </div>

            <div className="p-12 relative z-20">
                <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-10 border border-white/10 group-hover:bg-[#00D1FF] group-hover:text-white group-hover:border-[#00D1FF] transition-all duration-700">
                    <service.icon size={32} />
                </div>
                <h3 className="text-4xl font-black mb-6 group-hover:text-[#00D1FF] transition-colors tracking-tight">
                    {service.title}
                </h3>
                <p className="text-white/40 leading-relaxed font-light mb-12 text-sm italic">
                    {service.description}
                </p>
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-[#FF4D00] group-hover:text-[#00D1FF] transition-colors">
                    View Portfolio <ArrowRight size={14} className="group-hover:translate-x-3 transition-transform duration-500" />
                </div>
            </div>
        </div>
    )
}

export default function Services() {
    useEffect(() => {
        const observerOptions = { threshold: 0.1 }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active')
                }
            })
        }, observerOptions)

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <PageTransition>
            <div className="pt-40 pb-40 bg-[#0E0E0E] relative z-10 selection:bg-[#00D1FF] selection:text-black">
                {/* Header Section */}
                <section className="container mx-auto px-6 mb-40 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[#00D1FF] uppercase tracking-[1rem] font-black text-[10px] mb-12 block"
                    >
                        Capabilities
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-7xl md:text-[14rem] font-black tracking-tighter leading-none mb-10"
                    >
                        Mastering <br /><span className="gradient-text-glow">Volumes.</span>
                    </motion.h1>
                    <div className="w-20 h-1 bg-[#FF4D00] mx-auto opacity-40" />
                </section>

                {/* Services Grid */}
                <section className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                        {servicesData.map((service, i) => (
                            <ServiceCard key={i} service={service} index={i} />
                        ))}
                    </div>
                </section>

                {/* divider */}
                <div className="container mx-auto px-6 py-60">
                    <div className="animated-divider opacity-30" />
                </div>

                {/* Quality Statement */}
                <section className="container mx-auto px-6 pb-40 reveal">
                    <div className="max-w-5xl mx-auto p-24 glass-card text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-grid opacity-10 group-hover:opacity-20 transition-opacity" />
                        <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter reveal">Rigorous <span className="gradient-text">Precision.</span></h2>
                        <p className="text-2xl text-white/40 leading-relaxed font-light mb-16 max-w-3xl mx-auto reveal delay-200">
                            Every project is underpinned by extensive BIM modeling and technical audits, ensuring that the luxury experience is matched by world-class engineering.
                        </p>
                        <div className="flex justify-center items-center gap-12 reveal delay-400">
                            <div className="h-px w-20 bg-white/10" />
                            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#00D1FF]">Certified Excellence</span>
                            <div className="h-px w-20 bg-white/10" />
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    )
}
