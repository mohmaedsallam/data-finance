import Laptop from "../assets/laptop.jpg";
export default function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 items-center">
        <img
          className="w-[500px] mx-auto my-4"
          src={Laptop}
          alt="analytics-laptop"
        />
        <div className=" space-y-5 text-center md:text-left">
          <div className="text-left space-y-1 pr-1">
            <p className="uppercase text-[#00df9a] font-bold">
              data analytics dashboard
            </p>
            <h2 className="capitalize font-bold text-xl whitespace-nowrap sm:text-2xl md:3xl">
              manage data analytics centrally
            </h2>
            <p>
              BTC is revolutionizing B2B transactions with its security and
              transparency. Finance analytics, using data-driven insights, is
              optimizing business performance. The adoption of SaaS is
              transforming business operations, making them more efficient and
              cost-effective.
            </p>
          </div>
          <button
            className=" capitalize text-center bg-black w-[200px] rounded-md font-bold  py-3 text-[#00df9a] hover:bg-[#000000e8] ease-linear duration-150"
            type="button"
          >
            get started
          </button>
        </div>
      </div>
    </div>
  );
}
