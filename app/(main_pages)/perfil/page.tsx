import Image from 'next/image'
import { IoPersonCircleSharp, IoLogOutOutline, IoPersonOutline, IoFileTrayFullOutline } from 'react-icons/io5';


import { signOut, auth } from "@/auth"


export default async function Perfil() {

    const session = await auth()
    // console.log('SESION:', session)

    return (
        <div className="p-5 h-full">
            <div className='w-full h-full flex flex-col items-center justify-center gap-7'>
                {session?.user?.image ? <Image className="rounded-full" src={session.user.image} width={250} height={250} alt="Profile logo" priority={true}/> : <IoPersonCircleSharp className='text-5xl'/>} 
                <h1 className="text-center leading-snug text-5xl font-medium">
                    {session?.user?.name ? session.user.name : 'Mi perfil'}
                    {/* {session?.user?.name ? session.user.name : session?.user?.username ? session?.user.username: 'Mi perfil'} */}
                </h1>
                <h2 className="text-md text-slate-500 -mt-4">
                    {session?.user?.email ? session.user.email : 'Tailwind to CSS'}
                </h2>
                <hr className="w-80 border-t-black"/>


                <div className='text-xl flex items-center'>
                    0 archivos subidos&nbsp;<IoFileTrayFullOutline/>
                </div>

                <div className='w-full flex justify-center gap-5'>
                    <button className={`
                    text-black text-xl 
                    py-2 px-4 
                    rounded-md border-2 border-black border-solid
                    hover:bg-black hover:text-white                    
                    flex items-center
                    transition-all duration-300`}>
                        <IoPersonOutline/>&nbsp;Editar datos
                    </button>
                    <form 
                    className=""
                    action={async () => {
                        "use server"
                        await signOut()
                    }}
                    >
                        <button className={`
                        flex items-center
                        bg-black text-white hover:bg-transparent hover:text-black 
                        border-2 border-black border-solid rounded-md 
                        py-2 px-4 
                        text-xl
                        transition-all`}>
                            <IoLogOutOutline/>&nbsp;Cerrar sesión
                        </button>
                    </form>
                </div>

            </div>
            
        </div>
    )
}