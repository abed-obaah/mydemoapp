"use client";
import { useState } from 'react';
import { Drawer } from 'antd';
import { MailOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';
import Link from 'next/link'; 
// import logo from '../assets/images/logo.png'
import logo from '@/public/logo.png'
// import logoInverse from '../assets/images/logo-white.svg';
import logoInverse from '@/public/logo-white.svg';
import NavBar from './NavBar';
import Image from 'next/image';

const Header = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <div className='bg-white w-full p-5 pb-0 flex flex-col lg:px-[100px]'>
             <div className="flex justify-between">
              {/* Laptop and larger screens */}
              <div className="hidden xs:flex sm:flex col-span-5 flex flex-row lg:justify-start justify-between py-5">
                  <div className="flex flex-row justify-center">
                      <MailOutlined className="text-primary text-2xl" />
                      <div className="pl-5 flex flex-col">
                          <span className="text-primary-500 uppercase font-semibold text-sm text-[#AEAEAE] tracking-[0.215rem]">Email</span>
                          <a href="mailto:info@riverbank-partners.com" className="text-[11px] font-semibold hover:text-[#5BA36C]">info@riverbank-partners.com</a>
                      </div>
                  </div>
                  <div className="flex flex-row ml-8 justify-center">
                      <UserOutlined className="text-primary text-2xl"/>
                      <div className="pl-5 flex flex-col">
                          <span className="text-primary uppercase text-sm font-semibold text-[#AEAEAE] tracking-[0.215rem]">Support</span>
                          <a href="tel:+2347025007881" className="text-[11px] font-semibold hover:text-[#5BA36C]">+234 (0) 702 500 7881</a>
                      </div>
                  </div> 
              </div>

          <div className="hidden xs:block sm:block col-span-3 flex mb-5 flex-row justify-between justify-center place-items-center">
              {/* <MenuOutlined className="hidden sm:block xs:block text-2xl" onClick={showDrawer} /> */}
              <Image src={logo } width={159} height={82} alt="RiverBank Partners"/>
          </div>

          <div className="hidden md:flex lg:flex justify-end py-5">
              <Link href="/account/login" passHref>
                  <p className="p-4 px-11 text-sm bg-[#3D7F74] text-white font-semibold rounded-[15px] lg:rounded-full hover:bg-[#5BA36C] hover:text-white mr-5">Login</p>
              </Link>
              <Link href="/account/registration" passHref>
                  <p className="p-4 px-10 border-2 border-[#3D7F74] text-sm font-semibold rounded-[15px] text-[#3D7F74] hover:bg-[#3D7F74] hover:text-white lg:rounded-full">Sign Up</p>
              </Link>
          </div>

          {/* Mobile layout */}
          <div className="block xs:hidden sm:hidden">
              <div className="xs:col-span-3 sm:col-span-3 col-span-5 flex flex-row lg:justify-start justify-between py-5">
                  <div className="flex flex-row justify-center">
                      <MailOutlined className="text-primary text-2xl" />
                      <div className="pl-5 flex flex-col">
                          <span className="text-primary-500 uppercase font-semibold text-sm text-[#AEAEAE] tracking-[0.215rem]">Email</span>
                          <a href="mailto:info@riverbank-partners.com" className="text-[11px] font-semibold hover:text-[#5BA36C]">info@riverbank-partners.com</a>
                      </div>
                  </div>
                  <div className="flex flex-row ml-8 justify-center">
                      <UserOutlined className="text-primary text-2xl"/>
                      <div className="pl-5 flex flex-col">
                          <span className="text-primary uppercase text-sm font-semibold text-[#AEAEAE] tracking-[0.215rem]">Support</span>
                          <a href="tel:+2347025007881" className="text-[11px] font-semibold hover:text-[#5BA36C]">+234 (0) 702 500 7881</a>
                      </div>
                  </div> 
              </div>

                    <div className="xs:block sm:block col-span-3 flex mb-5 flex-row justify-between items-center">
                      <MenuOutlined className="sm:block xs:block text-2xl" onClick={showDrawer} />
                      <Image src={logo} width={159} height={82} alt="RiverBank Partners" />
                  </div>


              </div>
    </div>
            
            <div className='hidden md:block lg:block w-full'>
                <NavBar />
                <Drawer title={<Image src={logoInverse} width={159} height={82} alt="RiverBank Partners"/>} placement="left" headerStyle={{background:'#4A9A71'}} bodyStyle={{background:'#4A9A71', padding:0}} onClose={onClose} visible={visible}>
                    <Link href="/" passHref>
                        <p className="text-[13px]  block hover:bg-[#80b89c] text-[#505050] hover:text-white font-semibold p-5">Home</p>
                    </Link>
                    <Link href="/about" passHref>
                        <p className="text-[13px] block hover:bg-[#80b89c] text-[#505050] hover:text-white font-semibold p-5">About Us</p>
                    </Link>
                    <Link href="/blogs" passHref>
                        <p className="text-[13px] block hover:bg-[#80b89c] text-[#505050] hover:text-white font-semibold p-5">Our Blog</p>
                    </Link>
                    <Link href="/contact" passHref>
                        <p className="text-[13px] block hover:bg-[#80b89c] text-[#505050] hover:text-white font-semibold p-5">Contact Us</p>
                    </Link>
                    <Link href="/account/login" passHref>
                        <p className="text-[13px] block hover:bg-[#80b89c] text-[#505050] hover:text-white font-semibold p-5">Login</p>
                    </Link>
                    <Link href="/account/registration" passHref>
                        <p className="text-[13px] block hover:bg-[#80b89c] text-[#505050] hover:text-white font-semibold p-5">Sign Up</p>
                    </Link>
                </Drawer>
            </div>
        </div>
    );
};

export default Header;
