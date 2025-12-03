import Earnings from '../components/Home/Earnings'
import RecentOrders from '../components/Home/RecentOrders'
import Greetings from '../components/Home/Greetings'
import { foodItems } from '../constants/fooditems'

const HomePage = () => {
  return (
    <div className='flex  bg-zinc-950 h-[81vh]  ' >

      <div className='w-3/5 bg-[#121212]'>
        <Greetings/>
        <Earnings/>
        <RecentOrders/>
      </div>

      <div className='w-2/5 bg-[#121212]'>
        <div className='bg-zinc-950 m-5 h-[74.5vh] rounded-md'>
          <div className='flex justify-between p-4'>
            <h4 className='text-sm text-white'>Recent Orders</h4>
            <p className='text-blue-800 text-xs cursor-pointer select-none'>View all</p>
          </div>
          <div className=' overflow-y-scroll h-[67vh] hide-scrollbar'>
            {foodItems.map((item)=>(
              <div key={item.id} className='text-white flex bg-[#121212] m-4 rounded-md items-center space-x-5 px-4 py-2'>
                <p className='font-bold'>{item.id}</p>
                <img className='size-10 object-cover rounded-full object-center' src={item.img} alt={item.name}/>

                <div className='flex flex-col font-semibold'>
                  <h4 className='text-sm'>{item.name}</h4>
                  <p className='text-xs text-gray-400'>Orders:<span className='text-white'> {item.orders}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage