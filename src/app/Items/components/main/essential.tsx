

export default function Features() {

  return (
    <main className="m-4">
      <div className="reveal">
      <div className="flex justify-center items-center flex-col gap-3 p-10">
        <h2 className=" text-4xl font-bold  text-center"> FLIGHT ESSENTIALS </h2>
        <p className="text-sm  leading-5 w-[100%] pt-3 pb-2 text-center">
            Your built-to-last, all-week wears-but with style only Jordan Brand can deliver.
        </p>
        <button>Shop</button>
      </div>

        <h1 className="font-semibold text-xl py-5">The Essentials</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
        <div
          style={{
            backgroundImage: "url('/images/e1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "540px",
          }}
        ></div>
        <div
          style={{
            backgroundImage: "url('/images/e2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "540px",
          }}
        ></div>
        <div
          style={{
            backgroundImage: "url('/images/e3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "540px",
          }}
        ></div>
      </div>
      
    </main>
  );
}
