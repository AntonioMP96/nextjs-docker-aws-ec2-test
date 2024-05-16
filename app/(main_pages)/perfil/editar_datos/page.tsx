import { EditUserForm } from '@/app/components'
import { auth } from '@/auth'

export default async function EditUserData() {

    const session = await auth()
    


    return (
        <div className="p-5 h-full">
            <h1 className="text-4xl font-medium">Editar mis datos</h1>
            <br />

            <div className="">
                <h2 className='text-xl bg-slate-50 py-2 px-4 rounded-lg max-w-fit mx-auto'>Tu actual nombre de usuario es: {session?.user?.name}</h2>
                <br />

                <div className='max-w-xl mx-auto'>
                    <EditUserForm />
                </div>
            </div>
        </div>
    )
}