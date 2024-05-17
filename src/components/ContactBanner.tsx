import React from 'react';
import Image from 'next/image';
// import ContactImage from '/public/assets/images/contact.png'; // Import the image here
import ContactImage from '@/public/contact.png'; // Import the image here

const Banner = () => {
    return (
        <div className="relative h-[495px] bg-[#355774] rounded-b-[50px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image src={ContactImage}  alt="About Image" layout="fill" objectFit="cover" />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20">
            <h6 className="uppercase text-white text-[18px] font-semibold text-center">WE ARE ONE STEP AWAY</h6>
                <h1 className="lg:text-[64px] text-[32px] text-white font-semibold font-[ubuntu] text-center">Contact Us</h1>
            </div>
        </div>
    )
}

export default Banner;
