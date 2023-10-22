import Typed from "react-typed";
export default function Hero() {
  return (
    <div className="text-white text-center">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center items-center">
        <p className="uppercase text-[#00df9a] font-bold p-2">
          growing with data analytics
        </p>
        <h1 className="capitalize text-4xl sm:text-6xl md:text-7xl md:py-6 font-bold">
          grow with data.
        </h1>
        <div className=" flex items-center">
          <p className="text-xl sm:text-4xl md:text-5xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <Typed
            className="text-xl sm:text-4xl md:text-5xl text-gray-500 font-bold ml-2 "
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className=" px-3 md:px-0 capitalize text-xl md:text-2xl font-bold text-gray-500">
          monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms
        </p>
        <button
          className="capitalize bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-black hover:bg-[#00df98e7] ease-linear duration-150"
          type="button"
        >
          get started
        </button>
      </div>
    </div>
  );
}
