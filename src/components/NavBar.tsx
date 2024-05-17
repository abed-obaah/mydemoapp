import React from 'react';
import { MailOutlined, UserOutlined, SearchOutlined, MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';

import { Drawer } from 'antd';

const NavBar = () => {
    return (
        <div className='grid grid-cols-3 gap-4 border-t mt-2'>
            <div className="col-span-2 place-self-end p-5">
                <Link href="/" className="text-sm hover:text-[#3D7F74] font-semibold p-5">Home</Link>
                <Link href="/about" className="text-sm hover:text-[#3D7F74] font-semibold p-5">About Us</Link>
                <Link href="/blogs" className="text-sm hover:text-[#3D7F74] font-semibold p-5">Our Blog</Link>
                <Link href="/contact" className="text-sm hover:text-[#3D7F74] font-semibold p-5">Contact Us</Link>
            </div>
            <div className="col-span-1 p-4 flex flex-row justify-end mr-[60px]">
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <SearchOutlined className="text-[14px] pl-2 pr-3"/>
                    </div>
                    <input type="text" className="bg-[#F2F9EF] border border-gray-300 text-gray-900 text-[12px] rounded-full focus:ring-[#3D7F74] focus:border-[#3D7F74] block w-full pl-10 p-1.5  " placeholder="search"/>
                </div>                
            </div>
        </div>
    );
};

export default NavBar;
