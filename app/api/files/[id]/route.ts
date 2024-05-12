import { NextResponse } from "next/server"
import { connectDB } from '@/lib/mongodb'
import File from '@/models/files'


export async function GET(request: Request, { params }) {
    try {

        connectDB()
        const fileFound = await File.findById({
            _id: params.id
        })
    
        if (!fileFound) {
            console.log('Archivo no encontrado')
            return NextResponse.json({
                message: 'File not found',
            }, {
                status: 404
            })
        }
    
        return NextResponse.json( fileFound )
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(error.message, {status: 400})
        }
    }
}


export async function PUT(request: Request, { params }) {
    try {
        const data = await request.json()
        const fileUpdated = await File.findByIdAndUpdate(params.id, data, {
            new: true
        })
        return NextResponse.json(fileUpdated)

    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(error.message, {
                status: 400
            })
        }
    }
}


export async function DELETE(request: Request, { params }) {
    try {
        const fileDeleted = await File.findByIdAndDelete(params.id)

        if (!fileDeleted) {
            return NextResponse.json({
                message: "File not found"
            }, {
                status: 404
            })
        }
        return NextResponse.json(fileDeleted)

    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(error.message, {status:400})
        }
    }
}