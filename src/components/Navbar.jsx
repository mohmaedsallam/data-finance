import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
export default function Navbar() {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="h-24 max-w-[1240px] mx-auto px-4 justify-between items-center flex text-white">
      <h1 className="w-full space-x-4 text-3xl font-bold text-[#00df9a]">
        REACT.
      </h1>
      <ul className="md:flex hidden capitalize">
        <li className="p-4 font-medium cursor-pointer">home</li>
        <li className="p-4 font-medium cursor-pointer">company</li>
        <li className="p-4 font-medium cursor-pointer">resources</li>
        <li className="p-4 font-medium cursor-pointer">about</li>
        <li className="p-4 font-medium cursor-pointer">contact</li>
      </ul>
      <div onClick={handleNav} className="cursor-pointer block md:hidden">
        {nav ? (
          <AiOutlineMenu className="" size={20} />
        ) : (
          <AiOutlineClose size={20} />
        )}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full ease-in-out duration-500 bg-[#000300] border-r border-r-gray-900 "
            : "fixed left-[-100%] top-0 w-[60%] h-full ease-in-out duration-500 bg-[#000300] border-r border-r-gray-900 "
        }
      >
        <h1 className="w-full space-x-4 text-3xl font-bold text-[#00df9a] m-[30px] ml-4">
          REACT.
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 ease-linear font-medium duration-150  hover:opacity-[0.9] hover:ml-2 border-b border-b-gray-600 cursor-pointer">
            home
          </li>
          <li className="p-4 ease-linear font-medium duration-150  hover:opacity-[0.9] hover:ml-2 border-b border-b-gray-600 cursor-pointer">
            company
          </li>
          <li className="p-4 ease-linear font-medium duration-150  hover:opacity-[0.9] hover:ml-2 border-b border-b-gray-600 cursor-pointer">
            resources
          </li>
          <li className="p-4 ease-linear font-medium duration-150  hover:opacity-[0.9] hover:ml-2 border-b border-b-gray-600 cursor-pointer">
            about
          </li>
          <li className="p-4 ease-linear font-medium duration-150  hover:opacity-[0.9] hover:ml-2  cursor-pointer">
            contact
          </li>
        </ul>
      </div>
    </div>
  );
}
