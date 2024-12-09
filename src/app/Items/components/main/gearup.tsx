
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image";

import Link from 'next/link';

export function GearUp() {






  return (
    <div className="reveal container mx-auto px-4 py-8">
      <h1 className="reveal text-xl font-semibold lg:mb-8">Gear Up</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
        <section >
          <div className="flex  items-center mb-4 lg:ml-80  mt-3">
            <h2 className="lg:text-xl text-xs ">Shop Men&apos;s</h2>
            <div className="reveal flex lg:space-x-2 ml-1">
              <ChevronLeft className="w-5 h-5 cursor-pointer  bg-slate-100" />
              <ChevronRight className="w-5 h-5 cursor-pointer bg-slate-100" />
            </div>
          </div>
        <Link href ={"/components/cartpage"} >
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4">
           <div>
            <Image
            src = "/images/G1.png"
            alt = 'gearimg'
            width={1280}
            height={700}
            
            
            />
           </div>
           <div>
            <Image
            src = "/images/G2.png"
            alt = 'gearimg'
            width={1280}
            height={700}
            
            
            />
           </div>
          </div>
          </Link>
        </section>
        <section>
          <div className="flex items-center mb-4 lg:ml-80 mt-3">
            <h2 className="lg:text-xl text-xs ">Shop Women&apos;s</h2>
            <div className="flex lg:space-x-2 ml-1">
              <ChevronLeft className="w-5 h-5 cursor-pointer bg-slate-100" />
              <ChevronRight className="w-5 h-5 cursor-pointer bg-slate-100" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        <div>
        <Image
            src = {"/images/G3.png"}
            alt = {'gearimg'}
            width={1280}
            height={700}
            
            
            />
        </div>
        <div>
        <Image
            src = {"/images/G4.png"}
            alt = {'gearimg'}
            width={1280}
            height={700}
            
            
            />
        </div>
        
        
          
          </div>
        </section>
      </div>
    </div>
  )
}
