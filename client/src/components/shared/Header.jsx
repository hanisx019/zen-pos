import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { MdSearch } from "react-icons/md";



const Header = () => {
  return (
    <div className='bg-zinc-950 w-full h-[10vh] text-white flex items-center justify-between px-10'>

      <div className="flex items-center gap-2">
        <MdOutlineRestaurantMenu size={27} color="white" />
        <p className="font-mono tracking-widest select-none">ZenPOS</p>
      </div>

      <div className="flex items-center gap-2 bg-zinc-800 w-1/3 h-9 rounded-md px-4">
        <MdSearch size={20} color="white"/>
        <input className="w-full outline-0 text-sm" type="text" placeholder="Search"/> 
      </div>


      <div className="flex items-center gap-4">
        <FaRegBell size={20} color="white" />
        <FaUserCircle size={30} color="white"/>
        <div >
          <h3 className="text-md text-center">Mohammed</h3>
          <p className="text-xs text-zinc-400 ">Admin</p>
        </div>
      </div>


    </div>
  )
}

export default Header