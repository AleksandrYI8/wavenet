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
          <h1 className=" lg:text-[100px] xl:text-[160px] z-[2] text-white leading-[22vh] text-center">
            YOUR BEST <br /> <span className="italic">IT </span>
            PARTNERS
          </h1>
          <p className="z-[2] text-center text-white lg:text-[14px] xl:text-[16px] mb-[30px]">From custom software development to cybersecurity, our team of experts is dedicated <br />
            to delivering solutions that are tailored to your unique needs.</p>

          <button className="flex lg:text-[14px] xl:text-[16px] items-center mb-[10%] gap-[10%] border pt-[10px] pb-[10px] mx-auto pr-[40px] pl-[20px] rounded-[5px] text-white whitespace-nowrap">EXPLORE NOW <Image src="/arrow.svg" alt="стрелка" width={50} height={50} /></button>

          <h1 className="text-white mb-[4%] lg:text-[50px] xl:text-[70px] leading-[80px] pl-[5%]">Why <br /> Choose Us?</h1>
          <div className="pl-[5%] flex w-full pr-[5%] justify-between">
            <div className="flex flex-col gap-[2vh]">
              <Image className="mb-[2%] lg:h-[12vh] xl:h-[15vh]" src="/Vector.svg" alt="texnology" width={150} height={150} />
              <h2 className="lg:text-[22px] xl:text-[28px] text-white weight-[600]">expertise</h2>
              <p className="lg:text-[14px] xl:text-[16px] text-white">Our team of experienced experts <br /> have the knowledge and expertise <br />
                to deliver innovative IT solutions <br />
                that meet your unique needs.</p>
            </div>

            <div className="flex flex-col gap-[2vh]">
              <Image className="mb-[2%] lg:h-[12vh] xl:h-[15vh]" src="/texnology.svg" alt="texnology" width={150} height={150} />
              <h2 className="lg:text-[22px] xl:text-[28px]  text-white weight-[600]">technology</h2>
              <p className="lg:text-[14px] xl:text-[16px]  text-white">We stay up to date with the latest <br /> trends and technologies in the IT <br /> industry, so you can get the most <br /> advanced solutions available.</p>
            </div>

            <div className="flex flex-col gap-[2vh]">
              <Image className="mb-[2%] lg:h-[12vh] xl:h-[15vh]" src="/solutions.svg" alt="texnology" width={150} height={150} />
              <h2 className="lg:text-[22px] xl:text-[28px] text-white weight-[600]">solutions</h2>
              <p className="lg:text-[14px] xl:text-[16px] text-white">We take a personalized approach <br />
                to every project, working closely <br /> with you to understand your <br /> business and create solutions.</p>
            </div>

            <div className="flex flex-col mb-[10%] gap-[2vh]">
              <Image className="mb-[2%] lg:h-[12vh] xl:h-[15vh]" src="/results.svg" alt="texnology" width={150} height={150} />
              <h2 className="lg:text-[22px] xl:text-[28px] text-white weight-[600]">results</h2>
              <p className="lg:text-[14px] xl:text-[16px] text-white">Our track record speaks for itself – <br /> we've helped businesses of all <br /> sizes and industries achieve their <br /> goals with our IT solutions.</p>
            </div>


          </div>
        </div>
        <div className="bg-[url(/bg_sec.svg)] pb-[10%] lg:pt-[10%] xl:pt-[20%] bg-cover bg-center h-full w-full">
          <h1 className="font-[600] mb-[1%] lg:text-[70px] xl:text-[90px] text-center">We believe that
            <span className="italic font-[400]"> technology </span> <br />
            can  <span className="italic font-[400]">change</span> the world.
          </h1>

          <p className="lg:text-[16px] xl:text-[18px] mb-[8%] text-center">That's why we're committed to delivering innovative IT solutions to businesses of all <br /> sizes. Our team of experienced professionals is dedicated to helping you achieve <br /> your goals and thrive in a rapidly evolving digital landscape.</p>

          <div className="w-[80%] flex mx-auto items-center">
            <div className="w-[15%]">
              <h2 className=" text-center lg:text-[35px] xl:text-[45px]">500+</h2>
              <p className="text-center lg:text-[14px] xl:text-[16px]">Successful Projects</p>
            </div>
            <div className="w-[28%] h-[3px] rounded-[5px]  bg-black"></div>
            <div className="w-[15%]">
              <h2 className=" text-center lg:text-[35px] xl:text-[45px]">98%</h2>
              <p className="text-center lg:text-[14px] xl:text-[16px]">Satisfied Clients</p>
            </div>
            <div className="w-[28%] h-[3px] rounded-[5px]  bg-black"></div>
            <div className="w-[15%]">
              <h2 className="text-center lg:text-[35px] xl:text-[45px]">35+</h2>
              <p className="text-center lg:text-[14px] xl:text-[16px]">Handled Countries</p>
            </div>
          </div>

        </div>
        <div className="bg-bgMain pt-[10%] pb-[10%] pl-[5%] pr-[5%]">
          <div className="flex justify-between ">
            <h1 className="lg:text-[55px] xl:text-[80px] mb-[5%] text-white font-[600]">Client Stories</h1>
            <Image className="lg:w-[30px] lg:h-[100px] xl:w-[50px] xl:h-[50px] " src="/Arrow_Icon.svg" alt="arrow" width={50} height={50} />
          </div>

          <div className="flex mb-[10%]">
            <div className="border-r w-1/2 pr-[5%] text-white">
              <h2 className="lg:text-[35px] xl:text-[50px] text-green-100 mb-[1%] font-[600]">Amazing!</h2>
              <p className=" lg:text-[15px] xl:text-[20px]  mb-[5%]">“WaveNet's cybersecurity solution gave us the peace of mind we <br /> needed to focus on our business. They took the time to understand <br /> our unique needs and created a solution that protected our sensitive <br /> data and ensured compliance with industry regulations.”</p>
              <div className="flex pr-[10%] gap-[2%] justify-end">
                <h2 className="text-end"><span className="font-[600]">Tom Johnson</span> <br />
                  CIO of Mika Medika Healthcare
                </h2>

                <Image src="/man.svg" alt="man" width={50} height={50} />
              </div>
            </div>

            <div className=" w-1/2 pl-[5%] text-white">
              <h2 className=" lg:text-[35px] xl:text-[50px] text-green-100 mb-[1%] font-[600]">Best Service!</h2>
              <p className="lg:text-[15px] xl:text-[20px]  lg:mb-[10%] xl:mb-[5%]">“We were struggling to keep up with the demands of our growing <br /> business until we partnered with WaveNet. Their custom software <br /> development solution has helped us streamline our operations and <br /> improve efficiency, saving us time and money.”</p>
              <div className="flex pr-[10%] gap-[2%] justify-end">
                <h2 className="text-end"><span className="font-[600]">Jane Doe</span> <br />
                  COO of DEF Manufacturing                </h2>

                <Image src="/women.svg" alt="man" width={50} height={50} />
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <Image src="/brands.svg" alt="brands" width={1200} height={100} />
          </div>
        </div>

      </Layaut>


    </div>
  );
}
