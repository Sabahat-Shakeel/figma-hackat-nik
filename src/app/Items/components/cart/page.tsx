import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";
export default function Cart() {



  return (
    <div className="reveal min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white p-6">
        {/* Bag Section */}
        <div className="grid grid-cols-3 gap-6">
          {/* Bag Items */}
          <div className="col-span-3 lg:col-span-2">
            <div className="bg-gray-300/40 p-4">
            <h1 className="font-semibold text-black/80 reveal">Free delivery</h1>
            <p className="reveal">Applies to order of ₹ 14000.00 more. <span className=" ml-5 font-semibold underline underline-offset-2">Views detail</span></p>
            </div>
            <h2 className="text-2xl mt-5 font-bold mb-4">Bag</h2>
            {/* Item 1 */}
            <div className=" reveal flex items-center justify-between border-b pb-4 mb-4">
              <Image
                src="/images/G1.png"
                alt="Nike Dri-FIT ADV TechKnit Ultra"
                width={100}
                height={100}
                className="w-24 h-24 rounded-md border"
              />
              <div className="ml-4 flex-1">
                <h3 className="font-medium text-gray-800">
                  Nike Dri-FIT ADV TechKnit Ultra
                </h3>
                <p className="text-sm text-gray-600">Men&apos;s Short-Sleeve Running Top</p>
                <p className="text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
                <p className="text-sm text-gray-500">Size: L <span className="lg:ml-11">Quantity 1</span></p>
                <div className="flex mt-6 gap-4">
                <FaRegHeart     className="w-6 h-6"/>
               <RiDeleteBinLine className="w-6 h-6"/>
               </div>
             
              </div>
              <div className="text-right">
                <p className="font-medium">₹ 3,895.00</p>
               
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center justify-between border-b pb-4 mb-4 pl-16">
              
              <div className="ml-10 lg:flex-1">
                <h3 className="font-medium text-gray-800 ">Nike Air Max 97 SE</h3>
                <p className="text-sm text-gray-600">Men&apos;s Shoes</p>
                <p className="text-sm text-gray-500">Flat Pewter/Light Bone/Black/White</p>
                <p className="text-sm text-gray-500">Size: 8 <span className="lg:ml-11">Quantity 1</span></p>
               <div className="flex mt-6 gap-4">
                <FaRegHeart     className="w-6 h-6"/>
               <RiDeleteBinLine className="w-6 h-6"/>
               </div>
                
              </div>
              <div className="text-right">
                <p className="font-medium lg:text-base">₹ 16,995.00</p>
               
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className=" rounded-lg p-6 ">
            <h2 className="text-lg font-bold mb-4">Summary</h2>
            <div className="lg:flex lg:justify-between mb-2">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-medium">₹ 20,890.00</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-gray-600">Estimated Delivery & Handling</p>
              <p className="font-medium">Free</p>
            </div>
            <div className="lg:flex lg:justify-between text-lg font-bold border-t pt-4">
              <p>Total</p>
              <p>₹ 20,890.00</p>
            </div>
            <button className="reveal lg:w-full bg-black text-white font-medium lg:py-3 py-2 px-12 rounded-full mt-4">
              Member Checkout
            </button>
          </div>
        </div>

        {/* Free Delivery Section */}
        <div className="mt-6 text-sm text-gray-500">
          Free Delivery applies to orders of ₹ 14,000.00 or more.{' '}
          <a href="#" className="text-blue-500 hover:underline">
            View details
          </a>
        </div>
      </div>
    </div>
  );
}


