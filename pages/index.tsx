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

          <button className="flex items-center mb-[10%] gap-[10%] border pt-[10px] pb-[10px] mx-auto pr-[40px] pl-[20px] rounded-[5px] text-white whitespace-nowrap">EXPLORE NOW <Image src="/arrow.svg" alt="стрелка" width={50} height={50} /></button>

          <h1 className="text-white mb-[3%] text-[70px] leading-[80px] pl-[5%]">Why <br /> Choose Us?</h1>
          <div className="pl-[2%] flex w-full pr-[2%] justify-around">
            <div className="flex flex-col gap-[2vh]">
              <Image className="mb-[2%] h-[15vh]" src="/Vector.svg" alt="texnology" width={100} height={100} />
              <h2 className="text-[28px] text-white weight-[600]">expertise</h2>
              <p className="text-[16px] text-white">Our team of experienced experts <br /> have the knowledge and expertise <br />
                to deliver innovative IT solutions <br />
                that meet your unique needs.</p>
            </div>

            <div className="flex flex-col bg-red-500 gap-[2vh]">
              <Image className="mb-[2%] h-[15vh]" src="/texnology.svg" alt="texnology" width={100} height={100} />
              <h2 className="text-[28px]  text-white weight-[600]">technology</h2>
              <p className="text-[16px]  text-white">We stay up to date with the latest <br /> trends and technologies in the IT <br /> industry, so you can get the most <br /> advanced solutions available.</p>
            </div>

            <div className="flex flex-col gap-[2vh]">
              <Image className="mb-[2%] h-[15vh]" src="/Vector.svg" alt="texnology" width={100} height={100} />
              <h2 className="text-[28px] text-white weight-[600]">expertise</h2>
              <p className="text-[16px] text-white">Our team of experienced experts <br /> have the knowledge and expertise <br />
                to deliver innovative IT solutions <br />
                that meet your unique needs.</p>
            </div>

            <div className="flex flex-col gap-[2vh]">
              <Image className="mb-[2%] h-[15vh]" src="/Vector.svg" alt="texnology" width={100} height={100} />
              <h2 className="text-[28px] text-white weight-[600]">expertise</h2>
              <p className="text-[16px] text-white">Our team of experienced experts <br /> have the knowledge and expertise <br />
                to deliver innovative IT solutions <br />
                that meet your unique needs.</p>
            </div>


          </div>
        </div>

      </Layaut>


    </div>
  );
}
