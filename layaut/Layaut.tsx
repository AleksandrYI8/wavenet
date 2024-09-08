import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';


interface LayautProps {
    children: ReactNode;
}

const Layaut: React.FC<LayautProps> = ({ children }) => {
    return (
        <>
            <header className='w-full fixed  bg-bgMain h-[12vh] text-white text-[16px]  flex items-center justify-between pt-[2%] pl-[5%] pr-[5%]'>
                <div className="w-[25%]">
                    <Image src="/logo.svg" alt="logo" width={200} height={200} />
                </div>
                <nav className="w-[50%] items-center flex gap-[5%]">
                    <Link className='whitespace-nowrap' href={"/about"}>ABOUT US</Link>
                    <Link href={"/services"}>SERVICES</Link>
                    <Link href={"/pricing"}>PRICING</Link>
                    <Link href={"/blog"}>BLOG</Link>
                    <Link href={"/contact"}>CONTACT</Link>
                </nav>
                <div className="border rounded-[5px] p-[10px] pl-[20px] pr-[20px]">
                    <button>SING IN</button>
                </div>
            </header>
            {children}
            <footer className= 'pb-[3%] bg-bgMain pl-[5%] pr-[5%]'>
                <div className="">
                    <div className="flex items-center mb-[2%] gap-[20%]">

                        <div className="flex justify-center flex-col gap-[15vh]">
                            <Image className='lg:w-[200px]  xl:w-[250px] ' src="/logo.svg" alt="logo" width={250} height={200} />

                            <div className="flex pr-[15%] justify-between">
                                <Image src="/Instagram.svg" alt="logo" width={30} height={30} />
                                <Image src="/Facebook.svg" alt="logo" width={30} height={30} />
                                <Image src="/Twitter.svg" alt="logo" width={30} height={30} />
                            </div>
                        </div>

                        <div className="flex w-[70%] justify-around">
                            <div className="text-gray-500 flex flex-col gap-[.5vh]">
                                <h2 className=' lg:text-[23px] xl:text-[30px] font-[600] text-white'>Explore</h2>
                                <Link className='lg:text-[16px] xl:text-[20px]' href="/about">About Us</Link>
                                <Link className='lg:text-[16px] xl:text-[20px]' href="/about">Services</Link>
                                <Link className='lg:text-[16px] xl:text-[20px]' href="/about">Pricing</Link>
                                <Link className='lg:text-[16px] xl:text-[20px]' href="/about">Blog</Link>
                                <Link className='lg:text-[16px] xl:text-[20px]' href="/about">Contact</Link>
                            </div>
                            <div className="text-gray-500 flex flex-col gap-[.5vh]">
                                <h2 className='lg:text-[23px] xl:text-[30px] font-[600] text-white'>Contact</h2>
                                <Link className='lg:text-[16px] xl:text-[20px]' href="/about">Email</Link>
                                <Link className='lg:text-[16px] xl:text-[20px]' href="/about">Phone</Link>
                                <Link className='lg:text-[16px] xl:text-[20px]' href="/about">Address</Link>
                                <Link className='lg:text-[16px] xl:text-[20px]' href="/about">Media</Link>
                            </div>
                            <div className="text-gray-500 flex flex-col gap-[.5vh]">
                                <h2 className='lg:text-[23px] xl:text-[30px] font-[600] text-white'>Newsletter</h2>
                                <p className='lg:text-[16px] xl:text-[20px] mb-[3%]' >Subscribe to our newsletter to stay informed about <br /> our latest products, services, and promotions. <br />
                                    Feel free to unsubscribe anytime!</p>

                                <div className="flex relative justify-between border rounded border-gray-500 lg:pt-[1.5%] lg:pl-[4%] lg:pr-[4%] lg:pb-[1.5%] xl:pl-[6%] xl:pr-[6%] xl:pb-[3%]">
                                    <input className='bg-bgMain outline-none lg:text-[16px] xl:text-[20px] type="email'
                                        placeholder='Enter Your Email Adress...'
                                    />

                                    <Image src="/Arrow_Icon.svg" alt="arrow" width={20} height={20} />
                                </div>

                            </div>


                        </div>
                    </div>
                    <div className="border-t pt-[.5%] flex justify-between text-gray-500 border-gray-500">
                        <p className='lg:text-[14px] xl:text-[16px]'>Copyright © 2023 for WaveNet. All rights reserved.</p>
                        <p className='lg:text-[14px] xl:text-[16px]'>Terms & Condition  |  Privacy Policy</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Layaut;