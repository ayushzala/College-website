import React from 'react'
import { Link } from 'react-router-dom'

export default function Department() {
  return (
    <div>
      
      <div className='flex justify-between bg-gray-200 items-center px-10 py-3 border-b border-gray-200'>
        <h1 className=' text-lg sm:text-2xl font-semibold tracking-wide'>Departments Names & Details</h1>
        <Link to='/' className='hover:text-blue-700 hover:underline underline-offset-4 font-semibold' >Home</Link>
      </div>

      <div className='max-w-6xl flex flex-col mx-auto items-center gap-3 bg-gray-100 mt-10 mb-10 rounded-lg'>
        
        <div className='w-full text-white px-10 py-6'>
          <h1 className='bg-blue-600  p-3 text-xl font-semibold tracking-wider rounded-xl'>Names of Departments</h1>
          <br />
          <ul className='text-black flex flex-col px-4'>
            <Link to='/mechanics'  className='hover:text-blue-600 font-semibold mb-1'>Applied Mechanics</Link>
            <Link to='/bio'  className='hover:text-blue-600 font-semibold mb-1'>Bio Medical Engineering</Link>
            <Link to='/chemical'  className='hover:text-blue-600 font-semibold mb-1'>Chemical Engineering</Link>
            <Link to='/civil'  className='hover:text-blue-600 font-semibold mb-1'>Civil Engineering</Link>
            <Link to='/computer'  className='hover:text-blue-600 font-semibold mb-1'>Computer Engineering</Link>
            <Link to='/electrical'  className='hover:text-blue-600 font-semibold mb-1'>Electrical Engineering</Link>
            <Link to='/electronics'  className='hover:text-blue-600 font-semibold mb-1'>Electronics & Communication Engineering</Link>
            <Link to='/environment'  className='hover:text-blue-600 font-semibold mb-1'>Environment Engineering</Link>
            <Link to='/it'  className='hover:text-blue-600 font-semibold mb-1'>Information Technology</Link>
            <Link to='/ic'  className='hover:text-blue-600 font-semibold mb-1'>Instrument & Control Engineering</Link>
            <Link to='/mechanical'  className='hover:text-blue-600 font-semibold mb-1'>Mechanical Engineering</Link>
            <Link to='/plastic'  className='hover:text-blue-600 font-semibold mb-1'>Plastic Engineering</Link>
            <Link to='/rubber'  className='hover:text-blue-600 font-semibold mb-1'>Rubber Engineering</Link>
            <Link to='/automobile'  className='hover:text-blue-600 font-semibold mb-1'>Automobile Engineering</Link>
          </ul>
        </div>

        
      </div>


    </div>
  )
}
