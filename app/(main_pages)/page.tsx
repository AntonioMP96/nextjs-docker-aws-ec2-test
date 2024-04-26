import Image from "next/image"
import {
  IoHomeSharp,
  IoAddCircleSharp,
  IoLogoCss3,
  IoPersonCircleSharp,
  IoLogOutSharp,
} from "react-icons/io5"
// import { auth } from '@/auth'/
// import { redirect } from "next/navigation"

export default async function Main() {
    // const session = await auth()

    // if (!session) return redirect('/login')
    
    return (
        <div>
            <div className="py-3">
                <div className="mx-auto px-5 text-gray-500">
                {" "}
                {/* max-w-6xl */}
                <div className="relative">
                    <div className="relative z-10 grid gap-3 grid-cols-6">
                    <div className="col-span-full lg:col-span-2 overflow-hidden flex relative p-8 rounded-xl bg-white border border-gray-200"></div>
                    <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200">
                        <div></div>
                    </div>
                    <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200">
                        <div></div>
                    </div>
                    <div className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200">
                        <div className="grid sm:grid-cols-2"></div>
                    </div>
                    <div className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200">
                        <div className="h-full grid sm:grid-cols-2">
                        <div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6"></div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
