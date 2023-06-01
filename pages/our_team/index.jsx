import React from 'react'
import Image from 'next/image'
const index = () => {
  return (
    <div className='min-h-screen backdrop-blur-[2px]'>
      <div className='flex items-center justify-around sm:flex-col'>
        <div className=' '>
      <Image 
          src="https://res.cloudinary.com/ddtzbznea/image/upload/v1685637730/staff-removebg-preview_qptcvl.png"
          className="mt-6 transform transition-transform duration-500 ease-in-out hover:scale-90"
          height={2000}
          width={1800}
          alt="Nikhil Hotel & Caterers"
        />
        </div>
        <div className='text-center flex flex-col gap-4'>
          <h1 className='text-5xl font-semibold'>Our Team</h1>
          <div className='text-xl font-semibold flex flex-col gap-2'>
        <p>The team of the NIKHIL HOTEL & CATERER   ensuring the compliance of manpower & shifts which 
          will list out below will be done in an appropriate manner.</p>
          <p>Applicant shall work out the adequate deployment schedule as per the scope of 
            work and requirements.</p>
            <p>The manpower deployed is expected to work round the clock in three shifts of 8 hours each.</p>
            <ul>
              <li>	1st shift : 06.30 am to 02.30 pm</li>
              <li>2nd shift : 02.30 pm to 10.30 pm</li>
              <li>	3rd shift : 10.30 pm to 06.30 am</li>
            </ul>
            <p>Deployed manpower needs to mark their attendance three times a day through appropriate technology, iris / biometric recognition . </p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default index