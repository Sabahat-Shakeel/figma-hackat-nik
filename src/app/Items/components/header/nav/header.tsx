
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";

const Navb = () => {
 
return (
    <div>

<div className="flex gap-5 reveal ">
    <Image 
    
    src = "/images/logo.png"
    alt = "logo"
    width={40}
    height={40}
    className="pb-4 mt-5 lg:ml-10 ml-2
    "
    
    />


<ul className="portrait:hidden flex space-x-8 text-sm font-medium text-[#111111] p-4 mt-2"  >
<Link href="#">     
 <li>New & Featured</li> </Link>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Sale</li>
            <li>SNKRS</li>
          </ul>
          <div className="absolute right-12 flex items-center gap-4 mt-3">
            <div className="relative flex items-center bg-neutral-100 rounded-full lg:w-[140px] lg:h-[44px]  ">
            <IoIosSearch className='ml-2 md:w-6 md:h-6 w-4 h-4' />
              <span className="text-sm text-[#cccccc] lg:ml-7 portrait:px-6">Search</span>
            </div>
            <FaRegHeart className='md:w-6 md:h-6 w-4 h-4'/>
      <Link href = "/Items/components/cart">   
      <IoBagHandleOutline className='md:w-7 md:h-6 w-4 h-4'/></Link> 
          
          </div>

</div>

 
    </div>
  )
}

export default Navb