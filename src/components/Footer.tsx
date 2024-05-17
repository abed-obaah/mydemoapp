import React from 'react';
import Link from 'next/link'
import { FacebookFilled, InstagramFilled, TwitterOutlined } from '@ant-design/icons';
// import logo from '../assets/images/logo-white.svg';
import logo from '@/public/logo-white.svg'
import Image from 'next/image';
const Footer: React.FC = () => {
  return (
    <div className="grid grid-cols-12 pt-20 md:px-[150px] lg:px-[150px] w-full bg-[#292929] text-white">
      <div className="col-span-12 lg:col-span-4 md:pr-20 lg:pr-[150px] p-5 flex flex-col justify-center place-items-center">
        <div>
          <Image src={logo} width={150} height={150} alt="Riverbank Partner" />
          <p className="text-justify text-[#BABABA]">
            A Pan-African digital platform designed to help businesses and individuals fund their aspirational needs.
          </p>
        </div>
      </div>
      <div className="col-span-6 lg:col-span-2 flex flex-col place-items-center">
        <h3 className="text-[16px] font-semibold text-white pb-5">Quick Links</h3>
        <nav className="flex flex-col">
          <Link href="/" className="pb-4 text-[#BABABA] text-[14px] hover:text-[#fff]">
            Home
          </Link>
          <Link href="" className="pb-4 text-[#BABABA] text-[14px] hover:text-[#fff]">
            Services
          </Link>
          <Link href="" className="pb-4 text-[#BABABA] text-[14px] hover:text-[#fff]">
            How it works
          </Link>
        </nav>
      </div>
      <div className="col-span-6 lg:col-span-2 flex flex-col place-items-center">
        <h3 className="text-[16px] font-semibold text-white pb-5">Company</h3>
        <nav className="flex flex-col">
          <Link href="/about" className="pb-4 text-[#BABABA] text-[14px] hover:text-[#fff]">
            About Us
          </Link>
          <Link href="/contact" className="pb-4 text-[#BABABA] text-[14px] hover:text-[#fff]">
            Contact Us
          </Link>
          <Link href="/blog" className="pb-4 text-[#BABABA] text-[14px] hover:text-[#fff]">
            Our Blog
          </Link>
        </nav>
      </div>
      <div className="col-span-6 lg:col-span-2 flex flex-col place-items-center">
        <h3 className="text-[16px] font-semibold text-white pb-5">Social</h3>
        <nav className="flex flex-col">
          <a target="_blank" href="https://instagram.com/riverbankpartners?igshid=YmMyMTA2M2Y=" className="pb-4 text-[#BABABA] text-[14px] hover:text-[#fff] flex justify-start place-content-center">
            <InstagramFilled className="text-[#F2F9EF] text-[20px] mr-2" /> 
            Instagram
          </a>
          <a target="_blank" href="https://www.facebook.com/riverbank.oliyide" className="pb-4 text-[#BABABA] text-[14px] hover:text-[#fff] flex justify-start place-content-center">
            <FacebookFilled className="text-[#F2F9EF] text-[20px] mr-2" /> 
            Facebook
          </a>
          <a target="_blank" href="https://twitter.com/Riverbank_P?t=TJbWxIQXn2NQ0yG7N6vtdw&s=09" className="pb-4 text-[#BABABA] text-[14px] hover:text-[#fff] flex justify-start place-content-center">
            <TwitterOutlined className="text-[#F2F9EF] text-[20px] mr-2" /> 
            Twitter
          </a>
        </nav>
      </div>
      <div className="col-span-6 lg:col-span-2 flex flex-col place-items-center">
        <h3 className="text-[16px] font-semibold text-white pb-5">Legal</h3>
        <nav className="flex flex-col">
          <Link href="/privacy" className="pb-4 text-[#BABABA] text-[14px] hover:text-[#fff]">
            Privacy Policy
          </Link>
          <Link href="/terms" className="pb-4 text-[#BABABA] text-[14px] hover:text-[#fff]">
            Terms &amp; Condition
          </Link>
          <Link href="" className="pb-4 text-[#BABABA] text-[14px] hover:text-[#fff]">
            FAQ
          </Link>
        </nav>
      </div>
      <div className="col-span-12 border-t border-[#BABABA] mt-20">
        <p className="text-center py-10">Copyright © RiverBank Partners. 2022 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
