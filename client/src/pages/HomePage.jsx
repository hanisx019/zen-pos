import React from 'react'
import Earnings from '../components/Home/Earnings'
import RecentOrders from '../components/Home/RecentOrders'
import Greetings from '../components/Home/Greetings'

const HomePage = () => {
  return (
    <div className='flex  bg-zinc-950 h-[81vh]  ' >

      <div className='w-3/5 bg-[#121212]'>
        <Greetings/>
        <Earnings/>
        <RecentOrders/>
      </div>

      <div className='w-2/5 bg-[#121212]'></div>
    </div>
  )
}

export default HomePage