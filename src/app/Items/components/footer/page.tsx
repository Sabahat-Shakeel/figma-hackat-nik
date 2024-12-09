
import React from 'react'
import Link from 'next/link'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";




const Footer = () => {

  
  return (
    <footer className="reveal bg-black text-white/90 py-8 px-6">
    <div className="reveal container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {/* Column 1 */}
    <div>
      <h3 className="text-sm  mb-4 font-thin">FIND A STORE</h3>
      <ul className="space-y-2 text-sm">
        <li><Link href="#" className="hover:underline font-thin">BECOME A MEMBER</Link></li>
        <li><Link href="#" className="hover:underline font-thin">SIGN UP FOR EMAIL</Link></li>
        <li><Link href="#" className="hover:underline font-thin">Send Us feedback</Link></li>
        <li><Link href="#" className="hover:underline font-thin">STUDENTS DISCOUNT</Link></li>
      </ul>
    </div>

    {/* Column 2 */}
    <div>
      <h3 className="text-sm font-semibold mb-4">GET HELP</h3>
      <ul className="space-y-2 text-sm">
        <li><Link href="#" className="hover:underline text-gray-300/80">Order Status</Link></li>
        <li><Link href="#" className="hover:underline text-gray-300/80">Delivery</Link></li>
        <li><Link href="#" className="hover:underline text-gray-300/80">Returns</Link></li>
        <li><Link href="#" className="hover:underline text-gray-300/80">Payment Options</Link></li>
        <li><Link href="#" className="hover:underline text-gray-300/80">Contact Us on Nike.com Inquiries</Link></li>
        <li><Link href="#" className="hover:underline text-gray-300/80">Contact Us on All Other Inquiries</Link></li>
      </ul>
    </div>

    {/* Column 3 */}
    <div>
      <h3 className="text-sm font-semibold mb-4">ABOUT NIKE</h3>
      <ul className="space-y-2 text-sm">
        <li><Link href="#" className="hover:underline text-gray-300/80">News</Link></li>
        <li><Link href="#" className="hover:underline text-gray-300/80">Careers</Link></li>
        <li><Link href="#" className="hover:underline text-gray-300/80">Investors</Link></li>
        <li><Link href="#" className="hover:underline text-gray-300/80">Sustainability</Link></li>
      </ul>
    </div>

    {/* Column 4 (Social Media Icons) */}
    <div className="flex justify-end gap-4">
      <FaTwitter className="text-lg cursor-pointer text-[#6E7E7E]" />
      <FaFacebook className="text-lg cursor-pointer text-[#6E7E7E]" />
      <FaYoutube className="text-lg cursor-pointer text-[#6E7E7E]" />
      <FaInstagram className="text-lg cursor-pointer text-[#6E7E7E]" />
    </div>
  </div>

  {/* Bottom Section */}
  <div className="mt-8 border-t border-gray-700 pt-4">
    <div className="container mx-auto flex flex-wrap justify-between items-center text-xs text-gray-300/80">
      {/* Country and Copyright */}
      <div className="flex items-center gap-2 mb-4 md:mb-0">
        <IoLocationOutline className='text-white'/>
        <p className='text-gray-300/80'>India</p>
        <p>© 2023 Nike, Inc. All Rights Reserved</p>
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-4">
        <Link href="#" className="hover:underline">Guides</Link>
        <Link href="#" className="hover:underline">Terms of Sale</Link>
        <Link href="#" className="hover:underline">Terms of Use</Link>
        <Link href="#" className="hover:underline">Nike Privacy Policy</Link>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer