'use client'
import { useState } from 'react';
import { IoCloudUploadOutline } from 'react-icons/io5';


export const FileUpload = () => {
    const [fileName, setFileName] = useState(null)
    
    const readFile = (event) => {
        // const fileReader = new FileReader()
        const file = event.target.files[0]
        if (file.type !== 'text/html') {
            alert('Solo se permiten archivos HTML')
            return
        }
        setFileName(file.name)

        console.log('FILE:', file)

        // fileReader.onload = (e) => {
        //     const fileContent = e.target.result
        //     console.log('FILE CONTENT:', fileContent)
        // }
        // fileReader.readAsText(file)
    }

    return (
        <div className="flex flex-col items-center justify-center gap-5 w-full">
            <label 
            htmlFor="dropzone-file" 
            className="flex flex-col items-center justify-center w-full h-64 border-4 border-slate-400 border-dashed rounded-xl cursor-pointer bg-slate-100 transition-all hover:bg-slate-400 text-gray-500 hover:text-slate-50">
                <div className="flex flex-col items-center justify-center pt-5 pb-6 px-2 ">
                    <IoCloudUploadOutline className='text-2xl mb-2'/>
                    <p 
                    className={`mb-2 text-md text-center ${fileName && 'font-bold text-xl'}`}>
                        {fileName ? `${fileName}` : 'Click para subir nuevo o arrastra y suelta'}
                    </p>
                    <p className="text-sm">{ fileName ? 'Click para cambiar' : 'HTML (.html)'}</p>
                </div>

                <input 
                id="dropzone-file" 
                type="file" 
                className="hidden" 
                onChange={readFile}
                />
            </label>
            <button
            disabled={true}
            onClick={() => console.log(' subiendo')}
            className={`
            bg-emerald-400 hover:bg-black hover:text-white
            disabled:bg-gray-400 disabled:text-slate-600 disabled:cursor-no-drop     
            rounded-lg
            py-2 px-4
            text-lg font-medium
            transition-all
            `}
            >
                Subir y procesar
            </button>
        </div> 
    )
}