import React from 'react'
import Image from 'next/image'
import Marquee from "react-fast-marquee";
import logo_big from '../public/logo-big.png'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Link from 'next/link';

const Home = () => {
    return (
        <div className='backdrop-blur-[2px]'>
            <div className='flex justify-around items-center text-2xl min-h-screen '>
                <Image
                    src={'https://res.cloudinary.com/dk8ign4oc/image/upload/v1685454430/animated-chef_ziflag.png'}
                    className={`w-[35rem] aspect-square animate-bouncing-back m-0 p-0 `}
                    height={1500}
                    width={1500}
                    alt="Nikhil Hotel & Caterers"
                />
                <p className='text-center w-1/2 p-4 text-2xl '>
                    Welcome to<span className='font-bold'> Nikhil Hotel & Caterer</span>, where culinary excellence meets unmatched hospitality. With a proud legacy of over 10 years in the catering and restaurant industry, we have become synonymous with exceptional dining experiences and top-notch catering services.<br /><br />
                    Join us at Nikhil Hotel & Caterer and embark on a gastronomic journey that celebrates the art of food and hospitality. We look forward to serving you and exceeding your expectations at every turn.<br /><br />
                    <Link href='/contact_us' className='h-[30px] p-2 bg-blue-300 border-2 border-black rounded-xl'>Contact Us <HiArrowNarrowRight className='animate-bouncing-backX inline' /></Link>
                </p>
            </div>
            <Marquee
                loop={0}
                speed={30}
                gradient={false}
                autoFill={true}
                className={'border-y-8 border-black bg-black'}
            >
                <Image
                    src={'https://res.cloudinary.com/dk8ign4oc/image/upload/v1685454432/food4_gdcnxu.jpg'}
                    height={200}
                    width={200}
                    alt="Nikhil Hotel & Caterers"
                    className='border-2 border-black'
                />
                <Image
                    src={'https://res.cloudinary.com/dk8ign4oc/image/upload/c_thumb,w_200,g_face/v1685454433/food1_ubnvln.jpg'}
                    height={200}
                    width={200}
                    alt="Nikhil Hotel & Caterers"
                    className='border-2 border-black'
                />
                <Image
                    src={'https://res.cloudinary.com/dk8ign4oc/image/upload/v1685454433/food5_zbilir.jpg'}
                    height={200}
                    width={200}
                    alt="Nikhil Hotel & Caterers"
                    className='border-2 border-black'
                />
                <Image
                    src={'https://res.cloudinary.com/dk8ign4oc/image/upload/v1685454433/food3_hdgoj0.jpg'}
                    height={200}
                    width={200}
                    alt="Nikhil Hotel & Caterers"
                    className='border-2 border-black'
                />
            </Marquee>
            <div className='flex'>
                <Link className='flex justify-center items-center w-1/3 h-28 rounded-xl text-2xl m-2 border-2 border-black bg-blue-300' href='/about_us'>About Us &nbsp; <HiArrowNarrowRight className='animate-bouncing-backX inline' /></Link>
                <Link className='flex justify-center items-center w-1/3 h-28 rounded-xl text-2xl m-2 border-2 border-black bg-blue-300' href='/our_team'>Our Team &nbsp; <HiArrowNarrowRight className='animate-bouncing-backX inline' /></Link>
                <Link className='flex justify-center items-center w-1/3 h-28 rounded-xl text-2xl m-2 border-2 border-black bg-blue-300' href='/contact_us'>Contact Us &nbsp; <HiArrowNarrowRight className='animate-bouncing-backX inline' /></Link>
            </div>
        </div>
    )
}

export default Home