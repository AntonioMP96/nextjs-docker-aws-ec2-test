import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import File from '@/models/files'


export async function GET() {
    connectDB()

    const files = await File.find()
    return NextResponse.json(files)
}


export async function POST(request: Request) {
    try {
        const data = await request.json()
        
        const newFile = new File(data)
        const savedFile = await newFile.save()
        console.log('NEW FILE:', savedFile)
        return NextResponse.json(savedFile)

    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(error.message, {
                status: 400
            })
        }
    }
}