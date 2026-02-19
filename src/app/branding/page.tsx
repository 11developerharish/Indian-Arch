'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import PageTransition from '@/components/PageTransition'
import { Palette, Type, Box, Building2, MapPin, Layers, ShieldCheck, Zap } from 'lucide-react'

export default function Branding() {
    const philosophyRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: philosophyRef,
        offset: ["start end", "end start"]
    })
    const philosophyY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

    return (
        <PageTransition>
            <div className="bg-[#0E0E0E] overflow-hidden">
                {/* SECTION 1: Cinematic Hero */}
                <section className="relative h-screen flex items-center justify-center overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 z-0"
                    >
                        {/* Blueprint Background Layer with Slow Zoom */}
                        <motion.img
                            initial={{ scale: 1.1, opacity: 0.1 }}
                            animate={{ scale: 1, opacity: 0.15 }}
                            transition={{ duration: 15, ease: "easeOut" }}
                            src="https://images.unsplash.com/photo-1503387762-592dea58f21f?auto=format&fit=crop&w=1920&q=80"
                            alt="Blueprint"
                            className="w-full h-full object-cover grayscale"
                        />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,209,255,0.08)_0%,transparent_70%)]" />
                        <div className="absolute inset-0 bg-grid opacity-10" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0E0E0E]" />
                    </motion.div>

                    <div className="container mx-auto px-6 text-center relative z-10">
                        <motion.span
                            initial={{ opacity: 0, letterSpacing: '0em' }}
                            animate={{ opacity: 1, letterSpacing: '1.2em' }}
                            transition={{ duration: 1.5 }}
                            className="text-[#00D1FF] uppercase font-black text-[10px] mb-12 block ml-[1.2em]"
                        >
                            The Identity
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 50, filter: 'blur(20px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-6xl md:text-[11rem] font-black tracking-tighter leading-none mb-12 text-white"
                        >
                            Designing Identity <br />
                            <span className="gradient-text-glow">Beyond Structure.</span>
                        </motion.h1>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '200px' }}
                            transition={{ delay: 0.5, duration: 1.5 }}
                            className="h-1 bg-white/10 mx-auto"
                        />
                    </div>
                </section>

                {/* SECTION 2: Brand Philosophy (Split Layout + Parallax) */}
                <section ref={philosophyRef} className="relative py-60 border-y border-white/5 overflow-hidden">
                    {/* Background Texture */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
                            className="w-full h-full object-cover grayscale opacity-5 brightness-50"
                            alt="Philosophy Backdrop"
                        />
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-[#FF4D00] uppercase tracking-[0.5em] font-black text-[10px] mb-8 block">Our DNA</span>
                                <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 leading-none">
                                    Blueprint <br /><span className="text-white/20">of the Soul.</span>
                                </h2>
                                <p className="text-xl text-white/50 leading-relaxed font-light mb-12">
                                    At Indian Arch, we believe every line drafted is a promise made to the human experience. Our identity is anchored in structural honesty and bionic elegance.
                                </p>
                                <div className="flex gap-12">
                                    <ShieldCheck className="text-[#00D1FF]" size={40} />
                                    <Zap className="text-[#FF4D00]" size={40} />
                                </div>
                            </motion.div>

                            <div className="relative aspect-square rounded-[4rem] overflow-hidden">
                                <motion.img
                                    style={{ y: philosophyY }}
                                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80"
                                    className="w-full h-[120%] object-cover grayscale brightness-[0.4]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent" />
                                <div className="absolute bottom-12 left-12 p-8 glass-card border-none">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 block">Mathematical Precision</span>
                                    <div className="text-4xl font-black text-white">1.618</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: The Architectural Identity System (COMPLETE REDESIGN) */}
                <section className="py-60 bg-[#0E0E0E] relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-40">
                            <motion.span
                                initial={{ opacity: 0, letterSpacing: '0.2em' }}
                                whileInView={{ opacity: 1, letterSpacing: '0.8em' }}
                                viewport={{ once: true }}
                                className="text-[#00D1FF] uppercase font-black text-[10px] mb-6 block"
                            >
                                Vision & Precision
                            </motion.span>
                            <h2 className="text-5xl md:text-9xl font-black tracking-tighter uppercase leading-none">
                                The Architectural <br /><span className="gradient-text-glow">Identity System.</span>
                            </h2>
                        </div>

                        {/* Split Panel */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-stretch mb-40">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative h-[600px] rounded-[4rem] overflow-hidden group"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1487958444663-51547966f16f?auto=format&fit=crop&w=1200&q=80"
                                    className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-110 transition-transform duration-[2s]"
                                    alt="Identity Visual"
                                />
                                <div className="absolute inset-0 bg-grid opacity-20 group-hover:opacity-40 transition-opacity" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                                <div className="absolute bottom-16 left-16">
                                    <div className="text-sm font-black tracking-widest text-[#00D1FF] uppercase mb-2">Technical Core</div>
                                    <div className="text-xs text-white/40 max-w-xs">Modular design frameworks integrated into physical environments.</div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="glass-card rounded-[4rem] p-16 flex flex-col justify-center border-none"
                            >
                                <h3 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase">Brand Philosophy</h3>
                                <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light mb-12 italic">
                                    "Our identity is not a layer applied to architecture; it is the structural integrity of the brand itself. We design systems that breathe with the spaces they inhabit."
                                </p>
                                <div className="space-y-6">
                                    {['Structural Honesty', 'Digital Craftsmanship', 'Bionic Elegance'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-6 group cursor-pointer">
                                            <div className="w-12 h-px bg-[#FF4D00] group-hover:w-24 transition-all duration-500" />
                                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 group-hover:text-white transition-colors">0{i + 1} — {item}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Interactive Premium Blocks */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* BLOCK 1: Color DNA */}
                            <motion.div
                                whileHover={{ y: -20 }}
                                className="p-16 glass-card group relative overflow-hidden min-h-[500px] flex flex-col justify-between"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D1FF]/10 blur-[120px]" />
                                <div>
                                    <Palette className="text-[#00D1FF] mb-12" size={48} />
                                    <h4 className="text-4xl font-black mb-12 uppercase tracking-tighter">Color DNA</h4>
                                </div>
                                <div className="space-y-8">
                                    {[
                                        { name: 'Void', hex: '#0E0E0E', w: '100%' },
                                        { name: 'Sky', hex: '#00D1FF', w: '70%' },
                                        { name: 'Core', hex: '#FF4D00', w: '40%' }
                                    ].map((c, i) => (
                                        <div key={i} className="space-y-3">
                                            <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-white/30">
                                                <span>{c.name}</span>
                                                <span>{c.hex}</span>
                                            </div>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: c.w }}
                                                transition={{ duration: 1.5, delay: i * 0.2 }}
                                                className="h-2 rounded-full group-hover:h-6 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                                                style={{ background: `linear-gradient(90deg, ${c.hex}, transparent)` }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* BLOCK 2: Typographic Authority */}
                            <motion.div
                                whileHover={{ y: -20 }}
                                className="p-16 glass-card group relative overflow-hidden min-h-[500px] flex flex-col justify-between"
                            >
                                <motion.div
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                    className="absolute -right-20 -top-20 opacity-5 pointer-events-none"
                                >
                                    <span className="text-[25rem] font-black leading-none">A</span>
                                </motion.div>
                                <div>
                                    <Type className="text-[#FF4D00] mb-12" size={48} />
                                    <h4 className="text-4xl font-black mb-12 uppercase tracking-tighter">Typographic Authority</h4>
                                </div>
                                <div className="relative">
                                    <p className="text-6xl font-black tracking-tighter mb-6 gradient-text">Inter</p>
                                    <p className="text-xs text-white/30 leading-loose tracking-[0.2em] uppercase">Built for high-transparency technical documentation and architectural clarity.</p>
                                </div>
                            </motion.div>

                            {/* BLOCK 3: Structural Geometry */}
                            <motion.div
                                whileHover={{ y: -20 }}
                                className="p-16 glass-card group relative overflow-hidden min-h-[500px] flex flex-col justify-between items-center text-center"
                            >
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
                                <div>
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                                        className="mb-12 inline-block"
                                    >
                                        <Layers className="text-[#00D1FF]" size={80} />
                                    </motion.div>
                                    <h4 className="text-4xl font-black mb-12 uppercase tracking-tighter">Structural Geometry</h4>
                                </div>
                                <div className="max-w-[200px]">
                                    <div className="w-full aspect-square border border-white/10 rounded-full flex items-center justify-center relative mb-8">
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                                            transition={{ duration: 4, repeat: Infinity }}
                                            className="absolute inset-0 border border-[#00D1FF]/30 rounded-full"
                                        />
                                        <span className="text-xs font-black tracking-widest text-white/20 uppercase">Phi Ratio</span>
                                    </div>
                                    <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-black">Mathematical perfection in every line.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: Brand Applications (Mockups) */}
                <section className="container mx-auto px-6 py-60">
                    <div className="flex justify-between items-end mb-32">
                        <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-none">Manifesto <br /><span className="text-white/10 uppercase">Actualized.</span></h2>
                        <span className="text-[#FF4D00] uppercase tracking-[0.3em] font-black text-[10px] mb-4">Premium Artifacts</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="group relative h-[600px] rounded-[4rem] overflow-hidden border border-white/5"
                        >
                            <img src="https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                            <div className="absolute bottom-16 left-16">
                                <h4 className="text-4xl font-black mb-4">Corporate Signage</h4>
                                <p className="text-white/40 uppercase tracking-widest text-[10px]">3D Extruded Steel Concepts</p>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 gap-12">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="group relative h-[288px] rounded-[3rem] overflow-hidden border border-white/5"
                            >
                                <img src="https://images.unsplash.com/photo-1586075010620-22520f7ca9f0?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-[1.5s]" />
                                <div className="absolute bottom-10 left-10">
                                    <h4 className="text-2xl font-black">Tactile Experience</h4>
                                    <p className="text-white/30 uppercase tracking-widest text-[8px]">Business Artifacts</p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="group relative h-[288px] rounded-[3rem] overflow-hidden border border-white/5"
                            >
                                <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80" className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-[1.5s]" />
                                <div className="absolute bottom-10 left-10">
                                    <h4 className="text-2xl font-black">Spatial Branding</h4>
                                    <p className="text-white/30 uppercase tracking-widest text-[8px]">Headquarters Integration</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* SECTION 5: Client Partnerships (Fix Empty) */}
                <section className="relative bg-[#0E0E0E] py-60 border-t border-white/5 overflow-hidden">
                    {/* Background Imagery */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
                            className="w-full h-full object-cover grayscale opacity-5 brightness-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0E] via-transparent to-[#0E0E0E]" />
                    </div>

                    <div className="container mx-auto px-6 mb-24 relative z-10">
                        <span className="text-[#00D1FF] uppercase tracking-[1em] font-black text-[10px] block opacity-40 mb-4">Endorsements</span>
                        <h2 className="text-4xl font-black tracking-widest opacity-20 uppercase">Structural Partnerships.</h2>
                    </div>

                    <div className="slider-container relative z-10">
                        {/* Faded edges */}
                        <div className="absolute inset-y-0 left-0 w-60 bg-gradient-to-r from-[#0E0E0E] via-[#0E0E0E]/80 to-transparent z-10" />
                        <div className="absolute inset-y-0 right-0 w-60 bg-gradient-to-l from-[#0E0E0E] via-[#0E0E0E]/80 to-transparent z-10" />

                        <div className="slider-track flex gap-40">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8].map((i, index) => (
                                <div key={index} className="flex-shrink-0 flex items-center gap-6 group grayscale hover:grayscale-0 opacity-15 hover:opacity-100 transition-all duration-700 cursor-pointer">
                                    <div className="w-20 h-20 glass-card flex items-center justify-center group-hover:border-[#FF4D00] group-hover:scale-110 transition-transform">
                                        <Building2 className="text-white/40 group-hover:text-[#FF4D00] transition-colors" size={32} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-3xl font-black tracking-tighter text-white">VORTEX_{i}</span>
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF4D00]">Global Client</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Visual Accent */}
                <div className="py-20 flex justify-center">
                    <div className="animated-divider max-w-2xl opacity-10" />
                </div>
            </div>
        </PageTransition>
    )
}
