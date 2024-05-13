'use client'
import { IoDocumentOutline } from "react-icons/io5"

type File = {
    id: string;
    title: string;
    createdAt: string;
}

export const FileCard = ({id, title, createdAt}: File) => {
    
    return (
        <div className={`
        flex flex-col items-center gap-2
        bg-white text-slate-900 rounded-xl w-fit
        p-6 border-4 border-transparent hover:border-slate-900
        cursor-pointer transition-all
        `}>
            <IoDocumentOutline size={70} />
            <h3 className="text-xl font-medium">{title.replace('.html', '')}</h3>
            <span>{new Date(createdAt).toLocaleString('es-MX')}</span>
        </div>
    )
}