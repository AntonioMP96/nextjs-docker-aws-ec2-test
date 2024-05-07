import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
// -- --
import { connectDB } from "@/lib/mongodb"
import User from '@/models/user'
import bcrypt from "bcryptjs"


 
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        GitHub, 
        Google,
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {label: "Email", type: "email", placeholder: "Email"},
                password: {label: "Contraseña", type: "password", placeholder: "Contraseña"},
            },
            authorize: async (credentials) => {
                await connectDB()
                const userFound = await User.findOne({ email: credentials?.email}).select("+password")
                if (!userFound) throw new Error("Credenciales invalidas")
                console.log('USUARIO ENCONTRADO...', userFound)
                
                const passwordMatch = await bcrypt.compare(credentials!.password as string, userFound!.password)
                if (!passwordMatch) throw new Error('Credenciales invalidas')

                return userFound
            },
        }),
    ],
    callbacks: {
        jwt({token, user}) {
            if (user) token.user = user
            console.log('JWT:', token)
            return token
        },
        session({session, token}) {
            session.user = token.user as any
            console.log('SESSION:', session)
            return session
        }
    },
    pages: {
        signIn: '/login',
        signOut: '/perfil'
    }
})