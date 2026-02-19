'use client'

import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import { ArrowRight, History, Target, Users, Zap, Shield, Trophy } from 'lucide-react'
import Counter from '@/components/Counter'

const timeline = [
    { year: '2004', event: 'Founded in Delhi with a team of three visionary architects.' },
    { year: '2010', event: 'Expanded to luxury residential sector, winning first national award.' },
    { year: '2016', event: 'pioneered "Bionic Integration" in corporate skyscraper design.' },
    { year: '2024', event: 'Lead the industry in carbon-neutral luxury skyscrapers.' }
]

const values = [
    { icon: Zap, title: "Precision", desc: "Mathematical accuracy in every millimeter of our blueprints." },
    { icon: Shield, title: "Integrity", desc: "Upholding structural honesty and sustainable ethics." },
    { icon: Trophy, title: "Excellence", desc: "Winning isn't a goal; it's a byproduct of our rigorous process." }
]

export default function About() {
    return (
        <PageTransition>
            <div className="bg-[#0E0E0E] overflow-hidden">
                {/* Cinematic Hero */}
                <section className="relative h-screen flex items-center justify-center overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 z-0"
                    >
                        <motion.img
                            initial={{ scale: 1.15 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 12, ease: "easeOut" }}
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
                            className="w-full h-full object-cover grayscale brightness-[0.2]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0E0E0E]" />
                    </motion.div>

                    <div className="relative z-10 text-center container mx-auto px-6">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-[#00D1FF] uppercase tracking-[0.8em] font-black text-[10px] mb-8 block"
                        >
                            Since 2004
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-6xl md:text-[12rem] font-black tracking-tighter leading-none mb-12"
                        >
                            Defining <span className="gradient-text-glow">Structure.</span>
                        </motion.h1>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '200px' }}
                            transition={{ delay: 0.5, duration: 1.5 }}
                            className="h-1 bg-white/20 mx-auto"
                        />
                    </div>

                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
                </section>

                {/* Company Story */}
                <section className="container mx-auto px-6 py-40">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12">
                                A Legacy of <span className="text-[#FF4D00]">Calculated Inspiration.</span>
                            </h2>
                            <p className="text-xl text-white/40 leading-relaxed font-light mb-12">
                                For over two decades, Indian Arch has stood at the intersection of cultural heritage and futuristic engineering. We don't just build spaces; we engineer experiences that resonate with the human spirit and structural logic.
                            </p>
                            <div className="flex gap-16">
                                <div>
                                    <div className="text-5xl font-black text-white mb-2"><Counter value={20} suffix="+" /></div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-white/20 text-center">Countries</div>
                                </div>
                                <div>
                                    <div className="text-5xl font-black text-white mb-2"><Counter value={99} suffix="%" /></div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-white/20 text-center">Satisfaction</div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 gap-12">
                            {values.map((val, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-10 bg-[#131313] rounded-[2.5rem] border border-white/5 card-lift"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                                        <val.icon className="text-[#00D1FF]" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{val.title}</h3>
                                    <p className="text-white/40 leading-relaxed text-sm">{val.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Animated Timeline */}
                <section className="bg-white/[0.02] py-40 section-glow">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-24">
                            <span className="text-[#00D1FF] uppercase tracking-[0.5em] font-black text-[10px] mb-4 block">The Journey</span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-5xl md:text-8xl font-bold tracking-tighter animated-underline in-view"
                            >
                                Milestones.
                            </motion.h2>
                        </div>

                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 hidden lg:block" />

                            <div className="space-y-24">
                                {timeline.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-32 ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
                                    >
                                        <div className="flex-1 text-center lg:text-right">
                                            {i % 2 === 0 && (
                                                <>
                                                    <span className="text-6xl font-black text-white/10 mb-4 block">{item.year}</span>
                                                    <p className="text-xl text-white/50">{item.event}</p>
                                                </>
                                            )}
                                        </div>
                                        <div className="w-6 h-6 rounded-full bg-[#00D1FF] border-4 border-[#0E0E0E] relative z-10 shadow-[0_0_20px_rgba(0,209,255,0.5)]" />
                                        <div className="flex-1 text-center lg:text-left">
                                            {i % 2 !== 0 && (
                                                <>
                                                    <span className="text-6xl font-black text-white/10 mb-4 block">{item.year}</span>
                                                    <p className="text-xl text-white/50">{item.event}</p>
                                                </>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision/Mission Graphics */}
                <section className="py-40 container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-[#131313] to-black p-20 rounded-[4rem] border border-white/5 relative overflow-hidden"
                        >
                            <Target className="absolute -top-10 -right-10 w-64 h-64 text-white/5 -rotate-12" />
                            <h3 className="text-4xl font-black mb-8">The <span className="gradient-text">Vision.</span></h3>
                            <p className="text-lg text-white/40 leading-relaxed mb-12">
                                To redefine the global architectural landscape through the lens of Indian bionic integration and structural sustainability.
                            </p>
                            <div className="h-px w-full bg-white/10" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-gradient-to-br from-[#131313] to-black p-20 rounded-[4rem] border border-white/5 relative overflow-hidden"
                        >
                            <Zap className="absolute -top-10 -right-10 w-64 h-64 text-white/5 rotate-12" />
                            <h3 className="text-4xl font-black mb-8">The <span className="text-[#FF4D00]">Mission.</span></h3>
                            <p className="text-lg text-white/40 leading-relaxed mb-12">
                                Delivering luxury environments that maximize structural efficiency while providing unparalleled aesthetic depth and identity.
                            </p>
                            <div className="h-px w-full bg-white/10" />
                        </motion.div>
                    </div>
                </section>

                {/* Visual Accent */}
                <div className="h-64 flex items-center justify-center">
                    <div className="animated-divider opacity-20" />
                </div>
            </div>
        </PageTransition>
    )
}
