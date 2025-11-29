import React from 'react'
import Clock from './Clock'

const Greetings = () => {
  return (
    <div className='h-1/6 flex items-center justify-between px-8 text-white'>
        <div>
            <p className='text-2xl font-semibold '>Good Morning, Mohammed</p>
            <p className='text-xs text-gray-300 tracking-tighter'>Give your best services for customers 😊</p>
        </div>
        <div>
            <Clock/>
        </div>
    </div>
  )
}

export default Greetings