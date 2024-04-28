import { IoCloudUploadOutline } from 'react-icons/io5';


export default function New() {
    return (
        <div className="p-5">
            <h1 className="text-4xl font-medium">Subir un nuevo archivo</h1>
            <br />
            <h2 className="text-xl">Subir un archivo HTML+Tailwind y compilarlo  a HTML+CSS</h2>
            <br />
            {/* file */}
            <div className="flex items-center justify-center w-full">
                <label 
                htmlFor="dropzone-file" 
                className="flex flex-col items-center justify-center w-full h-64 border-4 border-slate-400 border-dashed rounded-xl cursor-pointer bg-slate-100 transition-all hover:bg-slate-400 text-gray-500 hover:text-slate-50">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
                        <IoCloudUploadOutline className='text-2xl mb-2'/>
                        <p className="mb-2 text-md "><span className="font-semibold">Click para subir nuevo</span> o arrastra y suelta</p>
                        <p className="text-sm">HTML (.html)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                </label>
            </div> 
            {/* endfile */}
            <br />
            <span className='text-lg'>
                Los archivos subidos se guardarán en la sección <strong>Archivos Tailwind</strong>.
                <br />
                Los archivos compilados se guardarán en la sección <strong>Archivos CSS</strong>.
                <br />
                Puedes consultar ambos en la sección <strong>Inicio</strong>
            </span>
        </div>
    )
}