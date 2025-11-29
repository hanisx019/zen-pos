import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoTimerOutline } from "react-icons/io5";

const Earnings = () => {
  return (
    <div className='h-2/6  text-white flex p-4 gap-2'>
        <div className="bg-zinc-950 w-1/2 rounded-md">
            <div className="flex justify-between items-center px-5 py-4  h-1/3">
                <h4 className="text-sm font-semibold">Total Earnings</h4>
                <div className="bg-[#029545] size-8 rounded-md"><RiMoneyDollarCircleFill className="w-full h-full" color="white"/></div>
            </div>
            <div className="px-5  h-2/3 flex flex-col items-left justify-center">
                <h5 className="text-3xl font-bold">₹512</h5>
                <p className="text-sm"><span className="text-green-500 ">1.6%</span>than yesterday</p>
            </div>
        </div>

        <div className="bg-zinc-950 w-1/2 rounded-md">
            <div className="flex justify-between items-center px-5 py-4  h-1/3">
                <h4 className="text-sm font-semibold">In Progress</h4>
                <div className="bg-yellow-400 size-8 rounded-md"><IoTimerOutline className="w-full h-full " color="white"/></div>
            </div>
            <div className="px-5  h-2/3 flex flex-col items-left justify-center">
                <h5 className="text-3xl font-bold">16</h5>
                <p className="text-sm"><span className="text-green-500 ">3.6%</span>than yesterday</p>
            </div>
        </div>
    </div>
  )
}

export default Earnings