'use client'
import axios, {AxiosError} from 'axios'
import { redirect } from "next/navigation"
import { FormEvent, useState } from 'react'
import { IoEyeOutline, IoEyeOffOutline} from 'react-icons/io5'



export const RegisterForm = () => {
    const [error, setError] = useState()
    const [showPass, setShowPass] = useState(false)

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        console.log('Entrando en handle submit')
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        try {
            const signupResponse = await axios.post('/api/auth/signup', {
                username: formData.get('username'),
                password: formData.get('password'),
                email: formData.get('email'),
            })
            console.log('RESPUESTA DEL SIGNUP:', signupResponse)
            // redirect('/')

            // "use server"
            // const signinRes = await signIn("credentials", {
            //     email: signupResponse.data.email,
            //     password: formData.get("password"),
            //     redirect: false
            // })

        } catch (error) {
            console.log(error)
            if (error instanceof AxiosError) {
                setError(error.response?.data.message)
            }
        }
    }

    return (
        <form 
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col space-y-5">
        {error && <span className='bg-red-500 p-2 text-center text-white rounded-lg antialiased'>
        {error}
        </span>}
        <input 
        name='username'
        type="text" 
        title="Nombre de usuario"
        placeholder="Usuario"
        className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" 
        />
        <input 
        name='email'
        type="email" 
        title="Correo electronico"
        placeholder="Correo"
        className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" 
        />
        <div className="relative w-full">
        <input 
        name='password'
        type={showPass ? "text" : "password"} 
        title="Contraseña"
        placeholder="Contraseña"
        className={`w-full flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal`} 
        />

        <button 
        type="button"
        title={showPass ? "Esconder" : "Mostrar"}
        onClick={() => setShowPass(showPass ? false : true)}
        className="absolute inset-y-0 right-0 pr-3 hover:text-slate-400 transition-all">
        {showPass ? <IoEyeOutline className='text-2xl'/> : <IoEyeOffOutline className='text-2xl'/>}
        </button>
        </div>

        <button className={`
        flex items-center justify-center flex-none 
        px-3 py-2 md:px-4 md:py-3 rounded-lg font-medium 
        border-2  border-black bg-black text-white
        `}>
        Confirmar
        </button>
        </form>
    )
}