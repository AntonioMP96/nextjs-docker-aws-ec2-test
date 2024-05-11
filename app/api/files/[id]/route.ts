import { NextResponse } from "next/server";

export function GET(request, { params }) {
    console.log('REQUEST:', request)
    console.log('PARAMETROS RECIBIDOS:', params)
    return NextResponse.json({
        message: `Obteniendo tarea... ${params.id}`
    })
}