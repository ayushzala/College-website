import React from 'react'
import { Link } from 'react-router-dom'

export default function Map() {
  return (
    <div>
        <div className='flex flex-row justify-between items-center bg-gray-200 py-3 px-20'>
            <p className='text-sm sm:text-2xl tracking-wider font-semibold'><Link to='/campuslife' className='hover:text-blue-600 hover:underline underline-offset-4'>CampusLife</Link>&nbsp;&gt;&nbsp;CampusMap</p>
            <Link to='/' className='hover:text-blue-600 hover:underline underline-offset-4 font-semibold'>Home</Link>
        </div>


        <div className='max-w-6xl mx-auto flex flex-col justify-center items-center gap-10 my-10 bg-gray-100 p-10 rounded-lg'>
          <img src="https://ldce.ac.in/img/map.png" alt="Adventure Image" className='shadow-2xl p' />
        </div>
    </div>
  )
}
