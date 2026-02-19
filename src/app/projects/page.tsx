'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import { MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { projectsData } from '@/lib/data'

const categories = ['All', 'Residential', 'Commercial', 'Luxury Villas', 'Corporate']

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('All')
    const [filteredProjects, setFilteredProjects] = useState(projectsData)

    useEffect(() => {
        if (activeCategory === 'All') {
            setFilteredProjects(projectsData)
        } else {
            setFilteredProjects(projectsData.filter(p => p.category === activeCategory))
        }
    }, [activeCategory])

    return (
        <PageTransition>
            <div className="pt-32 pb-20">
                <section className="container mx-auto px-6 mb-24 text-center">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-[#00D1FF] uppercase tracking-[0.5em] font-black text-[10px] mb-6 block"
                    >
                        Masterpieces
                    </motion.span>
                    <div className="relative inline-block mb-12">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-9xl font-black tracking-tighter animated-underline in-view"
                        >
                            Signature <span className="gradient-text-glow">Projects</span>
                        </motion.h1>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="h-1 bg-gradient-to-r from-[#00D1FF] to-[#FF4D00] mt-4 rounded-full shadow-[0_0_20px_rgba(0,209,255,0.5)]"
                        />
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mt-12">
                        {categories.map((cat, i) => (
                            <motion.button
                                key={cat}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * i }}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 border ${activeCategory === cat
                                    ? 'bg-white text-black border-white shadow-[0_10px_30px_rgba(255,255,255,0.2)]'
                                    : 'bg-transparent text-white/30 border-white/10 hover:border-white/40 hover:text-white'
                                    } cursor-pointer`}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </div>
                </section>

                <section className="container mx-auto px-6">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 gap-16"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="group relative overflow-hidden rounded-[3rem] bg-[#131313] border border-white/5 aspect-[16/10] card-lift"
                                >
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-[1.2s] cubic-bezier(0.22, 1, 0.36, 1) group-hover:scale-110 brightness-[0.8] group-hover:brightness-[0.4]"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                                    <div className="absolute inset-0 p-12 flex flex-col justify-end">
                                        <div className="flex flex-col gap-6">
                                            <div className="flex items-center gap-3 translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-[0.1s] ease-out">
                                                <span className="text-[#00D1FF] uppercase tracking-[0.4em] font-black text-[10px] bg-white/5 backdrop-blur-xl px-5 py-2 rounded-full border border-white/10">
                                                    {project.category}
                                                </span>
                                            </div>

                                            <div className="overflow-hidden">
                                                <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-white translate-y-12 group-hover:translate-y-0 transition-transform duration-700 delay-[0.2s] ease-out leading-none mb-4">
                                                    {project.title}
                                                </h3>
                                            </div>

                                            <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-700 delay-[0.3s]">
                                                <div className="flex items-center gap-2 text-[10px] font-black text-[#FF4D00] uppercase tracking-widest">
                                                    <MapPin size={12} /> {project.location}
                                                </div>
                                                <Link
                                                    href={`/projects/${project.id}`}
                                                    className="h-16 w-16 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#FF4D00] hover:text-white transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
                                                >
                                                    <ArrowRight size={24} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute top-12 right-12 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                                        <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white uppercase text-[8px] font-black tracking-[0.3em] translate-x-12 group-hover:translate-x-0 transition-transform duration-700">
                                            View Details
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </section>

                <div className="section-glow mt-32 h-64 flex items-center justify-center overflow-hidden">
                    <div className="animated-divider max-w-4xl opacity-30" />
                </div>
            </div>
        </PageTransition>
    )
}
