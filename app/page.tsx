import Image from "next/image";
import { IoHomeSharp, IoAddCircleSharp, IoLogoCss3, IoPersonCircleSharp, IoLogOutSharp } from 'react-icons/io5';

export default function Main() {
  return (

    <main className="flex min-h-screen bg-slate-300 p-2">


      <aside className="p-5 min-h-full bg-emerald-400 rounded-3xl min-w-max">
        
        <div className="flex items-center gap-4">
          <Image
          src={'/tw_css_logo.svg'}
          height={60}
          width={60}
          alt="Tailwind to CSS logo"
          className="rounded-lg antialiased"
          />
          <div className="mr-16">
            <h1 className="text-2xl font-normal">
            Dashboard
            </h1>
            <h2 className="text-md text-gray-700">Tailwind to CSS</h2>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5  mt-10 text-xl font-medium">
            <button className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-al hover:bg-opacity-80 hover:outline-black hover:outline-2 hover:outline">
                <div className="grid place-items-center mr-4">
                <IoHomeSharp/>
                </div>
                Inicio
            </button>
            <button className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-al hover:bg-opacity-80 hover:outline-black hover:outline-2 hover:outline">
                <div className="grid place-items-center mr-4">
                <IoAddCircleSharp/>
                </div>
                Nuevo
            </button>

          <button className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-al hover:bg-opacity-80 hover:outline-black hover:outline-2 hover:outline">
            <div className="grid place-items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                <path fillRule="evenodd" d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z" clipRule="evenodd"></path>
              </svg>
            </div>
            Archivos Tailwind
          </button>

          <button role="button" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-al hover:bg-opacity-80 hover:outline-black hover:outline-2 hover:outline">
            <div className="grid place-items-center mr-4">
              <IoLogoCss3/>
            </div>
            Archivos CSS
          </button>

          <hr className="w-full border-t-black"/>

          <button role="button" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-al hover:bg-opacity-80 hover:outline-black hover:outline-2 hover:outline">
            <div className="grid place-items-center mr-4">
              <IoPersonCircleSharp/>
            </div>
            Mi perfil
          </button>

          <button role="button" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-al hover:bg-opacity-80 hover:outline-black hover:outline-2 hover:outline">
            <div className="grid place-items-center mr-4">
              <IoLogOutSharp/>
            </div>
            Salir
          </button>
        </div>

            
        
      </aside>


      {/* -- grid -- */}
      <div>
        <div className="py-3">
            <div className="mx-auto px-5 text-gray-500"> {/* max-w-6xl */}
                <div className="relative">
                    <div className="relative z-10 grid gap-3 grid-cols-6">
                        <div className="col-span-full lg:col-span-2 overflow-hidden flex relative p-8 rounded-xl bg-white border border-gray-200">
                            
                        </div>
                        <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200">
                            <div>
                                
                            </div>
                        </div>
                        <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200">
                            <div>
                                
                            </div>
                        </div>
                        <div className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200">
                            <div className="grid sm:grid-cols-2">
                                
                                
                            </div>
                        </div>
                        <div className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200">
                            <div className="h-full grid sm:grid-cols-2">
                                <div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

    </main>
  );
}
