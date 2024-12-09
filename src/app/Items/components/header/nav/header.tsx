"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { useEffect } from "react";

const Navb = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);
return (
    <div>

<div className="flex gap-5  ">
    <Image 
    
    src = "/images/logo.png"
    alt = "logo"
    width={40}
    height={40}
    className="size-9 pb-4 mt-5 lg:ml-10 ml-2
    "
         data-aos="fade-up-right"
        data-aos-easing="linear"
    
    />


<ul className="portrait:hidden flex space-x-8 text-sm font-medium text-[#111111] p-4 mt-2"      
data-aos="fade-up-right"
        data-aos-easing="linear" >
<Link href="#">     
 <li>New & Featured</li> </Link>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Sale</li>
            <li>SNKRS</li>
          </ul>
          <div className="absolute right-12 flex items-center gap-4 mt-3"      data-aos="fade-up"
        data-aos-easing="linear">
            <div className="relative flex items-center bg-neutral-100 rounded-full w-[140px] h-[44px]  ">
            <IoIosSearch className='ml-2 md:w-6 md:h-6 w-4 h-4' />
              <span className="text-sm text-[#cccccc] lg:ml-7 portrait:px-6">Search</span>
            </div>
            <FaRegHeart className='md:w-6 md:h-6 w-5 h-5'/>
      <Link href = "/Items/components/cart">   
      <IoBagHandleOutline className='md:w-7 md:h-6 w-5 h-5'/></Link> 
          
          </div>

</div>

 
    </div>
  )
}

export default Navb