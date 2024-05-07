import { NextResponse } from "next/server"
import User from '@/models/user'
import bcrypt from "bcryptjs"
import {connectDB} from '@/lib/mongodb'



export async function POST(request: Request) {

    const {name, email, password} = await request.json()
    console.log(name, email, password)

    if (!password || password.length < 6 ) return NextResponse.json({
        message: "La contraseña debe tener al menos 6 caracteres!"
    }, {
        status: 400
    })

    try {
        await connectDB()

        // -- checando existencia del usuario --
        const userFound = await User.findOne({email})
        if (userFound) return NextResponse.json({
            message: "El email ya existe!"
        }, {
            status: 409
        })

        // -- guardando nuevo usuario --
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({
            email,
            name,
            password: hashedPassword
        })
        const savedUser = await user.save()
        console.log('USUARIO GUARDADO:', savedUser)
        return NextResponse.json({
            '_id': savedUser._id,
            'name': savedUser.name,
            'email': savedUser.email
        })

    } catch (error) {
        console.log('ERROR:', error)
        if (error instanceof Error) {
            return NextResponse.json({
                message: error.message,
            }, {
                status: 400,
            })
        }
    }
}