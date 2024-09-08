import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';


interface LayautProps {
    children: ReactNode;
}

const Layaut: React.FC<LayautProps> = ({ children }) => {
    return (
        <>
            <header className='w-full bg-blue-500 fixed   h-[12vh] text-white text-[16px]  flex items-center justify-between pt-[2%] pl-[3%] pr-[3%]'>
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
            <footer>
                <h1 className="text-red-500">footer</h1>
            </footer>
        </>
    );
};

export default Layaut;