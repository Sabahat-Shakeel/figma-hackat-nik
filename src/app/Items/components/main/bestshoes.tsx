import Image from "next/image";
import Link from "next/link";
 // Import the product data

export default function BestShoes() {
  return (
    <section className="reveal p-5 sm:p-10">
      <div className="flex flex-wrap justify-between items-center py-3 text-center">
        <h2 className="font-semibold text-lg pl-[78px] sm:text-xl">Best of Air Max</h2>
      </div>
      <div className="  flex flex-wrap justify-evenly items-center gap-4 sm:gap-5">
       
           
          <div className=" flex flex-col lg:flex-row text-sm sm:text-base leading-relaxed max-w-[250px] sm:max-w-[250px] lg:max-w-[300px]">


        
<Link href="/Items/components/main">
            <Image
              src={'/shoes/best1.png'}
              alt={'products'}
              width={1080}
              height={700}
              className="w-full h-auto object-cover"
            />
            </Link       >
        
</div>

             
<div className=" flex flex-col lg:flex-row text-sm sm:text-base leading-relaxed max-w-[250px] sm:max-w-[250px] lg:max-w-[300px]">


<Link href="/Items/components/main">
  <Image
    src={'/shoes/best2.png'}
    alt={'products'}
    width={1080}
    height={700}
    className="w-full h-auto object-cover"
  />
  </Link       >

</div>



         
<div className=" flex flex-col lg:flex-row text-sm sm:text-base leading-relaxed max-w-[250px] sm:max-w-[250px] lg:max-w-[300px]">



<Link href="/Items/components/main">
  <Image
    src={'/shoes/best3.png'}
    alt={'products'}
    width={1080}
    height={700}
    className="w-full h-auto object-cover"
  />
  </Link       >

</div>


            </div>
            <div className="flex flex-wrap gap-4 sm:gap-10 items-start justify-between mt-3 bg-white">
              <div className="flex flex-col text-xs sm:text-sm pr-1">
                <div className="font-medium text-neutral-900">
           <h1></h1>
                </div>
                <div className="text-neutral-500">
                  <p></p>
                </div>
              </div>
              <div className="self-start font-medium text-right text-neutral-900">
               <p></p>
              </div>
            </div>
                
    </section>
  );
}
