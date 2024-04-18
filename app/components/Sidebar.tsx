import Image from "next/image";
import { IoHomeSharp, IoAddCircleSharp, IoLogoCss3, IoPersonCircleSharp, IoLogOutSharp } from 'react-icons/io5';
import { SiTailwindcss } from "react-icons/si";

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
        path: '/tailwind_files',
        icon: <SiTailwindcss/>,
        title: 'Archivos Tailwind'
    },
    {
        path: '/css_files',
        icon: <IoLogoCss3/>,
        title: 'Archivos CSS'
    }
]

const menuProfileItems = [
    {
        path: '/my_profile',
        icon: <IoPersonCircleSharp/>,
        title: 'Mi perfil'
    },
    {
        path: '/logout',
        icon: <IoLogOutSharp/>,
        title: 'Salir'
    }
]


export const Sidebar = () => {
    return (
        <aside className="p-5 min-h-full bg-emerald-400 rounded-3xl min-w-max text-black">
            <div className="flex items-center gap-4">
                <Image
                src={'/tw_css_logo.svg'}
                height={60}
                width={60}
                alt="Tailwind to CSS logo"
                className="rounded-lg antialiased"
                />
                <div className="mr-16">
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
                {
                    menuProfileItems.map( item => (
                        <NavLink key={item.path} {...item}/> 
                    ))
                }
            </div>
        </aside>
    )
}