'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import { Send, Phone, MapPin, Mail, Globe } from 'lucide-react'

export default function Contact() {
    const [status, setStatus] = useState<'' | 'sending' | 'success' | 'error'>('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus('sending')

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            if (res.ok) {
                setStatus('success')
                    ; (e.target as HTMLFormElement).reset()
            } else {
                setStatus('error')
            }
        } catch (err) {
            setStatus('error')
        }

        setTimeout(() => setStatus(''), 5000)
    }

    return (
        <PageTransition>
            <div className="pt-32 pb-20">
                <section className="container mx-auto px-6 mb-24">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-[#00D1FF] uppercase tracking-[0.4em] font-bold text-xs"
                    >
                        Connect
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-bold tracking-tighter mt-6 mb-12"
                    >
                        Start Your <br /> <span className="gradient-text">Legacy</span>.
                    </motion.h1>
                </section>

                <section className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* Contact Info */}
                    <div className="lg:col-span-5 space-y-16">
                        <div className="space-y-10">
                            <div className="flex items-start gap-8 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0 group-hover:border-[#00D1FF]/50 transition-colors">
                                    <MapPin className="text-[#00D1FF]" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white/30 font-bold uppercase tracking-[0.2em] text-[10px] mb-3">Headquarters</h4>
                                    <p className="text-2xl text-white font-bold tracking-tight leading-tight">No,1 INDIAN ARCH,<br /> INDIA</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-8 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0 group-hover:border-[#00D1FF]/50 transition-colors">
                                    <Phone className="text-[#00D1FF]" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white/30 font-bold uppercase tracking-[0.2em] text-[10px] mb-3">Call Support</h4>
                                    <p className="text-2xl text-white font-bold tracking-tight leading-tight">+91 9876543210</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-8 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0 group-hover:border-[#00D1FF]/50 transition-colors">
                                    <Mail className="text-[#00D1FF]" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white/30 font-bold uppercase tracking-[0.2em] text-[10px] mb-3">Email Inquiry</h4>
                                    <p className="text-2xl text-white font-bold tracking-tight leading-tight">info@indianarch.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem]">
                            <h3 className="text-2xl font-bold mb-4 tracking-tight">Project Inquiry?</h3>
                            <p className="text-white/40 leading-relaxed font-medium">
                                We accept a limited number of projects annually to ensure extreme precision. Submit your details for a structural feasibility consult.
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 p-10 md:p-14 bg-white/[0.02] border border-white/5 rounded-[3rem]"
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase tracking-[0.3em] font-black text-white/30">Name</label>
                                    <input
                                        name="name"
                                        required
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:border-[#00D1FF] outline-none transition-all duration-300 font-medium"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] uppercase tracking-[0.3em] font-black text-white/30">Email Address</label>
                                    <input
                                        name="email"
                                        required
                                        type="email"
                                        placeholder="name@company.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:border-[#00D1FF] outline-none transition-all duration-300 font-medium"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] uppercase tracking-[0.3em] font-black text-white/30">Project Interest</label>
                                <input
                                    name="subject"
                                    type="text"
                                    placeholder="e.g. Luxury Residential"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:border-[#00D1FF] outline-none transition-all duration-300 font-medium"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] uppercase tracking-[0.3em] font-black text-white/30">Detailed Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="Describe your vision..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:border-[#00D1FF] outline-none transition-all duration-300 font-medium resize-none text-lg"
                                />
                            </div>

                            <button
                                disabled={status === 'sending'}
                                type="submit"
                                className="gradient-btn w-full py-6 text-xl rounded-[1.5rem]"
                            >
                                {status === 'sending' ? 'Transmitting...' : (
                                    <>
                                        Send Message <Send size={20} />
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#00D1FF] text-center font-bold uppercase tracking-widest text-xs">Submission Received.</motion.p>
                            )}
                            {status === 'error' && (
                                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-center font-bold uppercase tracking-widest text-xs">Transmission Failed.</motion.p>
                            )}
                        </form>
                    </motion.div>
                </section>
            </div>
        </PageTransition>
    )
}
