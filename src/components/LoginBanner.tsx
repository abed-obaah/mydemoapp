import React from 'react';
import Link from 'next/link';
import bannerImage from '@/public/banner.png';
import Image from 'next/image';

const LoginBanner: React.FC = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-5 lg:p-10 md:p-10 mt-[30px] mb-10">
        {/* Left Side */}
        <div className="col-span-2 lg:col-span-2 p-10 bg-[#355774] rounded-tl-[150px] rounded-bl-[40px] xs:rounded-b-none sm:rounded-b-none h-[500px]">
          <h1 className="lg:text-[3.0rem] text-[2.2rem] font-[ubuntu] font-semibold text-white mb-5 pt-10 pl-10">
            Join thousands that have trusted us with their finance
          </h1>
          <a href="#/account/registration" className="rounded-full bg-[#4A9A71] p-3 text-[18px] ml-10 mb-[100px] text-white">Create Account</a>
        </div>
        
        {/* Right Side */}
        <div className="col-span-2 lg:col-span-3 h-[500px] w-full relative overflow-hidden">
          <Image src={bannerImage} alt="Banner Image" layout="fill" objectFit="cover" />
        </div>
      </div>
    );
};

export default LoginBanner;
