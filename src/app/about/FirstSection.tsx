import React from 'react';


const FirstSection = () => {
    return (
        <div className="bg-white  grid grid-cols-2   justify-between  place-items-center lg:p-20 p-10 mt-[80px]">
            <div className="h-[354px] w-full col-span-2 lg:col-span-1 mx-20 rounded-[40px] bg-[url('/public/assets/images/about-1.png')] bg-cover bg-center">
            </div>
            <div className="col-span-2 lg:col-span-1 lg:p-10 p-5">
                <h1 className="lg:text-[64px] text-[32px]  font-[ubuntu] font-semibold text-[#4A9A71] mb-5">Who we are</h1>
                <p className="text-[20px] font-light text-[#38403A] text-justify leading-[30px] mb-5">We are a group of seasoned bankers with combined composite experience of over 50 years, spanning different aspects of banking. We have witnessed first-hand how difficult it is to access credit to finance individual/SME needs, leading to a widening gap between those that have and those that have not.</p>
                <p className="text-[20px] font-light text-[#38403A] text-justify leading-[30px] mb-5">At Riverbank Partners, we are looking to break that cycle by becoming your trusted partner in advancing that dream or aspiration of yours, and bridging the gap in society.</p>
                <p className="text-[20px] font-light text-[#38403A] text-justify">Watch video about us</p>
            </div>
            {/* <div class="xs:hidden sm:hidden">
                <span className="rounded-full w-5 h-5 bg-[#4A9A71] block mb-5"></span>
                <span className="rounded-full w-5 h-5 bg-[#4A9A71] block mb-5"></span>
                <span className="rounded-full w-5 h-5 bg-[#4A9A71] block mb-5"></span>
                <span className="rounded-full w-5 h-5 bg-[#4A9A71] block mb-5"></span>

            </div> */}
        </div>
    )
}

export default FirstSection;