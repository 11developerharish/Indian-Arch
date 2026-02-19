import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { name, email, subject, message } = body

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Incomplete data' }, { status: 400 })
        }

        const submission = await prisma.contactSubmission.create({
            data: { name, email, subject, message }
        })

        return NextResponse.json({ success: true, submission })
    } catch (error) {
        console.error('API Error:', error)
        return NextResponse.json({ error: 'Critical failure' }, { status: 500 })
    }
}
