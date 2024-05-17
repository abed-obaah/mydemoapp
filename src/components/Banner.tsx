import React from 'react';
import Image from 'next/image';
// import aboutImage from '../../assets/about.png'; // Import the image here
import aboutImage from '@/public/about.png'; // Import the image here

const Banner = () => {
    return (
        <div className="relative h-[495px] bg-[#355774] rounded-b-[50px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image src={aboutImage}   alt="About Image" layout="fill" objectFit="cover" />
            </div>
            {/* Overlay */}
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20">
                <h6 className="uppercase text-[18px] font-semibold text-white">Know More</h6>
                <h1 className="text-[64px] font-semibold font-[ubuntu] text-white">About Us</h1>
            </div>
        </div>
    )
}

export default Banner;
