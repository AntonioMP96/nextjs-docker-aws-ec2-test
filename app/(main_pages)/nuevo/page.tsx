import { FileUpload } from '@/app/components'
import { auth } from '@/auth'


export default async function New() {

    const session = await auth()

    return (
        <div className="p-5">
            <h1 className="text-4xl font-medium">Subir un nuevo archivo</h1>
            <br />
            <h2 className="text-xl">Subir un archivo HTML+Tailwind y compilarlo  a HTML+CSS</h2>
            <br />

            {/* file */}
            <FileUpload userId={String(session?.user?.id)}/>
            {/* endfile */}

            <br />
            <br />
            <p className='text-lg w-full text-center leading-9 text-balance'>
                Los archivos originales subidos se guardarán en la sección: <strong>Archivos Tailwind</strong>.
                <br />
                Los archivos compilados se guardarán en la sección: <strong>Archivos CSS</strong>.
                <br />
                Puedes consultar ambos en la sección: <strong>Inicio</strong>
            </p>
        </div>
    )
}