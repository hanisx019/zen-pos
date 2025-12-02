import { IoArrowBackSharp } from "react-icons/io5";
import Ordercard from "../components/Order/Ordercard";


const OrderPage = () => {
  return (
    <div className="bg-[#121212] p-4 px-10 h-[85vh]">

      <div className="flex items-center justify-between pb-2 ">
        <div className="flex items-center gap-4 text-white   "><button className="bg-cyan-600 size-10 px-3 rounded-full"><IoArrowBackSharp className="text-white"/></button>Orders</div>
        <div className="flex gap-10 text-neutral-400 text-sm">
          <p>All</p>
          <p>In Progress</p>
          <p>Ready</p>
          <p>Completed</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 bg-[#121212]  overflow-y-scroll hide-scrollbar max-h-[72vh] pb-5">
        <Ordercard/>
        <Ordercard/>
        <Ordercard/>
        <Ordercard/>
        <Ordercard/>
        <Ordercard/>
        <Ordercard/>
        <Ordercard/>
        <Ordercard/>
        <Ordercard/>
        <Ordercard/>
        <Ordercard/>
        <Ordercard/>
        <Ordercard/>
        <Ordercard/>
        <Ordercard/>
        <Ordercard/>

      </div>
    </div>
  )
}

export default OrderPage