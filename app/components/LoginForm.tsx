'use client'
import { signIn } from "next-auth/react"
import { FormEvent, useState } from 'react'
import { IoEyeOutline, IoEyeOffOutline} from 'react-icons/io5'



export const LoginForm = () => {
    const [error, setError] = useState('')
    const [showPass, setShowPass] = useState(false)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        setLoading(true)
        console.log('Entrando en handle submit de login...')
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
            
        const signinRes = await signIn("credentials", {
            email: formData.get('email'),
            password: formData.get("password"),
            redirect: false,
            // redirectTo: '/'
        })

        console.log('RESPUESTA DEL SIGNIN:', signinRes, signinRes?.error)
        setLoading(false)
        
        if (signinRes?.error) { 
            console.log('SI HAY ERROR')
            return setError('Credenciales invalidas')
        } else if ( signinRes?.ok && !signinRes.error ) {
            console.log('SET SUCCESS...')
            setSuccess(true)
        }
    }

    return (

        <form 
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col space-y-5">
            {success && <span className='bg-emerald-500 p-2 text-center text-white rounded-lg antialiased'>
            Ínicio de sesión exitoso, redirigiendo...
            </span>}
            {error && !success && <span className='bg-red-500 p-2 text-center text-white rounded-lg antialiased'>
            {error}
            </span>}
            
            <input 
            disabled={loading}
            name='email'
            type="email" 
            title="Correo electronico"
            placeholder="Correo"
            className={`
            flex px-3 py-2 md:px-4 md:py-3 
            border-2 border-black rounded-lg 
            font-medium placeholder:font-normal
            ${loading && 'animate-pulse'}
            `} 
            />
            <div className="relative w-full">
                <input 
                disabled={loading}
                name='password'
                type={showPass ? "text" : "password"} 
                title="Contraseña"
                placeholder="Contraseña"
                className={`
                w-full flex px-3 py-2 md:px-4 md:py-3 
                border-2 border-black rounded-lg 
                font-medium placeholder:font-normal
                ${loading && 'animate-pulse'}
                `} 
                />

                <button 
                type="button"
                title={showPass ? "Esconder" : "Mostrar"}
                onClick={() => setShowPass(showPass ? false : true)}
                className={`absolute inset-y-0 right-0 pr-3 hover:text-slate-400 transition-all`}>
                {showPass ? <IoEyeOutline className='text-2xl'/> : <IoEyeOffOutline className='text-2xl'/>}
                </button>
            </div>

            <button 
            disabled={loading}
            className={`
            flex items-center justify-center flex-none 
            px-3 py-2 md:px-4 md:py-3 rounded-lg font-medium 
            border-2  border-black bg-black text-white
            disabled:bg-gray-400 disabled:text-slate-600 disabled:cursor-no-drop
            ${loading && 'animate-pulse'}
            `}>
            Iniciar Sesión
            </button>
        </form>
    )
}