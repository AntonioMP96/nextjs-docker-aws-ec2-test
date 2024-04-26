import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";

import Footer from "@/app/ui/Footer";



const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });

export const metadata: Metadata = {
  title: "Next Docker Test",
  description: "Nextjs and Docker deploy test in AWS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="flex min-h-screen bg-slate-200">
          <div className="w-full">
            {children}
          </div>
        </main>
        <Footer/>
      </body>
    </html>
  );
}