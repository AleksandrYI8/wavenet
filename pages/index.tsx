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
{/* <Image className="absolute  top-0 right-0 w-full z-[1]"  src="/first_bg.svg" alt="backround" width={1500} height={1000}/>
 */}        <div className="pt-[15%] bg-blue-950 ">
          <h1 className="text-[160px] z-[2] text-white leading-[22vh] text-center">
            YOUR BEST <br /> <span className="italic">IT </span>
            PARTNERS
          </h1>
          <p className="z-[2] text-center text-white text-[16px] mb-[30px]">From custom software development to cybersecurity, our team of experts is dedicated <br />
            to delivering solutions that are tailored to your unique needs.</p>

            <button className="flex items-center gap-[10%] border pt-[10px] pb-[10px] mx-auto pr-[40px] pl-[20px] rounded-[5px] text-white whitespace-nowrap">EXPLORE NOW <Image src="/arrow.svg" alt="стрелка" width={50} height={50} /></button>
        </div>

      </Layaut>


    </div>
  );
}
