'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { IoCloudUploadOutline } from 'react-icons/io5';


export const FileUpload = ({userId} : any) => {
    const router = useRouter()
    const [fileName, setFileName] = useState<string | null>(null)
    const [fileContent, setFileContent] = useState<string | null>(null)
    // -- drag and drop --
    const [dragActive, setDragActive] = useState<boolean>(false)
    // -- end drag and drop --
    
    const readFile = (event: any) => {
        console.log('readingFile')
        const fileReader = new FileReader()

        const inputElement = event.target as HTMLInputElement
        const files = inputElement?.files 
        const file = files ? files[0] : null

        if (file?.type !== 'text/html') {
            alert('Solo se permiten archivos HTML')
            return
        }

        console.log('Nombre del archivo:', file.name)

        setFileName(file.name)

        console.log('FILE:', file)

        fileReader.onload = (e) => {
            const fileCont = e?.target?.result
            console.log('FILE CONTENT:', fileCont, typeof fileCont)
            if (fileCont) {
                setFileContent(fileCont as string)
            }
        }
        fileReader.readAsText(file)
    }

    const addNewFile = async() => {
        try {
            const res = await fetch('/api/files', {
                method: 'POST',
                body: JSON.stringify({
                    userId: userId,
                    title: fileName,
                    content: fileContent
                })
            })
            console.log('RESPUESTA DE HANDLEUPLOAD:', res)
            const resData = await res.json()
            console.log('RES DATA:', resData)
            if (res.status === 200) {
                router.push('/')
            }
        } catch (error) {
            console.log('ERROR:', error)
        }
    }

    const handleUpload = async () => {
        await addNewFile()
    }

    function handleDragEnter(e: any) {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(true)
    }

    function handleDragOver(e: any) {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(true)
    }

    function handleDragLeave(e: any) {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)
    }

    function handleDrop(e: any) {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0]
            setFileName(file.name ? file.name : 'archivo_sin_nombre.html')

            const fileReader = new FileReader()
            fileReader.onload = (e) => {
                const fileCont = e?.target?.result
                console.log('FILE CONTENT dESDE DROP:', fileCont, typeof fileCont)
                if (fileCont) {
                    setFileContent(fileCont as string)
                }
            }
            fileReader.readAsText(file)
        }
    }
    

    return (
        <div className="flex flex-col items-center justify-center gap-5 w-ful">
            <label 
            htmlFor="dropzone-file" 
            className="flex flex-col items-center justify-center w-full h-64 border-4 border-slate-400 border-dashed rounded-xl cursor-pointer bg-slate-100 transition-all hover:bg-slate-400 text-gray-500 hover:text-slate-50"
            onDragEnter={handleDragEnter}
            onDrop={handleDrop}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            >
                <div className="flex flex-col items-center justify-center pt-5 pb-6 px-2 ">
                    <IoCloudUploadOutline className='text-2xl mb-2'/>
                    <p 
                    className={`mb-2 text-md text-center ${fileName && 'font-bold text-2xl text-blue-500'}`}>
                        {dragActive? 'Suélta aquí tu archivo' : fileName ? `${fileName}` : 'Click para subir nuevo o arrastra y suelta'}
                    </p>
                    <p className="text-sm">{ fileName ? 'Click para cambiar' : 'Sólo archivos HTML (.html)'}</p>
                </div>

                <input 
                id="dropzone-file" 
                type="file" 
                className="hidden" 
                onChange={readFile}
                // accept=".html"
                // multiple={false}
                />
            </label>
            
            <button
            disabled={fileName ? false : true}
            onClick={() => handleUpload()}
            className={`
            bg-emerald-400 hover:bg-black hover:text-white
            disabled:bg-gray-400 disabled:text-slate-600 disabled:cursor-no-drop     
            rounded-lg
            py-2 px-4
            text-lg font-medium
            transition-all
            `}
            >
                {fileName ? 'Subir y procesar' : 'Agrega un archivo'}
            </button>
        </div> 
    )
}