import { IoHomeSharp } from "react-icons/io5";
import { BsBorderStyle } from "react-icons/bs";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { CgMoreO } from "react-icons/cg";
import { RxBorderAll } from "react-icons/rx";




const Footer = () => {
  return (
    <div className='h-[9vh] bg-zinc-950 text-zinc-400 flex items-cente justify-around font-sans'>
      <div className="flex items-center gap-2"><IoHomeSharp className="text-zinc-400"  />Home</div>
      <div className="flex items-center gap-2"><BsBorderStyle className="text-zinc-400" />Orders</div>
      <div className="flex items-center gap-2"><MdOutlineTableRestaurant className="text-zinc-400" />Tables</div>
      <div className="flex items-center gap-2"><CgMoreO className="text-zinc-400" />More</div>
      <button className="bg-orange-400 bottom-10 absolute size-12 rounded-full cursor-pointer"><RxBorderAll className="w-full " size={23} color="black" /></button>
    </div>
  )
}

export default Footer