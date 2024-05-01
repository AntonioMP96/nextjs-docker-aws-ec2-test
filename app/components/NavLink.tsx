'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
    path: string
    icon: JSX.Element
    title: string
    subTitle?: string
}

export const NavLink = ({ path, icon, title, subTitle }: Props) => {
    const currentPath = usePathname()

    return (
        <Link 
        href={path}
        className={`
        flex items-center justify-center md:justify-start w-full p-3 rounded-xl text-start leading-tight transition-all border-4 hover:border-black
        ${currentPath === path ? "border-black" : "border-emerald-400"}
        `}>
            <div className="grid place-items-center content-center mr-0 md:mr-4 text-2xl md:text-xl">
                {icon}
            </div>
            <span className='hidden md:inline-block'>
            {title}
            </span>
        </Link>
    )
}