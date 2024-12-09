// 'use client'
// import { useEffect } from 'react';
// import ScrollReveal from 'scrollreveal';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';


export default function Hero() {
  // useEffect(() => {
  //   console.log(window.innerWidth)
  //   ScrollReveal().reveal(".reveal", {
  //     origin: "fade-in",
  //     distance: "50px",
    
    
  //     reset: true, 
     
  //   });
  // }, []);
 
  return (
    <div className="w-full p-2 overflow-x-hidden"  data-aos="fade-up-right"
    data-aos-easing="linear">
      {/* head */}
      <div className="reveal flex justify-center items-center w-full max-w-[1225px] mx-auto h-[98px] bg-[#F5F5F5] text-black ">
        <div className="h-[44px] flex flex-col justify-center items-center w-full p-2 ">
          <h3 className="reveal font-semibold text-xl text-center mt-2">Hello Nike App</h3>
          <div>
            <p className="text-[12px] font-normal mb-1 mt-1 text-center">
              Download the app to access everything Nike.
              <span className="font-medium underline ml-1">Get Your Great</span>
            </p>
          </div>
        </div>
      </div>

      {/* image */}
      <div className="flex justify-center items-center px-4 reveal">
      <Link href ={"/"}>  <Image
          src="/images/hero.png"
          alt="shoes"
          width={1380}
          height={700}
          className="w-full max-w-[1280px] h-auto sm:w-[100%] sm:h-[100%]"
        />
        </Link>
      </div>

      <div className="reveal flex justify-center items-center text-center flex-col p-10">
                <p className="text-sm font-semibold text-neutral-600">First Look</p>
                <h2 className=" text-4xl text-neutral-800 font-bold uppercase mt-5">Nike Air Max Pulse</h2>
                <p  className="text-md leading-5 w-[100%] pt-3 pb-2 text-center mt-5">
                Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
                —designed to push you past your limits and help you go to the max.
           
                </p>
                <div className="flex justify-center text-black items-center mt-7 gap-3 hover:opacity-85">
                  
                  <button className= 'bg-slate-900 hover:opacity-75 text-neutral-200 px-4 py-2 rounded-full'>Notify Me</button>
                <button className='bg-slate-900 hover:opacity-75 text-neutral-200 px-4 py-2 rounded-full'>Shop Air Max</button></div>
            </div>
    </div>
  );
}
