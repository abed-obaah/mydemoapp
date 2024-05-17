"use client";

import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Spin } from 'antd';
import Image from 'next/image';
import { CommentOutlined, EyeOutlined } from '@ant-design/icons';

// Define an interface for the blog object
interface Blog {
    image: string;
    blog_title: string;
    date_created: string;
    total_comments: number;
    total_views: number;
  }
  
  // Your component
  const BlogSpotlightDisplay = () => {
    const [spotlight, setSpotlight] = useState<Blog[]>([]); // Specify the type for spotlight state
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Fetch data from the API endpoint
      fetch('https://loantest-api.rivbnk.tradeofficeapps.com/spotlight/')
        .then(response => response.json())
        .then((data: Blog[]) => { // Type data as Blog[]
          setSpotlight(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching spotlight data:', error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <Spin spinning={true} className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-8 p-10 px-[68px]"></Spin>;
    } else if (spotlight.length === 3) {
      return (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-8 p-10 px-[68px]">
            {/* Render spotlight blogs */}
            {spotlight.map((blog, index) => (
              <div className={index === 0 ? '' : 'flex flex-col lg:px-10'} key={index}>
                <div className={index === 0 ? 'w-full h-[466px] xs:h-[300px] sm:h-[300px] bg-black rounded-[20px]' : 'lg:basis-2/5 basis-full w-full h-[200px] bg-black rounded-[20px]'}>
                  <Image src={blog.image} alt={blog.blog_title} className="shadow-lg rounded max-w-full h-full align-middle border-none" />
                </div>
                <div className="px-5 py-5">
                  <span className='text-[#4A9A71]'>{moment(blog.date_created).fromNow()}</span>
                  <h3 className="font-[ubuntu] text-[#292929] text-[24px] font-bold">{blog.blog_title}</h3>
                  <div className='flex pt-3'>
                    <span className='text-[#999999] text-[16px] flex place-items-center mr-[30px]'><CommentOutlined />&nbsp; {blog.total_comments}</span>
                    <span className='text-[#999999] text-[16px] flex place-items-center'><EyeOutlined />&nbsp; {blog.total_views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      );
    } else {
      return <div>No spotlight blogs available.</div>;
    }
  };
  
  export default BlogSpotlightDisplay;
 
