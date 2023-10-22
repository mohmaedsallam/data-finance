import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

export default function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="  w-full shadow-xl flex flex-col items-center p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white translate-x-4"
            src={single}
            alt="single-image"
          />
          <h2 className="text-2xl font-bold  py-8">single user</h2>
          <p className="text-2xl font-bold ">$149</p>
          <ul className="font-medium text-center">
            <li className="py-2 border-b mx-8 mt-8">500 GB storage</li>
            <li className="py-2 border-b mx-8">granted user</li>
            <li className="py-2 border-b mx-8">send up to 2 GB</li>
          </ul>
          <button
            className="capitalize bg-[#00df9a] w-[180px] rounded-md font-bold my-6  py-3 text-black hover:bg-[#00df98e7] ease-linear duration-150"
            type="button"
          >
            start trial
          </button>
        </div>
        <div className=" bg-gray-100 w-full shadow-xl flex flex-col items-center p-4 my-4 md:m-0 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem]  "
            src={double}
            alt="double-image"
          />
          <h2 className="text-2xl font-bold  py-8">double user</h2>
          <p className="text-2xl font-bold ">$169</p>
          <ul className="font-medium text-center">
            <li className="py-2 border-b mx-8 mt-8">2 TB storage</li>
            <li className="py-2 border-b mx-8">10 granted users</li>
            <li className="py-2 border-b mx-8">send up to +20 GB</li>
          </ul>
          <button
            className="capitalize bg-black w-[180px] rounded-md font-bold my-6 py-3 text-[#00df9a] hover:bg-[#000000ea] ease-linear duration-150"
            type="button"
          >
            start trial
          </button>
        </div>
        <div className="  w-full shadow-xl flex flex-col items-center p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white "
            src={triple}
            alt="triple-image"
          />
          <h2 className="text-2xl font-bold  py-8">triple users</h2>
          <p className="text-2xl font-bold ">$129</p>
          <ul className="font-medium text-center">
            <li className="py-2 border-b mx-8 mt-8">1 TB storage</li>
            <li className="py-2 border-b mx-8">3 granted user</li>
            <li className="py-2 border-b mx-8">send up to +10 GB</li>
          </ul>
          <button
            className="capitalize bg-[#00df9a] w-[180px] rounded-md font-bold my-6 py-3 text-black hover:bg-[#00df98e7] ease-linear duration-150"
            type="button"
          >
            start trial
          </button>
        </div>
      </div>
    </div>
  );
}
