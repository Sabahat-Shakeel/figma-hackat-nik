
import Image from "next/image";
export default function Flight() {

  
  return (
    <main className="m-4">
      <div>
        <h1 className="font-semibold text-xl  py-5">Don&apos;t Miss</h1>
      </div>
      <div className="reveal"
   
      >
        <Image 
       
        src ="/images/flight.png"
        alt= {"img"}
        width ={1280}
        height ={700}
        />

      </div>
      
    </main>
  );
}
