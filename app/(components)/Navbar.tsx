import React from 'react'
import logo from '@/public/logo.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between lg:px-[80px] md:px-[40px] px-6 bg-black py-4 fixed w-full opacity-90 backdrop-blur-2xl z-10' >
        <Image src={logo} alt="logo" width={150} height={100} />
         <div className='flex items-center gap-6'>
            <Link className='hover:text-[#B83DC8] text-white text-xl font-medium font-sans' href="/">Home</Link>
            <Link className='hover:text-[#B83DC8] text-white text-xl font-medium font-sans' href="/about">About</Link>
            <Link className='hover:text-[#B83DC8] text-white text-xl font-medium font-sans' href="/about">Services</Link>
            <Link className='hover:text-[#B83DC8] text-white text-xl font-medium font-sans' href="/about">Portfolio</Link>
            <Link className='hover:text-[#B83DC8] text-white text-xl font-medium font-sans' href="/contact">Contact</Link>
         </div>

         <i className="ri-menu-2-line text-[#8d7491] text-2xl cursor-pointer hidden lg:block"></i>
    </div>
  )
}
