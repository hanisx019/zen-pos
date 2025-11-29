import { IoMdDoneAll } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const Ordercard = () => {
  return (
    <div className="bg-[#09090B] w-[350px] h-[170px] mt-6 rounded-lg  space-y-3 py-4">
      <div className="flex gap-4 px-5 py-2 items-center justify-between  ">
        <div className="flex gap-3 items-center">
          <div className="bg-yellow-600 text-black font-bold rounded-md w-10 h-10 flex items-center justify-center text-sm">
            MH
          </div>
          <div className="flex-col items-center">
            <h3 className="text-sm text-white">Mohammed</h3>
            <p className="text-xs text-neutral-500">#101/ Dine in</p>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 bg-green-950 text-green-500 py-1 justify-center rounded-md mb-2 text-xs">
            <IoMdDoneAll />
            Ready
          </div>
          <p className="flex items-center gap-2 text-xs text-[#73716D]">
            <GoDotFill className="text-green-500 " />
            Ready to serve
          </p>
        </div>
      </div>

      <div className="flex justify-between text-[#73716D] text-xs mx-4">
        <p>January 18, 2025 08:32 PM</p>
        <p>8 items</p>
      </div>
      <hr className="text-gray-600 mx-4" />
      <div className="flex justify-between text-white mx-4 ">
        <p>Total</p>
        <p>₹250.00</p>
      </div>
    </div>
  );
};

export default Ordercard;
