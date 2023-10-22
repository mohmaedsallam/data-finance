export default function Newsletter() {
  return (
    <div className="w-full text-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid items-center lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl py-2">
            Want tips & tricks to optimize your flow?
          </h2>
          <p className="text-[14px]">
            Sign up to our newsletter and stay up to date.
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <input
              className="p-3 border-none outline-none placeholder-gray-500 caret-gray-600 text-black flex w-full rounded-md "
              type="text"
              placeholder="Enter email"
            />
            <button
              className="capitalize bg-[#00df9a] w-[200px] rounded-md font-bold my-6 ml-4 py-3 text-black hover:bg-[#00df98e7] ease-linear duration-150"
              type="button"
            >
              notify me
            </button>
          </div>
          <p className="text-center">
            we care about the production of your data. read our
            <span className="inline-block ml-1 text-[#00df9a] underline underline-offset-2 cursor-pointer hover:text-[#00df98ee] hover:no-underline ease-in-out">
              privacy policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
