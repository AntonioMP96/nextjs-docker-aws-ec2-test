import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";

import { Sidebar } from '@/app/components'
import Footer from "@/app/ui/Footer";

// testing auth:
import { auth } from '@/auth'
import { redirect } from "next/navigation"



const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });

export const metadata: Metadata = {
  title: "Next Docker Test",
  description: "Nextjs and Docker deploy test in AWS.",
  
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  
  if (!session) return redirect('/login')
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="flex min-h-screen bg-slate-200 p-2">
          <Sidebar/>
          <div className="ml-3 w-full">
            {children}
          </div>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
