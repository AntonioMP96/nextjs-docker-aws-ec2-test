import Image from "next/image";
import { IoHomeSharp, IoAddCircleSharp, IoLogoCss3, IoPersonCircleSharp, IoLogOutSharp } from 'react-icons/io5';
import { SiTailwindcss } from "react-icons/si";
import { signOut, auth } from "@/auth"

import { NavLink } from "./NavLink";


const menuItems = [
    {
        path: '/',
        icon: <IoHomeSharp/>,
        title: 'Inicio'
    },
    {
        path: '/nuevo',
        icon: <IoAddCircleSharp/>,
        title: 'Nuevo'
    },
    {
        path: '/tailwind',
        icon: <SiTailwindcss/>,
        title: 'Archivos Tailwind'
    },
    {
        path: '/css_files',
        icon: <IoLogoCss3/>,
        title: 'Archivos CSS'
    }
]


export const Sidebar = async () => {
    const session = await auth()

    return (
        <aside className="p-4 md:p-5 min-h-full bg-emerald-400 rounded-3xl min-w-max text-black">
            <div className="flex items-center justify-center gap-4">
                <Image
                src={'/tw_css_logo.svg'}
                height={60}
                width={60}
                alt="Tailwind to CSS logo"
                className="rounded-lg antialiased"
                />
                <div className="mr-16 hidden md:inline-block">
                    <h1 className="text-2xl font-normal">
                    Dashboard
                    </h1>
                    <h2 className="text-md text-gray-700">Tailwind to CSS</h2>
                </div>
            </div>

            <div className="flex flex-col items-center gap-5  mt-10 text-xl font-medium">

                {
                    menuItems.map( item => (
                        <NavLink key={item.path} {...item}/> 
                    ))
                }
                <hr className="w-full border-t-black"/>
                
                <NavLink 
                path={'/perfil'} 
                icon={ session?.user?.image ? <Image className="rounded-full" src={session.user.image} width={30} height={30} alt="Profile logo"/> : <IoPersonCircleSharp/> } 
                title={ session?.user?.name ? session.user.name : 'Mi perfil' }
                /> 
                 
                <form 
                className="w-full rounded-xl border-4 border-emerald-400 hover:border-black transition-all"
                action={async () => {
                    "use server"
                    await signOut()
                }}
                >
                    <button 
                    type="submit"
                    className={`
                    flex items-center justify-center md:justify-start w-full p-3  text-start leading-tight"
                    `}>
                        <div className="grid place-items-center mr-0 md:mr-4 text-2xl md:text-xl">
                        <IoLogOutSharp/>
                        </div>
                        <span className="hidden md:inline-block">
                        Salir
                        </span>
                    </button>
                </form>
            </div>
        </aside>
    )
}