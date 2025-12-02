import { IoHomeSharp } from "react-icons/io5";
import { BsBorderStyle } from "react-icons/bs";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { CgMoreO } from "react-icons/cg";
import { RxBorderAll } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useState } from "react";



const Footer = ({form,setForm}) => {

  const [currentPage, setcurrentPage] = useState('home');

  const pageStatus=(page)=>{
    setcurrentPage(page);
  }


  return (
    <div className='h-[9vh] bg-zinc-950 text-zinc-400 flex items-center justify-around font-sans absolute bottom-0 w-full'>

      <Link to='/'>
      <div onClick={()=>pageStatus('home')} className={`flex items-center gap-2  px-24 rounded-2xl py-3 ${currentPage==='home'?'bg-neutral-900 transition-all ease-in duration-200':''}`}><IoHomeSharp className="text-zinc-400"/>Home</div>
      </Link>

      <Link to='/order'>
      <div onClick={()=>pageStatus('order')} className={`flex items-center gap-2   px-24 rounded-2xl py-3 ${currentPage==='order'?'bg-neutral-900 transition-all ease-in duration-200':''}`}><BsBorderStyle className="text-zinc-400" />Orders</div>
      </Link>

      <Link to ='/table'>
      <div onClick={()=>pageStatus('table')} className={`flex items-center gap-2   px-24 rounded-2xl py-3 ${currentPage==='table'?'bg-neutral-900 transition-all ease-in duration-200' :''}`}><MdOutlineTableRestaurant className="text-zinc-400" />Tables</div>
      </Link>

      <Link to ='/more'>
      <div onClick={()=>pageStatus('more')} className={`flex items-center gap-2   px-24 rounded-2xl py-3 ${currentPage==='more'?'bg-neutral-900 transition-all ease-in duration-200':''}`}><CgMoreO className="text-zinc-400" />More</div>
      </Link>

      <button onClick={()=>setForm(true)} className={`bg-orange-400 bottom-10 absolute size-12 rounded-full cursor-pointer`}><RxBorderAll className="w-full " size={23} color="black" /></button>
    </div>
  )
}

export default Footer