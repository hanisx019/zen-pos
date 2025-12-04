import { MdOutlineDeleteForever } from "react-icons/md";

const Cart = () => {
  return (
    <div className='bg-[#09090B] h-[99%] rounded-lg text-white p-5 flex flex-col justify-center gap-3'>

        <div className='flex justify-between'>
            <div className='space-y-0.5'>
                <p className='text-md '>Customer Name</p>
                <p className='text-xs text-zinc-400'>#101/Dine in</p>
                <p className='text-xs text-zinc-400'>January 19, 2025 05:43 PM</p>
            </div>
            <div className='text-black font-bold bg-yellow-600 flex justify-center items-center p-4 size-10 rounded-lg'>CN</div>
        </div>
        <hr className='text-zinc-700'/>
        <div className="">
            <h3>Order Details</h3>

            <div className="bg-[#121212] p-3  flex flex-col gap-3 rounded-lg mt-3">
                <div className="flex justify-between gap-3 text-zinc-400 ">
                    <div className="space-y-3">
                        <p className="text-sm">Chiken Tikka</p>
                        <MdOutlineDeleteForever className="cursor-pointer" size={20}/>
                    </div>
                    <div className="space-y-3 flex flex-col items-center">
                        <p className="text-sm">x2</p>
                        <p className="text-white text-sm font-bold">₹123</p>
                    </div>
                </div>
            </div>

            <div className="bg-[#121212] p-3  flex flex-col gap-3 rounded-lg mt-3">
                <div className="flex justify-between gap-3 text-zinc-400 ">
                    <div className="space-y-3">
                        <p className="text-sm">Chiken Tikka</p>
                        <MdOutlineDeleteForever className="cursor-pointer" size={20}/>
                    </div>
                    <div className="space-y-3 flex flex-col items-center">
                        <p className="text-sm">x2</p>
                        <p className="text-white text-sm font-bold">₹123</p>
                    </div>
                </div>
            </div>

            <div className="bg-[#121212] p-3  flex flex-col gap-3 rounded-lg mt-3">
                <div className="flex justify-between gap-3 text-zinc-400 ">
                    <div className="space-y-3">
                        <p className="text-sm">Chiken Tikka</p>
                        <MdOutlineDeleteForever className="cursor-pointer" size={20}/>
                    </div>
                    <div className="space-y-3 flex flex-col items-center">
                        <p className="text-sm">x2</p>
                        <p className="text-white text-sm font-bold">₹123</p>
                    </div>
                </div>
            </div>

            <div>
                <hr className='text-zinc-700 mt-4'/>
                <div className="p-3  flex flex-col gap-3 rounded-lg mt-3">
                <div className="flex justify-between gap-3 text-zinc-400 ">
                    <div className="space-y-3">
                        <p className="text-xs">Items(4)</p>
                        <p className="text-xs">Tax(5.25%)</p>
                    </div>
                    <div className="space-y-3 flex flex-col items-center font-bold">
                        <p className="text-sm text-white">₹243</p>
                        <p className="text-white text-sm">₹12</p>
                    </div>
                </div>
                <div className="flex justify-center flex-wrap gap-2 text-sm ">
                    <button className="bg-[#282828] text-zinc-400 w-[140px] p-2 rounded-md cursor-pointer">Cash</button>
                    <button className="bg-[#282828] text-zinc-400 w-[140px] p-2 rounded-md cursor-pointer">Online</button>
                    <button className="bg-blue-700 text-white w-[140px] p-2 rounded-md cursor-pointer">Print Receipt</button>
                    <button className="bg-yellow-400 text-black w-[140px] p-2 rounded-md cursor-pointer">Place Order</button>
                </div>
            </div>
            </div> 
             
        </div>
    </div>
  )
}

export default Cart