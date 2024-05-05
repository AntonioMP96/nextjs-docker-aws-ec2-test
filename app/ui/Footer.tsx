import Image from "next/image";
import Link from "next/link";


export default function Footer() {
    return (
      <footer className="text-white bg-slate-950">
        <div className="container px-5 py-8 mx-auto flex items-center justify-center sm:flex-row flex-col">
          <Link className="title-font font-normal" href="https://www.cykadas.com">
            <span className="ml-3 text-lg flex flex-row items-center justify-center gap-3">
              &copy;
                Tailwind to CSS
                2024
            </span>
          </Link>
        </div>
      </footer>
    );
  }