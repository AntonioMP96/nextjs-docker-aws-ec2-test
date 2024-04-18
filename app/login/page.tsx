import Image from "next/image";


export default function Main() {
    return (
  
      <section className="flex min-h-screen">
  
        <div className="flex flex-row w-full">
  
        <div className='hidden lg:flex flex-col justify-between bg-[#1b696d] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg'>
          <div className="flex items-center justify-start space-x-3">
            {/* <span className="bg-black rounded-full w-8 h-8"></span>*/}
            <Image
              src={'/tw_css_logo.svg'}
              height={45}
              width={45}
              alt="Tailwind to CSS logo"
              className="rounded-lg"
              />
            <a href="#" className="font-medium text-3xl">
              Tailwind to CSS
            </a>
          </div>
          <div className='space-y-5'>
            <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">
              Compilador de archivos de Tailwind a CSS
            </h1>
            <p className="text-lg">¿No tienes cuenta?</p>
            <button
            className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
              Crear cuenta
            </button>
          </div>
          <p className="font-medium">© 2024 Tony MX</p>
        </div>
  
        {/* <!-- Login --> */}
        <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
          <div className="flex flex-col gap-2 lg:hidden justify-between items-center w-full py-4">
  
            <div className="flex items-center justify-start space-x-3">
              <span className="bg-black rounded-full w-6 h-6"></span>
              <a href="#">
                <Image
                src={'/tw_css_logo.svg'}
                height={50}
                width={140}
                alt="Cykadas"
                />
              </a>
            </div>
  
            <div className="flex items-center space-x-2 text-sm">
              <span>No tienes cuenta?</span>
              <a href="#" className="underline font-medium text-[#070eff]">
                Registrarme
              </a>
            </div>
          </div>
          {/* <!-- Login box --> */}
          <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
            <div className="flex flex-col space-y-2 text-center">
              <h2 className="text-3xl md:text-4xl font-bold">Ingresar a mi cuenta</h2>
              <p className="text-md md:text-xl">Inicia sesión en el compilador de tailwind a css</p>
            </div>
            <div className="flex flex-col max-w-md space-y-5">
              <input 
              type="text" 
              placeholder="Usuario / correo"
              className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" />
              <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                Confirmar
              </button>
              <div className="flex justify-center items-center">
                <span className="w-full border border-black"></span>
                <span className="px-4">Ó</span>
                <span className="w-full border border-black"></span>
              </div>
              <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative">
                <span className="absolute left-4">
                  <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#EA4335 " d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"/>
                    <path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"/>
                    <path fill="#4A90E2" d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"/>
                    <path fill="#FBBC05" d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"/>
                </svg>
                </span>
                <span>Iniciar sesión con Google</span>
              </button>
              <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative">
                <span className="absolute left-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </span>
                <span>Iniciar sesión con Github</span>
              </button>
            </div>
          </div>
        </div>
  
        </div>
  
      </section>
    );
  }
  