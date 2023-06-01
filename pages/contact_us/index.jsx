import React from 'react'
import Image  from 'next/image';

const index = () => {
  return (
    <div className='min-h-[91vh] flex md:flex-col sm:flex-col mt-[64px] backdrop-blur-[2px]'>
      <div className="w-1/2 bg-blue-400 flex justify-center items-center">
        <Image
          src={'https://res.cloudinary.com/dk8ign4oc/image/upload/v1685454433/contact-us_xe2ut6.png'}
          className={`h-2/3 w-auto`}
          height={1500}
          width={1500}
          alt="Nikhil Hotel & Caterers"
        />
      </div>
      <div className="w-2/3 flex flex-col justify-around items-center">
        <div className="text-7xl font-bold">Contact Us</div>
        <div className="text-3xl border-2 border-white flex items-start flex-col rounded-3xl backdrop-blur-sm">
          <div className='flex p-8 justify-center items-center'>
             <Image
              src={'https://res.cloudinary.com/dk8ign4oc/image/upload/v1685454434/mail_c0undg.png'}
              className={`h-[60px] w-auto`}
              height={1500}
              width={1500}
              alt="Nikhil Hotel & Caterers"
            />
            <div className='flex flex-col p-2 items-start'>
              <div className="text-3xl">E-mail</div>
              <a className="block text-xl font-bold" target={'_blank'} href='mailto:nikita'>xxxxxxxxx@gmail.com</a>
            </div>
          </div>
          <div className='flex p-8 items-center' > 
          <Image
              src={'https://res.cloudinary.com/dk8ign4oc/image/upload/v1685454435/telephone_z1vcib.png'}
            className={`h-[60px] w-auto`}
            height={1500}
            width={1500}
            alt="Nikhil Hotel & Caterers"
          />
            <div className='flex flex-col p-2 items-start'>
              <div className="text-3xl">Telephone</div>
              <a className="block text-xl font-bold" target={'_blank'} href='tel:xxxxxxxx'>xxxx-xxx-xxx</a>
            </div>
          </div>
          <div className='flex p-8 items-center' > 
          <Image
              src={'https://res.cloudinary.com/dk8ign4oc/image/upload/v1685454430/address_pilnce.png'}
            className={`h-[60px] w-auto`}
            height={1500}
            width={1500}
            alt="Nikhil Hotel & Caterers"
          />
            <div className='flex flex-col p-2 items-start'>
              <div className="text-3xl">Address</div>
              <a className="block text-xl font-bold" target={'_blank'} href='https://goo.gl/maps/noroecAjqMYHXuASA'>34, Khasmahal, Parsudih<br/> Jamshedpur, Jharkhand<br/> 831002</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index