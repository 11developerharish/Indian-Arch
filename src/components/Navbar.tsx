'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Building2 } from 'lucide-react'
import { usePathname } from 'next/navigation'

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Branding', href: '/branding' },
    { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 h-20 flex items-center ${scrolled ? 'bg-[#0E0E0E]/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="group flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#00D1FF] flex items-center justify-center rounded-lg group-hover:rotate-90 transition-transform duration-500">
                        <Building2 size={24} className="text-black" />
                    </div>
                    <span className="text-2xl font-black tracking-tighter">
                        INDIAN <span className="text-[#00D1FF]">ARCH.</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-[10px] font-black uppercase tracking-[0.4em] hover:text-[#00D1FF] transition-all ${pathname === link.href ? 'text-[#00D1FF]' : 'text-white/40'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="gradient-btn text-xs px-6 py-2.5"
                    >
                        Start Project
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 w-full bg-[#0E0E0E] border-b border-white/10 overflow-hidden md:hidden"
                    >
                        <div className="flex flex-col space-y-6 py-8 px-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-xl font-bold uppercase tracking-widest ${pathname === link.href ? 'gradient-text' : 'text-white/80'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="gradient-btn w-full py-4 text-center"
                            >
                                Start Project
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
