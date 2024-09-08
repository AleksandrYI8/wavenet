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
 */}        <div className="pt-[15%] bg-bgMain ">
          <h1 className="text-[160px] z-[2] text-white leading-[22vh] text-center">
            YOUR BEST <br /> <span className="italic">IT </span>
            PARTNERS
          </h1>
          <p className="z-[2] text-center text-white text-[16px] mb-[30px]">From custom software development to cybersecurity, our team of experts is dedicated <br />
            to delivering solutions that are tailored to your unique needs.</p>

          <button className="flex items-center mb-[10%] gap-[10%] border pt-[10px] pb-[10px] mx-auto pr-[40px] pl-[20px] rounded-[5px] text-white whitespace-nowrap">EXPLORE NOW <Image src="/arrow.svg" alt="стрелка" width={50} height={50} /></button>

          <h1 className="text-white mb-[4%] text-[70px] leading-[80px] pl-[5%]">Why <br /> Choose Us?</h1>
          <div className="pl-[5%] flex w-full pr-[5%] justify-between">
            <div className="flex flex-col gap-[2vh]">
              <Image className="mb-[2%] h-[15vh]" src="/Vector.svg" alt="texnology" width={150} height={150} />
              <h2 className="text-[28px] text-white weight-[600]">expertise</h2>
              <p className="text-[16px] text-white">Our team of experienced experts <br /> have the knowledge and expertise <br />
                to deliver innovative IT solutions <br />
                that meet your unique needs.</p>
            </div>

            <div className="flex flex-col gap-[2vh]">
              <Image className="mb-[2%] h-[15vh]" src="/texnology.svg" alt="texnology" width={150} height={150} />
              <h2 className="text-[28px]  text-white weight-[600]">technology</h2>
              <p className="text-[16px]  text-white">We stay up to date with the latest <br /> trends and technologies in the IT <br /> industry, so you can get the most <br /> advanced solutions available.</p>
            </div>

            <div className="flex flex-col gap-[2vh]">
              <Image className="mb-[2%] h-[15vh]" src="/solutions.svg" alt="texnology" width={150} height={150} />
              <h2 className="text-[28px] text-white weight-[600]">solutions</h2>
              <p className="text-[16px] text-white">We take a personalized approach <br />
                to every project, working closely <br /> with you to understand your <br /> business and create solutions.</p>
            </div>

            <div className="flex flex-col mb-[10%] gap-[2vh]">
              <Image className="mb-[2%] h-[15vh]" src="/results.svg" alt="texnology" width={150} height={150} />
              <h2 className="text-[28px] text-white weight-[600]">results</h2>
              <p className="text-[16px] text-white">Our track record speaks for itself – <br /> we've helped businesses of all <br /> sizes and industries achieve their <br /> goals with our IT solutions.</p>
            </div>


          </div>
        </div>
        <div className="bg-[url(/bg_sec.svg)] pt-[20%] bg-cover bg-center h-full w-full">
          <h1 className="font-[600] mb-[1%] text-[90px] text-center">We believe that
            <span className="italic font-[400]"> technology </span> <br />
            can  <span className="italic font-[400]">change</span> the world.
          </h1>

          <p className="text-[18px] text-center">That's why we're committed to delivering innovative IT solutions to businesses of all <br /> sizes. Our team of experienced professionals is dedicated to helping you achieve <br /> your goals and thrive in a rapidly evolving digital landscape.</p>
        </div>

      </Layaut>


    </div>
  );
}
