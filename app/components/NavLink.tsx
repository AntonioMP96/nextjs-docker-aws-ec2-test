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
        flex items-center w-full p-3 rounded-xl text-start leading-tight transition-all border-4 hover:border-black
        ${currentPath === path ? "border-black" : "border-emerald-400"}
        `}>
            <div className="grid place-items-center mr-4">
                {icon}
            </div>
            {title}
        </Link>
    )
}