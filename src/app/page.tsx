'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import PageTransition from '@/components/PageTransition'
import Counter from '@/components/Counter'
import { ArrowRight, MapPin, Building2, Paintbrush, Ruler, Globe, HardHat, Leaf, Plus } from 'lucide-react'
import Link from 'next/link'
import { projectsData } from '@/lib/data'

export default function Home() {
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active')
                    const underlines = entry.target.querySelectorAll('.animated-underline')
                    underlines.forEach(u => u.classList.add('in-view'))
                }
            })
        }, observerOptions)

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    return (
        <PageTransition>
            <div className="bg-[#0E0E0E] relative selection:bg-[#00D1FF] selection:text-black">
                {/* Hero Section */}
                <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                    <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1487958444663-51547966f16f?auto=format&fit=crop&w=1920&q=80"
                            alt="Luxury Architecture"
                            className="w-full h-full object-cover brightness-[0.4] animate-[ken-burns_20s_infinite_alternate_ease-in-out]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0E0E0E]" />
                    </motion.div>

                    <motion.div
                        style={{ opacity }}
                        className="relative z-10 text-center container mx-auto px-6 pt-32 max-w-7xl"
                    >
                        <motion.span
                            initial={{ opacity: 0, letterSpacing: "1.5rem" }}
                            animate={{ opacity: 0.8, letterSpacing: "1.2rem" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="text-[#00D1FF] uppercase font-black text-[10px] mb-12 block"
                        >
                            Drafting Tomorrow
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                            className="text-8xl md:text-[15rem] font-black tracking-tighter leading-[0.85] mb-16"
                        >
                            INDIAN <span className="gradient-text-glow">ARCH.</span>
                        </motion.h1>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '240px' }}
                            transition={{ delay: 1, duration: 2 }}
                            className="h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-20"
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="flex flex-col md:flex-row items-center justify-center gap-10"
                        >
                            <Link href="/projects" className="gradient-btn group">
                                Explore Portfolio <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/about" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-white transition-all py-5 px-10 border border-white/10 rounded-full hover:bg-white/5 backdrop-blur-sm">
                                Our Studio
                            </Link>
                        </motion.div>
                    </motion.div>

                    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-8 opacity-40">
                        <div className="w-px h-24 bg-gradient-to-b from-[#00D1FF] to-transparent animate-pulse" />
                        <span className="text-[8px] uppercase tracking-[0.6em] font-black rotate-180 [writing-mode:vertical-lr]">Scroll</span>
                    </div>
                </section>

                <section className="reveal relative py-40 overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl">
                            <span className="text-[#FF4D00] uppercase tracking-[0.6em] font-black text-[10px] mb-8 block">Legacy in Architecture</span>
                            <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-12 reveal">
                                Engineering <br /><span className="gradient-text animated-underline">Excellence.</span>
                            </h2>
                            <p className="text-xl text-white/50 leading-relaxed font-light reveal delay-200">
                                Over two decades of pioneering structural integrity and aesthetic innovation across the Indian subcontinent.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Counter Section */}
                <section className="bg-grid py-60 relative overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
                            {[
                                { label: 'Projects', value: 150, suffix: '+' },
                                { label: 'Experts', value: 80, suffix: '+' },
                                { label: 'Awards', value: 24, suffix: '' },
                                { label: 'Years', value: 20, suffix: '+' }
                            ].map((stat, i) => (
                                <div key={stat.label} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                                    <div className="p-12 glass-card card-lift group text-center lg:text-left">
                                        <div className="text-5xl md:text-7xl font-black mb-4 gradient-text-glow leading-none">
                                            <Counter value={stat.value} suffix={stat.suffix} />
                                        </div>
                                        <div className="text-white/20 uppercase tracking-[0.4em] text-[8px] font-black">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Projects with Parallax Scroll Effect */}
                <section className="py-60 container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-16 mb-40 reveal">
                        <div className="max-w-3xl">
                            <span className="text-[#00D1FF] uppercase tracking-[0.6em] font-black text-[10px] mb-8 block">Portfolio Highlights</span>
                            <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] reveal">Signature <br /><span className="gradient-text gradient-glow">Volumes.</span></h2>
                        </div>
                        <Link href="/projects" className="gradient-btn reveal delay-300">
                            View All Projects
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                        {projectsData.slice(0, 2).map((project, i) => (
                            <div key={project.id} className="reveal" style={{ transitionDelay: `${i * 200}ms` }}>
                                <Link href={`/projects/${project.id}`} className="group block relative aspect-[16/11] overflow-hidden rounded-[2.5rem] bg-[#131313] border border-white/5 card-lift">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110 grayscale brightness-[0.6] group-hover:grayscale-0 group-hover:brightness-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                                    <div className="absolute inset-0 p-16 flex flex-col justify-end">
                                        <span className="text-[#00D1FF] uppercase tracking-[0.6em] font-black text-[10px] mb-6 block translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                                            {project.category}
                                        </span>
                                        <h3 className="text-5xl md:text-6xl font-black tracking-tighter group-hover:text-white transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-60 bg-[#0C0C0C] relative reveal overflow-hidden">
                    <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
                            <div className="reveal">
                                <h2 className="text-6xl md:text-[10rem] font-black tracking-tighter mb-16 leading-[0.8] reveal">Bionic <br /><span className="text-white/10 uppercase">Integration.</span></h2>
                                <p className="text-xl text-white/40 leading-relaxed font-light mb-20 max-w-lg reveal delay-200">
                                    Our multidisciplinary approach ensures that every structural element serves both function and form. We engineer the impossible.
                                </p>
                                <Link href="/services" className="gradient-btn reveal delay-400">
                                    Our Services
                                </Link>
                            </div>

                            <div className="grid grid-cols-2 gap-8 relative reveal">
                                {[
                                    { icon: Building2, label: "Structural" },
                                    { icon: Paintbrush, label: "Interiors" },
                                    { icon: Ruler, label: "Precision" },
                                    { icon: Leaf, label: "Sustainable" }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -15, scale: 1.05 }}
                                        className="p-16 glass-card flex flex-col items-center justify-center text-center group relative z-10 reveal"
                                        style={{ transitionDelay: `${i * 100}ms` }}
                                    >
                                        <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:bg-[#00D1FF] group-hover:text-white transition-all duration-500 border border-white/10">
                                            <item.icon size={36} />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 group-hover:text-white transition-colors">
                                            {item.label}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PageTransition>
    )
}
