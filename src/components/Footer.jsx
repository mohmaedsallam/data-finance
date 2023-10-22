import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Embracing BTC, finance analytics, and SaaS, we are navigating the
          future of finance. Join us in this exciting journey towards efficiency
          and innovation.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare
            size={30}
            className="cursor-pointer hover:opacity-[0.9]  hover:scale-105 duration-150"
          />
          <FaInstagram
            size={30}
            className="cursor-pointer hover:opacity-[0.9]  hover:scale-105 duration-150"
          />
          <FaTwitterSquare
            size={30}
            className="cursor-pointer hover:opacity-[0.9]  hover:scale-105 duration-150"
          />
          <FaGithubSquare
            size={30}
            className="cursor-pointer hover:opacity-[0.9]  hover:scale-105 duration-150"
          />
          <FaDribbbleSquare
            size={30}
            className="cursor-pointer hover:opacity-[0.9]  hover:scale-105 duration-150"
          />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:opacity-[0.9] hover:underline">
              Analytics
            </li>
            <li className="py-2 text-sm cursor-pointer hover:opacity-[0.9] hover:underline">
              Marketing
            </li>
            <li className="py-2 text-sm cursor-pointer hover:opacity-[0.9] hover:underline">
              Commerce
            </li>
            <li className="py-2 text-sm cursor-pointer hover:opacity-[0.9] hover:underline">
              Insights
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:opacity-[0.9] hover:underline">
              Pricing
            </li>
            <li className="py-2 text-sm cursor-pointer hover:opacity-[0.9] hover:underline">
              Documentation
            </li>
            <li className="py-2 text-sm cursor-pointer hover:opacity-[0.9] hover:underline">
              Guides
            </li>
            <li className="py-2 text-sm cursor-pointer hover:opacity-[0.9] hover:underline">
              API Status
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:opacity-[0.9] hover:underline">
              About
            </li>
            <li className="py-2 text-sm cursor-pointer hover:opacity-[0.9] hover:underline">
              Blog
            </li>
            <li className="py-2 text-sm cursor-pointer hover:opacity-[0.9] hover:underline">
              Jobs
            </li>
            <li className="py-2 text-sm cursor-pointer hover:opacity-[0.9] hover:underline">
              Press
            </li>
            <li className="py-2 text-sm cursor-pointer hover:opacity-[0.9] hover:underline">
              Careers
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer hover:opacity-[0.9] hover:underline">
              Claim
            </li>
            <li className="py-2 text-sm cursor-pointer hover:opacity-[0.9] hover:underline">
              Policy
            </li>
            <li className="py-2 text-sm cursor-pointer hover:opacity-[0.9] hover:underline">
              Terms
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
