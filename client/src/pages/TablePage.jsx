import { IoArrowBackSharp } from "react-icons/io5";
import Tables from "../components/Table/Tables";
import { useState } from "react";

const TablePage = () => {

  const [tableStatus, setTableStatus] = useState('All')
  console.log(tableStatus)

  return (
    <div className="bg-[#121212] p-4 px-10 h-[85vh]">

      <div className="flex items-center justify-between pb-2 ">
        <div className="flex items-center gap-4 text-white   "><button className="bg-cyan-600 size-10 px-3 rounded-full"><IoArrowBackSharp className="text-white"/></button>Tables</div>
        <div className="flex gap-10 text-neutral-400 text-sm cursor-pointer select-none">
          <p className={`${tableStatus==='All'?'bg-[#27272A]':''}  rounded-md text-white p-2 w-[63px] text-xs flex items-center justify-center text-center`} onClick={()=>setTableStatus('All')}>All</p>
          <p className={`${tableStatus==='Available'?'bg-[#27272A]':''}  rounded-md text-white p-2 w-[63px] text-xs flex items-center justify-center text-center`} onClick={()=>setTableStatus('Available')}>Available</p>
          <p className={`${tableStatus==='Booked'?'bg-[#27272A]':''}  rounded-md text-white p-2  w-[63px] text-xs flex items-center justify-center text-center`} onClick={()=>setTableStatus('Booked')}>Booked</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 bg-[#121212]  overflow-y-scroll hide-scrollbar max-h-[72vh] pb-5">
        <Tables tableStatus={tableStatus} setTableStatus={setTableStatus}/>
      </div>
    </div>
  )
}

export default TablePage