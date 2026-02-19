'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import { Plus, Trash2, Loader2, Image as ImageIcon, Send } from 'lucide-react'

export default function Admin() {
    const [projects, setProjects] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [submitting, setSubmitting] = useState(false)

    const fetchProjects = () => {
        setLoading(true)
        fetch('/api/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    const handleAddProject = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSubmitting(true)
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())

        try {
            const res = await fetch('/api/projects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            if (res.ok) {
                fetchProjects()
                    ; (e.target as HTMLFormElement).reset()
            }
        } catch (err) {
            console.error(err)
        } finally {
            setSubmitting(false)
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm('Permanent deletion of structural record?')) return
        try {
            const res = await fetch(`/api/projects?id=${id}`, { method: 'DELETE' })
            if (res.ok) fetchProjects()
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <PageTransition>
            <div className="pt-32 pb-20 min-h-screen bg-[#0E0E0E]">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-16 border-b border-white/5 pb-10">
                        <div>
                            <span className="text-[#00D1FF] uppercase tracking-[0.4em] font-bold text-xs">Control Panel</span>
                            <h1 className="text-4xl md:text-6xl font-black mt-4 tracking-tighter">Project <span className="gradient-text">Vault</span></h1>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Add Form */}
                        <div className="lg:col-span-5">
                            <div className="p-10 bg-white/[0.02] border border-white/5 rounded-[3rem] sticky top-32">
                                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 tracking-tight">
                                    <Plus className="text-[#00D1FF]" /> Digitise New Artifact
                                </h2>
                                <form onSubmit={handleAddProject} className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest font-black text-white/30 ml-2">Title</label>
                                        <input name="title" required placeholder="Project Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#00D1FF] outline-none transition-all font-medium" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase tracking-widest font-black text-white/30 ml-2">Category</label>
                                            <input name="category" placeholder="Residential" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#00D1FF] outline-none transition-all font-medium" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase tracking-widest font-black text-white/30 ml-2">Location</label>
                                            <input name="location" placeholder="Mumbai" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#00D1FF] outline-none transition-all font-medium" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest font-black text-white/30 ml-2">Hero Image URL</label>
                                        <input name="imageUrl" required placeholder="https://..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#00D1FF] outline-none transition-all font-medium" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest font-black text-white/30 ml-2">Brief Summary</label>
                                        <textarea name="description" rows={3} placeholder="Technical overview..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#00D1FF] outline-none transition-all font-medium resize-none" />
                                    </div>
                                    <button disabled={submitting} type="submit" className="gradient-btn w-full py-5 rounded-2xl gap-3">
                                        {submitting ? 'Archiving...' : (
                                            <>
                                                Commit to Database <Send size={18} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* List */}
                        <div className="lg:col-span-7 space-y-6">
                            <h2 className="text-2xl font-bold mb-8 tracking-tight opacity-50 px-2">Managed Records</h2>
                            {loading ? (
                                <div className="flex justify-center py-20"><Loader2 className="animate-spin text-[#00D1FF]" /></div>
                            ) : projects.length === 0 ? (
                                <div className="text-center py-20 text-white/20 font-bold uppercase tracking-widest text-xs border border-dashed border-white/10 rounded-[3rem]">Vault is Empty</div>
                            ) : projects.map((project: any) => (
                                <div key={project.id} className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl flex items-center justify-between group hover:bg-white/[0.04] transition-all">
                                    <div className="flex items-center gap-6">
                                        <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white/5 border border-white/5">
                                            <img src={project.imageUrl} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl tracking-tight mb-1">{project.title}</h4>
                                            <p className="text-white/30 text-xs font-bold uppercase tracking-widest">{project.category} • {project.location}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => handleDelete(project.id)} className="w-12 h-12 rounded-2xl bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white flex items-center justify-center transition-all cursor-pointer">
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}
