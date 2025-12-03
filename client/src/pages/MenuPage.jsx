import { IoArrowBackSharp } from "react-icons/io5";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { use, useState } from "react";
import { Starters } from '../constants/Items/Starters'
import { Beverages } from '../constants/Items/Beverages'
import { MainCourse } from '../constants/Items/MainCourse'
import { Soups } from '../constants/Items/Soups'
import { Desserts } from '../constants/Items/Desserts'
import { Pizza } from '../constants/Items/Pizza'
import { Drinks } from '../constants/Items/Drinks'
import { Salads } from '../constants/Items/Salads'
import { useNavigate } from "react-router-dom";


const MenuPage = () => {
  const [counter, setCounter] = useState(0);
  const [currentStatus, setcurrentStatus] = useState(Starters)
  const menus ={ Starters , Beverages , MainCourse , Soups , Desserts , Pizza , Drinks , Salads }
  const navigate = useNavigate();

  const Increment=()=>{
    if(counter<8){
      setCounter(counter+1);
    }
  }
  const Decrement=()=>{
    if(counter>0){
      setCounter(counter-1);
    }
  }

  const Fnc= async(e)=>{
    setcurrentStatus(menus[e.currentTarget.id]);
  }

  const goBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate('/'); // fallback route
  };

  return (
    <div className="bg-[#121212] p-4 gap-6 h-[85vh] flex">

      {/* Left Section */}
      <div className=" w-3/4">

        {/* Top Bar */}
        <div className="flex justify-between px-6">
        <div className="flex items-center gap-4 text-white"><button className="bg-cyan-600 size-10 px-3 rounded-full cursor-pointer"><IoArrowBackSharp onClick={goBack} className="text-white"/></button>Menu</div>
        <div className="flex justify-center items-center gap-4">
          <MdOutlineRestaurantMenu size={27} color="white" />
          <div>
            <h3 className="text-md text-center text-white">Cutomer Name</h3>
            <p className="text-xs text-zinc-400 ">Table No: 2</p>
          </div>
        </div>
        </div>

        {/* Menu Items */}
        <div className="h-full  mt-6">

          <div className="h-[40%]  flex flex-wrap justify-center items-center gap-4">

            <div onClick={Fnc} id="Starters" className="cursor-pointer w-[250px] h-[100px] rounded-lg bg-red-800 flex flex-col justify-center items-start text-white gap-2 px-4">
              <p className="text-sm font-bold tracking-wider">🍜 Starters</p>
              <p className="px-5 text-xs">6 Items</p>
            </div>

            <div onClick={Fnc} id="MainCourse" className="cursor-pointer w-[250px] h-[100px] rounded-lg bg-orange-900 flex flex-col justify-center items-start text-white gap-2 px-4">
              <p className="text-sm font-bold tracking-wider">🍛 Main Course</p>
              <p className="px-5 text-xs">6 Items</p>
            </div>

            <div onClick={Fnc} id="Beverages" className="cursor-pointer w-[250px] h-[100px] rounded-lg bg-fuchsia-800 flex flex-col justify-center items-start text-white gap-2 px-4">
              <p className="text-sm font-bold tracking-wider">🍸 Beverages</p>
              <p className="px-5 text-xs">6 Items</p>
            </div>

            <div onClick={Fnc} id="Soups" className="cursor-pointer w-[250px] h-[100px] rounded-lg bg-amber-700 flex flex-col justify-center items-start text-white gap-2 px-4">
              <p className="text-sm font-bold tracking-wider">🍦 Soups</p>
              <p className="px-5 text-xs">6 Items</p>
            </div>

            <div onClick={Fnc} id="Desserts" className="cursor-pointer w-[250px] h-[100px] rounded-lg bg-blue-950 flex flex-col justify-center items-start text-white gap-2 px-4">
              <p className="text-sm font-bold tracking-wider">🍩 Deserts</p>
              <p className="px-5 text-xs">6 Items</p>
            </div>

            <div onClick={Fnc} id="Pizza" className="cursor-pointer w-[250px] h-[100px] rounded-lg bg-green-950 flex flex-col justify-center items-start text-white gap-2 px-4">
              <p className="text-sm font-bold tracking-wider">🍕 Pizza</p>
              <p className="px-5 text-xs">6 Items</p>
            </div>

            <div onClick={Fnc} id="Drinks" className="cursor-pointer w-[250px] h-[100px] rounded-lg bg-teal-900 flex flex-col justify-center items-start text-white gap-2 px-4">
              <p className="text-sm font-bold tracking-wider">🍹 Drinks</p>
              <p className="px-5 text-xs">6 Items</p>
            </div>

            <div onClick={Fnc} id="Salads" className="cursor-pointer w-[250px] h-[100px] rounded-lg bg-lime-800 flex flex-col justify-center items-start text-white gap-2 px-4">
              <p className="text-sm font-bold tracking-wider">🥬 Salads</p>
              <p className="px-5 text-xs">6 Items</p>
            </div>

        
          </div>

          <hr className="text-gray-700 px-4 mt-3"/>


          <div className="h-[60%] text-white mt-4 px-7 flex flex-wrap gap-4  max-h-[260px] overflow-y-scroll hide-scrollbar">
            {currentStatus.map((item)=>(
              <div key={item.id} className="bg-[#09090B] w-[250px] flex flex-col gap-5 justify-between p-5 rounded-lg h-[120px]">
              <div className="flex justify-between items-center">
                <p>{item.name}</p>
                <p className="bg-green-950 size-7 rounded-md flex justify-center items-center cursor-pointer"><MdOutlineAddShoppingCart className="text-green-500"/></p>
              </div>
              <div className="flex justify-between items-center">
                <p>₹ {item.price}</p>
                <div className="flex justify-between items-center text-center  bg-[#564b4b3d] rounded-md px-4 select-none gap-3 w-[79px] ">
                  <div onClick={Decrement} className="text-yellow-500 cursor-pointer ">-</div><p className="text-xs">{counter}</p><div onClick={Increment} className="text-yellow-500 cursor-pointer">+</div>
                </div>
              </div>
            </div>
              ))
            }

          </div>



        </div>


      </div>



      {/* Right Section */}
      <div className=" w-1/4">hey</div>



    </div>
  )
}

export default MenuPage