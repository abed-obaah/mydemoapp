"use client"
import React from 'react'
import ThirdBanner from '@/public/banner-3.png'
import Image from 'next/image';



const Peer2Peer = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 lg:px-20 px-10 place-items-center lg:mt-40 mt-20">
          <div className='lg:col-span-3 mb-10'>
              <p className='uppercase text-[#5C9575] text-[1.5rem] font-semibold mb-3'>Peer 2 peer</p>
              <p className="text-[2rem] lg:text-[4rem] font-[ubuntu] font-bold lg:leading-[68px] leading-[34px] mb-10">Lend someone their dreams while you take a step into your financial freedom</p>
              <a href="#" className="border-2 border-[#355774] rounded-full px-10 py-3 text-lg  text-sm text-[#292929]">Learn More</a>
          </div>
          <div className="lg:col-span-5 flex justify-end w-full">
            <Image src={ThirdBanner} width={500} height={500}  alt="banner-3"/>
          </div>
      </div>
    )
}

export default Peer2Peer;