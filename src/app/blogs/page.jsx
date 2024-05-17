"use client";


import React from 'react';
import BaseLayout from '@/components/BaseLayout';
import Banner from '@/components/BlogBanner';
import BlogSpotlightDisplay from '@/components/BlogSpotlightDisplay';
import BlogCard from '@/components/BlogCard';

const Blogs = () => {
    return (
        <BaseLayout>
            <Banner />
            <BlogSpotlightDisplay />
            <BlogCard />
        </BaseLayout>
    );
};

export default Blogs;
