import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-[#0E0E0E] border-t border-white/5 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-3xl font-bold tracking-tighter mb-6 block">
                            INDIAN <span className="gradient-text">ARCH</span>
                        </Link>
                        <p className="text-white/50 max-w-sm text-lg leading-relaxed">
                            Leading the architectural revolution in India. Creating sustainable, luxury spaces that inspire the future.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-white/60 hover:text-[#00D1FF] transition-colors">About</Link></li>
                            <li><Link href="/projects" className="text-white/60 hover:text-[#00D1FF] transition-colors">Projects</Link></li>
                            <li><Link href="/services" className="text-white/60 hover:text-[#00D1FF] transition-colors">Services</Link></li>
                            <li><Link href="/branding" className="text-white/60 hover:text-[#00D1FF] transition-colors">Branding</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Contact</h4>
                        <ul className="space-y-4 text-white/60">
                            <li>No,1 INDIAN ARCH, INDIA</li>
                            <li>+91 9876543210</li>
                            <li>contact@indianarch.com</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/40 text-xs uppercase tracking-[0.2em]">
                    <p>© {new Date().getFullYear()} INDIAN ARCH – Designed by THEHARIDESIGNS</p>
                    <div className="mt-4 md:mt-0 flex space-x-6">
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
