import React from 'react';



const SecondSection = () => {
    return (
        <div className="bg-white grid grid-cols-2 justify-between  place-items-center lg:p-20 p-10  mt-[30px]">

            {/* <div class="xs:hidden sm:hidden">
                <span className="rounded-full w-5 h-5 bg-[#4A9A71] block mb-5"></span>
                <span className="rounded-full w-5 h-5 bg-[#4A9A71] block mb-5"></span>
                <span className="rounded-full w-5 h-5 bg-[#4A9A71] block mb-5"></span>
                <span className="rounded-full w-5 h-5 bg-[#4A9A71] block mb-5"></span>

            </div> */}
            
            <div className="col-span-2 lg:col-span-1 p-10 lg:pr-[150px]">
                <h1 className="lg:text-[64px] text-[32px]  font-[ubuntu] font-semibold text-[#4A9A71] mb-5">Our mission</h1>
                <p className="text-[20px] font-light text-[#38403A] text-justify leading-[30px] mb-5">We are on a mission to empower Nigerians in particular and Africans in general to achieve their dreams through easy access to finance, releasing them to live a life of prosperity and create a value chain of wealth.</p>
                <p className="text-[20px] font-light text-[#38403A] text-justify">Watch video about us</p>
            </div>
            <div className="h-[354px] w-full col-span-2 lg:col-span-1 mx-20 rounded-[40px] bg-[url('/public/assets/images/about-2.png')] bg-cover bg-center">
            </div>
        </div>
    )
}
export default SecondSection;