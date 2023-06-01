import React from 'react'
import Image from 'next/image'
import logo_big from '../../public/logo-big.png'

const index = () => {
  return (
    <div className='min-h-screen backdrop-blur-[2px]'>
      <div className='flex justify-around items-center text-2xl min-h-screen font-bold'>
        <Image
          src={logo_big}
          className={`h-1/2 w-auto`}
          height={1500}
          width={1500}
          alt="Nikhil Hotel & Caterers"
        />
        <p className='text-center w-1/2 p-4'> At Nikhil Hotel & Caterer, we take pride in our well-trained and experienced staff who are dedicated to providing you with the highest level of service. Whether it&apos;s catering for governmental or non-governmental organizations, hostels, events, or government hospitals, we have the expertise to meet your needs. We understand the importance of your requirements and have the financial strength to ensure that every detail is handled with utmost care and precision. <br /><br />

          Step into our world of culinary delights and experience a fusion of flavors that will tantalize your taste buds. From our meticulously crafted menu to our elegant and inviting ambiance, we strive to create an unforgettable dining experience for our esteemed guests.<br /><br /></p>
      </div>
      <div className='flex justify-around items-center text-2xl min-h-screen font-bold'>
        <Image
          src={'https://res.cloudinary.com/dk8ign4oc/image/upload/v1685454431/cleaning_ezpulv.png'}
          className={`h-1/2 w-auto`}
          height={500}
          width={500}
          alt="Nikhil Hotel & Caterers"
        />
        <p className='text-center w-1/2 p-4'>
          We promise to deliver sanitary food on schedule and in accordance with the terms of the contract, and we&apos;ll keep the kitchen clean and maintain a consistent procedure for food preparation.
        </p>
      </div>
      <div className='flex justify-around items-center text-2xl min-h-screen font-bold'>
        <p className='text-center w-1/2 p-4'>
          At Nikhil Hotel & Caterer, we take pride in our well-trained and experienced staff who are dedicated to providing you with the highest level of service. Whether it&apos;s catering for governmental or non-governmental organizations, hostels, events, or government hospitals, we have the expertise to meet your needs. We understand the importance of your requirements and have the financial strength to ensure that every detail is handled with utmost care and precision. <br /><br />

          Step into our world of culinary delights and experience a fusion of flavors that will tantalize your taste buds. From our meticulously crafted menu to our elegant and inviting ambiance, we strive to create an unforgettable dining experience for our esteemed guests.<br /><br />

          Join us at Nikhil Hotel & Caterer and embark on a gastronomic journey that celebrates the art of food and hospitality. We look forward to serving you and exceeding your expectations at every turn.
        </p>
        <Image
          src={logo_big}
          className={`h-1/2 w-auto`}
          height={1500}
          width={1500}
          alt="Nikhil Hotel & Caterers"
        />
      </div>
      <div className='flex justify-around items-center text-2xl min-h-screen font-bold'>
        <Image
          src={logo_big}
          className={`h-1/2 w-auto`}
          height={1500}
          width={1500}
          alt="Nikhil Hotel & Caterers"
        />
        <p className='text-center w-1/2 p-4'>We promise to deliver sanitary food on schedule and in accordance with the terms of the contract, and we&apos;ll keep the kitchen clean and maintain a consistent procedure for food preparation.<br /><br />We have a wide variety of equipment in sufficient quantities to support your organisation, and we make sure that we will continue to do so throughout the time by upgrading or purchasing new equipment as needed. And we promise to come into agreements with different suppliers of raw food items in accordance with the demands.</p>
      </div>
      <p>As we stated in the introduction, we have a sufficient number of employees—more than 50—who are knowledgeable and skilled in this industry (catering and restaurants).  Additionally, they are prepared and equipped to hire both skilled and unskilled workers as needed.</p>
      <p>We  are ready to hire and engage  qualifies professional and industry experienced person to provide and give educate periodic and continual training of  specified hours to maintain quality and standard of services .  and ensuring that the documentary evidence  of trainings will  be submitted every 3 months .</p>
      <p>To provide better management and efficient services, we conduct routine monitoring of the workforce and operations.</p></div>
  )
}

export default index