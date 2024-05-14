import Link from 'next/link'
import { IoAddCircleOutline, IoSearchOutline, IoFileTrayFullOutline } from 'react-icons/io5'

import { connectDB } from "@/lib/mongodb"
import File from '@/models/files'
import {FileCard} from '@/app/components'


async function loadFiles() {
    // "use server"
    connectDB()
    const files = await File.find()
    return files
}


export default async function Main() {

    const files = await loadFiles()
    
    return (
        <div className="h-full">
            <div className="py-3 h-full">
                <div className="mx-auto px-5 text-gray-500 py-3 h-full max-w-full">
                    <h1 className="text-4xl font-medium text-black">Todos mis archivos</h1>
                    <br/>

                    
                    <form className="flex items-center max-w-sm">   
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <IoFileTrayFullOutline />
                            </div>
                            <input type="text" id="simple-search" className="bg-slate-50 border border-slate-300 text-gray-900 text-md rounded-lg focus:outline-emerald-500 block w-full ps-10 p-2.5  " placeholder="Buscar por nombre..." required />
                        </div>
                        <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-emerald-500 rounded-lg border border-emerald-500 focus:outline-none">
                            <IoSearchOutline size={20}/>
                        </button>
                    </form>
                    
                    <br />

                    
                    <div className={`flex gap-6 flex-wrap`}>
                    { !files && 
                        <div className="text-xl w-full h-full text-center flex flex-col items-center justify-center gap-5">
                            Aún no has subido archivos
                            <Link href="/nuevo" 
                            className={`py-2 px-4
                            bg-black text-white 
                            border-solid border-2 border-transparent rounded-md
                            hover:bg-transparent hover:text-black hover:border-black
                            transition-all flex items-center gap-2
                            `}>
                                <IoAddCircleOutline size={25}/>
                                Subir nuevo archivo
                            </Link>
                        </div>
                    }
                    { files && files.map(file => (
                        <FileCard 
                        key={file._id}
                        id={String(file._id)}
                        title={file.title}
                        createdAt={String(new Date(file.createdAt).toLocaleString('es-MX'))}
                        />
                    )) }
                    </div>

                    {/* <div className="relative">
                        <div className="relative z-10 grid gap-3 grid-cols-6">
                        <div className="col-span-full lg:col-span-2 overflow-hidden flex relative p-8 rounded-xl bg-white border border-gray-200"></div>
                        <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200">
                            <div></div>
                        </div>
                        <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200">
                            <div></div>
                        </div>
                        <div className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200">
                            <div className="grid sm:grid-cols-2"></div>
                        </div>
                        <div className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200">
                            <div className="h-full grid sm:grid-cols-2"></div>
                        </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
