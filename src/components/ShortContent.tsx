"use client"
import React from 'react'
import SectionComponent from './SectionComponent';

import FinancingImg from '@/public/financing.svg'
import TransparentImg from '@/public/transparent.svg'
import SecureImg from '@/public/secure.svg'
import SpeedyImg from '@/public/speedy_loan.svg'


// import { useGetTestimonialsQuery } from '../../utils/frontendAPI';
// import SectionComponent from './SectionComponent';









const ShortContent = () => {
  const content = [
    {
      "image": FinancingImg,
      "title": "Tailored Financing",
      "content": "Need specific funding for your personal or business demands? Riverbank Partners Limited provides customized and tailored solutions for you."
    },
    {
      "image": TransparentImg,
      "title": "Transparent Pricing",
      "content": "Need specific funding for your personal or business demands? Riverbank Partners Limited provides customized and tailored solutions for you.",
    },
    {
      "image": SecureImg,
      "title": "Safe and Secure",
      "content": "Our systems are fully secure, providing you with the peace of mind to pursue your dreams safely.",
    },
    {
      "image": SpeedyImg,
      "title": "Speedy Loan Processing",
      "content": "We aim to process all requests within the shortest possible time. Want a loan today? Kindly login and apply."
    }
  ];

  return (
    <div className="lg:p-20 p-10">
        <p className='text-[#5C9575] text-[18px] font-semibold mb-2'>WHY US</p>
        <div className="flex lg:flex-row flex-col">
            <div>
                <p className="font-[ubuntu] text-[3rem] lg:text-left font-semibold lg:leading-[80px] leading-[40px] mb-10">Reasons to choose us</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {content.map(item => <SectionComponent key={item.title} image={item.image} title={item.title} text={item.content} />)}
            </div>
        </div>
    </div>
  );
};

export default ShortContent;