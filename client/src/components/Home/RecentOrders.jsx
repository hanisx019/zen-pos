import { MdSearch } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const RecentOrders = () => {
  return (
    <div className='h-3/6  text-white px-4 pb-8 '>
      <div className='h-full bg-zinc-950 rounded-md'>

        <div className='flex justify-between p-4 '>
          <h4 className='text-sm'>Recent Orders</h4>
          <p className='text-blue-800 text-xs cursor-pointer select-none'>View all</p>
        </div>

        <div className="flex items-center gap-2 bg-zinc-800 h-9 rounded-md px-8 mx-4">
          <MdSearch size={20} color="white"/>
          <input className="w-full outline-0 text-sm" type="text" placeholder="Search recent orders"/> 
        </div>

        <div className=" overflow-y-auto max-h-46 hide-scrollbar pt-3" >

          <div className="flex gap-4 px-5 py-2 items-center justify-between ">

            <div className="flex gap-3 items-center">
              <div className="bg-yellow-600 text-black font-bold rounded-md w-10 h-10 flex items-center justify-center text-sm">MH</div>
              <div className="flex-col items-center">
                <h3 className="text-sm">Mohammed</h3>
                <p className="text-xs">8 items</p>
              </div>
            </div>


            <div className="border-2 border-amber-400 text-amber-400 text-xs items-center flex rounded-md px-5 h-6">Table No: 3</div>

            <div>
              <div className="flex items-center gap-2 text-green-500 justify-end text-sm"><IoMdDoneAll/>Ready</div>
              <p className="flex items-center gap-2 text-xs"><GoDotFill className="text-green-500 "/>Ready to serve</p>
            </div>

          </div>

          <div className="flex gap-4 px-5 py-2 items-center justify-between ">

            <div className="flex gap-3 items-center">
              <div className="bg-yellow-600 text-black font-bold rounded-md w-10 h-10 flex items-center justify-center text-sm">MH</div>
              <div className="flex-col items-center">
                <h3 className="text-sm">Mohammed</h3>
                <p className="text-xs">8 items</p>
              </div>
            </div>


            <div className="border-2 border-amber-400 text-amber-400 text-xs items-center flex rounded-md px-5 h-6">Table No: 3</div>

            <div>
              <div className="flex items-center gap-2 text-green-500 justify-end text-sm"><IoMdDoneAll/>Ready</div>
              <p className="flex items-center gap-2 text-xs"><GoDotFill className="text-green-500 "/>Ready to serve</p>
            </div>

          </div>

          <div className="flex gap-4 px-5 py-2 items-center justify-between ">

            <div className="flex gap-3 items-center">
              <div className="bg-yellow-600 text-black font-bold rounded-md w-10 h-10 flex items-center justify-center text-sm">MH</div>
              <div className="flex-col items-center">
                <h3 className="text-sm">Mohammed</h3>
                <p className="text-xs">8 items</p>
              </div>
            </div>


            <div className="border-2 border-amber-400 text-amber-400 text-xs items-center flex rounded-md px-5 h-6">Table No: 3</div>

            <div>
              <div className="flex items-center gap-2 text-green-500 justify-end text-sm"><IoMdDoneAll/>Ready</div>
              <p className="flex items-center gap-2 text-xs"><GoDotFill className="text-green-500 "/>Ready to serve</p>
            </div>

          </div>

          <div className="flex gap-4 px-5 py-2 items-center justify-between ">

            <div className="flex gap-3 items-center">
              <div className="bg-yellow-600 text-black font-bold rounded-md w-10 h-10 flex items-center justify-center text-sm">MH</div>
              <div className="flex-col items-center">
                <h3 className="text-sm">Mohammed</h3>
                <p className="text-xs">8 items</p>
              </div>
            </div>


            <div className="border-2 border-amber-400 text-amber-400 text-xs items-center flex rounded-md px-5 h-6">Table No: 3</div>

            <div>
              <div className="flex items-center gap-2 text-green-500 justify-end text-sm"><IoMdDoneAll/>Ready</div>
              <p className="flex items-center gap-2 text-xs"><GoDotFill className="text-green-500 "/>Ready to serve</p>
            </div>

          </div>

          <div className="flex gap-4 px-5 py-2 items-center justify-between ">

            <div className="flex gap-3 items-center">
              <div className="bg-yellow-600 text-black font-bold rounded-md w-10 h-10 flex items-center justify-center text-sm">MH</div>
              <div className="flex-col items-center">
                <h3 className="text-sm">Mohammed</h3>
                <p className="text-xs">8 items</p>
              </div>
            </div>


            <div className="border-2 border-amber-400 text-amber-400 text-xs items-center flex rounded-md px-5 h-6">Table No: 3</div>

            <div>
              <div className="flex items-center gap-2 text-green-500 justify-end text-sm"><IoMdDoneAll/>Ready</div>
              <p className="flex items-center gap-2 text-xs"><GoDotFill className="text-green-500 "/>Ready to serve</p>
            </div>

          </div>


        </div>

      </div>
    </div>
  )
}

export default RecentOrders