import Image from "next/image";

export default function Main() {
  return (

    <main className="flex min-h-screen bg-slate-300">


      <aside className="p-5 m-2 min-h-full bg-emerald-500 rounded-3xl min-w">
        
        <h1 className="text-3xl font-medium">
          DASHBOARD
        </h1>

        <div className="flex flex-col items-center mt-5 text-lg font-medium">
          <button role="button" className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-emerald-400 hover:bg-opacity-80 active:bg-emerald-600">
            <div className="grid place-items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                <path fill-rule="evenodd" d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z" clip-rule="evenodd"></path>
              </svg>
            </div>
            Blocks
          </button>
        </div>
        
      </aside>

      <div>
        container
      </div>

    </main>
  );
}
