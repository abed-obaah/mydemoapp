"use client";
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { Spin } from 'antd';
import { CommentOutlined, EyeOutlined } from '@ant-design/icons';
import axios from 'axios';

const BlogCard = () => {
    const [page, setPage] = useState(1);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, [page]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://loantest-api.rivbnk.tradeofficeapps.com/blog?page=${page}`);
            setBlogs(response.data.results);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
        setLoading(false);
    };

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 px-[68px] pt-10">
                {blogs.map((blog) => (
                    <div className="col-span-1" key={blog.title}>
                        <div className="w-full h-[300px] rounded-[10px]">
                            <img src={blog.cover_image} alt={blog.title} className="shadow-lg rounded max-w-full h-[300px] align-middle border-none" />
                        </div>
                        <div className="py-5">
                            <span className="text-[#4A9A71]">Published <span>{moment(blog.date_created).startOf('ss').fromNow()}</span></span>
                            <h3 className="font-[ubuntu] text-[#292929] text-[20px] font-bold">
                                <Link href={`/blog/${blog.id}`}>
                                    <a>{blog.title}</a>
                                </Link>
                            </h3>
                            <div className="flex pt-3">
                                <span className="text-[#999999] text-[16px] flex place-items-center mr-[30px]">
                                    <CommentOutlined /> &nbsp; {blog.total_comments}
                                </span>
                                <span className="text-[#999999] text-[16px] flex place-items-center">
                                    <EyeOutlined /> {blog.total_views}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
                {loading && <Spin spinning={true} className="lg:col-span-4 md:col-span-2 col-span-1 text-center"></Spin>}
                {!loading && blogs.length === 0 && (
                    <div className="lg:col-span-4 md:col-span-2 col-span-1 p-10 h-[400px] text-[32px] flex place-items-center justify-center">
                        <span>No blogs found.</span>
                    </div>
                )}
            </div>
            <div className="flex justify-center my-10">
                {blogs.next && (
                    <button
                        className="rounded-full bg-[#4A9A71] px-10 py-3 font-semibold text-[20px] text-white"
                        type="button"
                        onClick={() => setPage(prevstate => prevstate + 1)}
                    >
                        Next
                    </button>
                )}
                {blogs.previous && (
                    <button
                        className="rounded-full bg-[#4A9A71] px-10 py-3 font-semibold text-[20px] text-white"
                        type="button"
                        onClick={() => setPage(prevstate => prevstate - 1)}
                    >
                        Previous
                    </button>
                )}
            </div>
        </>
    );
};

export default BlogCard;
