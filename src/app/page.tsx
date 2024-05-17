import Image from "next/image";
import BaseLayout from "@/components/BaseLayout";
import HomeSlider from "@/components/HomeSlider"
import ShortContent from "@/components/ShortContent"
import HowItWorks  from "@/components/HowItWorks"
import OurServices from "@/components/OurServices"
import Peer2Peer from "@/components/Peer2Peer"
import Testimonial from "@/components/Testimonial"
import LoginBanner from "@/components/LoginBanner"
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <BaseLayout>
       <HomeSlider />
       <ShortContent />
    <HowItWorks />
    <OurServices />
    <Peer2Peer />
    <Testimonial />
    <LoginBanner />
    {/* <Footer/> */}
  </BaseLayout>
  );
}
