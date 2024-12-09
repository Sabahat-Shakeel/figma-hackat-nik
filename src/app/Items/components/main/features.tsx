
export default function Featured() {

  return (
    <main className="m-4 reveal"   data-aos="fade-up-right"
    data-aos-easing="linear">
      <div>
        <h1 className="font-semibold text-xl py-5">Featured</h1>
      </div>
      <div
        style={{
          
          backgroundImage: "url('/images/featured.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
         }}
      ></div>
      <div className="flex justify-center items-center flex-col gap-3 p-10 text-center">
        <h2 className="reveal text-4xl font-bold uppercase"> STEP INTO WHAT FEELS GOOD</h2>
        <p className="reveal text-sm leading-5 w-[100%] pt-3 pb-2 text-center">
          Cause everyone should know the feeling of running in that perfect
          pair.
        </p>
        <button className="hover:opacity-75">Find Your Shoe</button>
      </div>
    </main>
  );
}
