'use client'

import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import { useParams, useRouter } from 'next/navigation'
import { projectsData } from '@/lib/data'
import { MapPin, Calendar, ArrowLeft, ArrowRight, Share2, Globe } from 'lucide-react'
import Link from 'next/link'

export default function ProjectDetails() {
    const { id } = useParams()
    const router = useRouter()

    const project = projectsData.find(p => p.id === id)
    const nextProject = projectsData.find(p => parseInt(p.id) === (parseInt(id as string) % projectsData.length) + 1) || projectsData[0]

    if (!project) return <div>Project not found</div>

    return (
        <PageTransition>
            <div className="bg-[#0E0E0E] min-h-screen">
                {/* Full Width Hero */}
                <section className="relative h-[90vh] w-full overflow-hidden">
                    <motion.div
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0"
                    >
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover brightness-[0.6]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent" />
                    </motion.div>

                    <div className="absolute inset-0 container mx-auto px-6 flex flex-col justify-end pb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 uppercase tracking-[0.3em] text-[10px] font-black group"
                            >
                                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
                            </Link>
                            <span className="text-[#00D1FF] uppercase tracking-[0.5em] font-black text-xs mb-4 block">
                                {project.category} — {project.year}
                            </span>
                            <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-8">
                                {project.title}
                            </h1>
                            <div className="flex flex-wrap gap-8">
                                <div className="flex items-center gap-3 text-white/40 uppercase tracking-widest text-[10px] font-bold">
                                    <MapPin size={16} className="text-[#FF4D00]" /> {project.location}
                                </div>
                                <div className="flex items-center gap-3 text-white/40 uppercase tracking-widest text-[10px] font-bold">
                                    <Calendar size={16} className="text-[#FF4D00]" /> Finished {project.year}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="container mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-black mb-8 uppercase tracking-widest text-white/20">Overview</h2>
                            <p className="text-2xl text-white/60 leading-relaxed font-light">
                                {project.content}
                            </p>
                        </motion.div>

                        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
                            {project.gallery.map((img, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="rounded-[2rem] overflow-hidden aspect-[4/5] border border-white/5"
                                >
                                    <img src={img} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#131313] p-12 rounded-[3rem] border border-white/5 sticky top-32"
                        >
                            <h3 className="text-xl font-black mb-10 uppercase tracking-widest gradient-text">Key Highlights</h3>
                            <ul className="space-y-8">
                                {project.highlights.map((item, i) => (
                                    <li key={i} className="flex gap-6 group">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF4D00] mt-2 group-hover:scale-150 transition-transform" />
                                        <p className="text-lg text-white/50 leading-tight group-hover:text-white transition-colors">{item}</p>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-16 pt-16 border-t border-white/5 flex gap-6">
                                <button className="flex-1 gradient-btn group">
                                    Enquire Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                                    <Share2 size={20} className="text-white" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Next Project Navigation */}
                <section className="border-t border-white/5 py-40 bg-white/[0.02]">
                    <div className="container mx-auto px-6 text-center">
                        <Link href={`/projects/${nextProject.id}`} className="group inline-block">
                            <span className="text-[#FF4D00] uppercase tracking-[0.5em] font-black text-[10px] mb-8 block">Next Masterpiece</span>
                            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 group-hover:gradient-text-glow transition-all duration-500">
                                {nextProject.title}
                            </h2>
                            <div className="flex justify-center">
                                <div className="h-20 w-20 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                                    <ArrowRight size={32} />
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
            </div>
        </PageTransition>
    )
}
