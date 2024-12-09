
import React from "react";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";


export default function ProductDetails() {

  
  return (
    <div className="reveal flex flex-col lg:flex-row items-center lg:items-start justify-between border p-4 rounded-lg bg-white shadow-md w-[90%] mx-auto mt-4 py-6">
      {/* Left Section - Image */}
      <div className="relative flex items-center justify-center w-full lg:w-1/3 reveal">
        <Image
          src="/images/pink.jpg"
          alt="shoesimg"
          className="w-full h-auto object-cover"
          width={300}
          height={300}
        />
      </div>

      {/* Right Section - Content */}
      <div className="lg:w-2/3 mt-4 lg:mt-0 lg:pl-6 text-center lg:text-left reveal">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Nike Air Force 1 PLT.AF.ORM
        </h2>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed sm:w-96">
         
    Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its &qout;inside out&qout;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.

 
        </p>
        <p className="text-lg font-bold text-gray-900 mb-4">₹ 8 695.00</p>
        <button className="flex items-center justify-center bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition duration-300 ">
          <CiShoppingCart className="w-6 h-6 mr-2" />
          Add to Cart
        </button>
      </div>
  
    </div>
    
  );
}