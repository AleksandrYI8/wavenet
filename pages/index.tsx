import Image from "next/image";
import localFont from "next/font/local";
import Layaut from "@/layaut/Layaut";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
      <Layaut>
        <div className="w-full h-[3000px] bg-red-500"></div>        
      </Layaut>


    </div>  
  );
}
