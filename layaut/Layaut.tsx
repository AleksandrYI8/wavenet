import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';


interface LayautProps {
    children: ReactNode;
}

const Layaut: React.FC<LayautProps> = ({ children }) => {
    return (
        <>
            <header className='w-full bg-blue-500 flex justify-between pt-[2%] pl-[3%] pr-[3%]'>
                <div className="">
                    <Image src="/logo.svg" alt="logo" width={200} height={200} />
                </div>
                <nav className="">
                    <Link href={"/about"}>ABOUT US</Link>
                    <Link href={"/about"}>SERVICES</Link>
                    <Link href={"/about"}>PRICING</Link>
                    <Link href={"/about"}>BLOG</Link>
                    <Link href={"/about"}>CONTACT</Link>
                </nav>
                <div className="">
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