'use client'
import { signIn } from "next-auth/react"
import axios, {AxiosError} from 'axios'
import { FormEvent, useState } from 'react'
import { IoEyeOutline, IoEyeOffOutline} from 'react-icons/io5'



export const EditUserForm = () => {
    const [error, setError] = useState()
    const [showPass, setShowPass] = useState(false)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
        setLoading(true)
        console.log('Entrando en handle submit')
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        try {
            console.log('DATOS DEL FORM:', formData)
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, 3000)
        } catch (error) {
            console.log(error)
            if (error instanceof AxiosError) {
                setError(error.response?.data.message)
            }
            setLoading(false)
        }
    }

    return (

        <form 
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col space-y-5">
            {success && <span className='bg-emerald-500 p-2 text-center text-white rounded-lg antialiased'>
            ¡Cuenta creada con éxito!
            </span>}
            {error && !success && <span className='bg-red-500 p-2 text-center text-white rounded-lg antialiased'>
            {error}
            </span>}
            <input 
            disabled={loading}
            name='name'
            type="text" 
            title="Nombre de usuario"
            placeholder="Nuevo nombre de usuario"
            className={`flex px-3 py-2 md:px-4 md:py-3 
            border-2 border-black rounded-lg 
            font-medium placeholder:font-normal
            ${loading && 'animate-pulse'}
            `} 
            />

            <button 
            disabled={loading}
            className={`
            flex items-center justify-center flex-none 
            px-3 py-2 md:px-4 md:py-3 rounded-lg font-medium 
            border-2  border-black bg-black text-white
            disabled:bg-gray-400 disabled:text-slate-600 disabled:cursor-no-drop
            ${loading && 'animate-pulse'}
            `}>
            Confirmar
            </button>
        </form>
    )
}