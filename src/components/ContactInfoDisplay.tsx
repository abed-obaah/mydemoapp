"use client";
import React from 'react'
// import {useSendMessageMutation} from '../../services/frontendAPI'
import {MobileOutlined, WhatsAppOutlined} from '@ant-design/icons'
// import { Formik, Form, Field, ErrorMessage } from 'formik';
import openNotification from '@/components/Notification';
import Banner from '@/components/Banner';
import { Spin } from 'antd';

const ContactInfoDisplay = () => {
    return (
        <div className="lg:flex-row lg:p-20 lg:px-[300px] p-10">
        <h1 className="text-[40px] font-semibold font-[ubuntu] mb-8 lg:mb-0">We are always available</h1>
        <div className="mt-10 flex justify-around lg:flex-row flex-col">
          <div className="flex flex-col lg:flex-row lg:mr-8">
            <span role="img" aria-label="mobile" className="anticon anticon-mobile text-[88px] text-[#BBBBBB] lg:mr-4 lg:mb-0 mb-4">
              <svg viewBox="64 64 896 896" focusable="false" data-icon="mobile" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zm-8 824H288V134h448v752zM472 784a40 40 0 1080 0 40 40 0 10-80 0z"></path>
              </svg>
            </span>
            <div className="flex flex-col">
              <h4 className="text-[20px] font-semibold mb-2">+234 (0) 702 500 7881</h4>
              <span className="text-[18px] mb-5">Mon - Fri 9am - 6pm <br /> Sat && Sun  11am - 2pm</span>

              <a href="tel:+2347025007881" className="mb-4 py-4 px-10 bg-[#4A9A71] hover:text-white text-[16px] text-white font-semibold text-center block rounded-[10px]">Call Now</a>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <span role="img" aria-label="whats-app" className="anticon anticon-whats-app text-[88px] text-[#BBBBBB] lg:mr-4 lg:mb-0 mb-4">
              <svg viewBox="64 64 896 896" focusable="false" data-icon="whats-app" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-.4-13.7-.4-21.1-.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z"></path><path d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"></path>
              </svg>
            </span>
            <div className="flex flex-col">
              <h4 className="text-[20px] font-semibold mb-2">Chat with us</h4>
              <span className="text-[18px] mb-5">Everyday <br /> 9am - 8pm</span>
              <a href="tel:+2348018478894" className="py-4 px-14 bg-[#4A9A71] hover:text-white text-[16px] text-white font-semibold text-center block rounded-[10px]">Start a Chat</a>
            </div>
          </div>
        </div>
      </div>

    );
};

export default ContactInfoDisplay;
