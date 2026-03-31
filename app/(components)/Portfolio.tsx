import Image from 'next/image'
import React from 'react'
import port1 from '@/public/port1.png'
import port2 from '@/public/port2.png'

export default function Portfolio() {
  return (
    <section className='flex flex-col gap-8 py-10 overflow-x-hidden'>
        <div className='flex flex-col gap-4 items-center text-center'>
            <p className='text-[#414141] font-normal text-3xl '>Our Latest Projects</p>
            <h3 className='text-[#414141] text-5xl font-normal'>EXPLORE <span className='text-[#81358A] font-bold'>OUR PORTFOLIO</span> </h3>
        </div>
        <div className='flex flex-row gap-10 justify-between'>
            <Image src={port1} alt='port1'/>
            <Image src={port2} alt='port2'/>
            <Image src={port1} alt='port1'/>
        </div>
    </section>
  )
}
