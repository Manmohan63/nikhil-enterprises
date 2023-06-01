import React from 'react'
import Image from 'next/image';
import logo from '../public/logo.png'
import Link from 'next/link';
import { FaHome } from 'react-icons/fa'
import { RiInformationFill } from 'react-icons/ri'
import { RiContactsBook2Fill } from 'react-icons/ri'
import { RiTeamFill } from 'react-icons/ri'
import { useRouter } from 'next/router';

const Navbar = () => {
  const router= useRouter();
  return (
    <div className='flex border-b-2 border-black justify-between items-center fixed top-0 left-0 right-0 bg-blue-300 transition-all ease-in-out duration-20 z-10'>
      <Image
        src={logo}
        className={`h-[64px] w-auto`}
        height={1500}
        width={1500}
        alt="Nikhil Hotel & Caterers"
      />
      <div className="flex justify-around w-3/6">
        <Link className={`${router.pathname==='/'?" bg-[#f1dabf] text-blue-700 -translate-y-1 ":''} p-2 transition-all ease-in-out duration-20  flex justify-between items-center rounded-lg hover:bg-[#f1dabf] hover:text-blue-700 hover:-translate-y-1`} href='/'><FaHome /><span className='p-1'>Home</span></Link>
        <Link className={`${router.pathname ==='/about_us'?" bg-[#f1dabf] text-blue-700 -translate-y-1 ":''} p-2 transition-all ease-in-out duration-20  flex justify-between items-center rounded-lg hover:bg-[#f1dabf] hover:text-blue-700 hover:-translate-y-1`} href='/about_us'><RiInformationFill /><span className='p-1'>About Us</span></Link>
        <Link className={`${router.pathname==='/our_team'?" bg-[#f1dabf] text-blue-700 -translate-y-1 ":''} p-2 transition-all ease-in-out duration-20  flex justify-between items-center rounded-lg hover:bg-[#f1dabf] hover:text-blue-700 hover:-translate-y-1`} href='/our_team'><RiTeamFill /><span className='p-1'>Our Team</span></Link>
        <Link className={`${router.pathname==='/contact_us'?" bg-[#f1dabf] text-blue-700 -translate-y-1 ":''} p-2 transition-all ease-in-out duration-20  flex justify-between items-center rounded-lg hover:bg-[#f1dabf] hover:text-blue-700 hover:-translate-y-1`} href='/contact_us'><RiContactsBook2Fill /><span className='p-1'>Contact Us</span></Link>
      </div>
    </div>
  )
}

export default Navbar