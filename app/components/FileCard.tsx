'use client'
import { IoDocumentOutline, IoTrashOutline, IoDownloadOutline } from "react-icons/io5"
import { SiTailwindcss } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";

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
        transition-all
        relative
        `}>
            <div className="absolute top-1 left-1 text-slate-500">
                <SiTailwindcss size={17} />
                <IoLogoCss3 size={17} />
            </div>

            <IoDocumentOutline size={70} />
            <h3 className="text-xl font-medium">{title.replace('.html', '')}</h3>
            <span>{createdAt}</span>
            <div className="flex gap-2">
                <button className={`
                text-slate-50 text-xl
                bg-red-500 rounded-md hover:bg-red-600
                p-1
                `}>
                    <IoTrashOutline/>
                </button>
                <button className={`
                text-slate-50 text-xl
                bg-blue-500 rounded-md hover:bg-blue-600
                p-1
                `}>
                    <IoDownloadOutline/>
                </button>
            </div>
        </div>
    )
}