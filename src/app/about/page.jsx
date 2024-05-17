"use client";

import React from 'react';
import BaseLayout from '@/components/BaseLayout'
import LoginBanner from '@/components/LoginBanner'
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import Banner from '@/components/Banner';

const About = () => {
  return (
    <BaseLayout>
        <Banner />
        <FirstSection />
        <SecondSection />
        <LoginBanner />
    </BaseLayout>
  )
}

export default About;
