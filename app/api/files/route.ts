import { NextResponse } from "next/server"

export function GET() {
    return NextResponse.json({ message: "Hello World!" })
}


export function POST() {
    return NextResponse.json({
        message: "Creando tareas..."
    })
}