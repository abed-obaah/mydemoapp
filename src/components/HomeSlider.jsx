"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import sliderBgImage from '../../assets/images/slider-bg-image.png';
import sliderBgImage from '../../public/slider-bg-image.png';
// import sliderBgImage from '@/'

const HomeSlider = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 h-[696px] lg:mb-0'>
      {/* Content */}
      <div className="col-span-2 lg:col-span-1 flex flex-col justify-center bg-[#3D7F74] rounded-bl-[50px] lg:rounded-br-[0px] p-[100px] xs:p-[20px]">
        <h1 className="font-[ubuntu] lg:text-[64px] text-[32px] lg:leading-[70px] leading-[35px] font-semibold text-white">Gets simple instant loans with zero paperwork</h1>
        <p className="text-[18px] text-white mt-7 font-semibold">Live your best life with zero worries</p>
        <Link href="/register" className="p-4 md:p-2 mt-7 text-center w-[200px] px-10 border-2 border-white text-[16px] font-semibold hover:text-white text-white rounded-full">Get Started</Link>
      </div>

      {/* Background Image */}
      <div className="hidden lg:block lg:col-span-1 rounded-br-[50px]">
        <div className="relative h-[696px]">
          <Image src={sliderBgImage}  alt="Slider Background Image" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
