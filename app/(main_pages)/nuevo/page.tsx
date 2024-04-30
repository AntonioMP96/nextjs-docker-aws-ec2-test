import { FileUpload } from '@/app/components'

export default function New() {
    return (
        <div className="p-5">
            <h1 className="text-4xl font-medium">Subir un nuevo archivo</h1>
            <br />
            <h2 className="text-xl">Subir un archivo HTML+Tailwind y compilarlo  a HTML+CSS</h2>
            <br />
            {/* file */}
            <FileUpload />
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