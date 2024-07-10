import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className='border-b-2 pt-1'>
      <header className='flex justify-between items-center px-4'>
        {/* logo container */}
        <Link to='/'>
          <div className='flex items-center gap-2 m-1'>
            <img src="https://storage.googleapis.com/ezap-prod/colleges/6071/ld-college-of-engineering-ahmedabad-logo.png" alt="College logo" className='w-16 h-16' />
            <span className='text-xl font-semibold'>LDCE</span>
          </div>
        </Link>
        

        <div className="hidden md:flex md:flex-wrap md:gap-4">
          <ul className='flex flex-wrap gap-1'>
            {/* <Link to='/'><li className='hover:bg-gray-200 hover:text-blue-600 px-3 py-3 rounded-lg font-semibold'>Home</li></Link> */}
            <Link to='/about'><li className='hover:bg-gray-200 hover:text-blue-600 px-3 py-3 rounded-lg font-semibold'>About</li></Link>
            <Link to='/academic'><li className='hover:bg-gray-200 hover:text-blue-600 px-3 py-3 rounded-lg font-semibold'>Academic</li></Link>
            <Link to='/department'><li className='hover:bg-gray-200 hover:text-blue-600 px-3 py-3 rounded-lg font-semibold'>Department</li></Link>
            <Link to='/circular'><li className='hover:bg-gray-200 hover:text-blue-600 px-3 py-3 rounded-lg font-semibold'>Circulars</li></Link>
            <Link to='/campuslife'><li className='hover:bg-gray-200 hover:text-blue-600 px-3 py-3 rounded-lg font-semibold'>CampusLife</li></Link>
            
          </ul>
        </div>
        

        <div className="hidden md:block ">
          <Link to='/sign-in'><span className='bg-gray-300 p-2 font-semibold rounded-lg hover:bg-black hover:text-white'>Sign-In</span></Link>
        </div>
        

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>


        
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className='flex flex-col gap-2 px-4 py-2'>
            {/* <Link to='/'><li className='hover:bg-gray-200 hover:text-blue-600 px-3 py-3 rounded-lg font-semibold'>Home</li></Link> */}
            <Link to='/about'><li className='hover:bg-gray-200 hover:text-blue-600 px-3 py-3 rounded-lg font-semibold'>About</li></Link>
            <Link to='/academic'><li className='hover:bg-gray-200 hover:text-blue-600 px-3 py-3 rounded-lg font-semibold'>Academic</li></Link>
            <Link to='/department'><li className='hover:bg-gray-200 hover:text-blue-600 px-3 py-3 rounded-lg font-semibold'>Department</li></Link>
            <Link to='/circular'><li className='hover:bg-gray-200 hover:text-blue-600 px-3 py-3 rounded-lg font-semibold'>Circulars</li></Link>
            <Link to='/campuslife'><li className='hover:bg-gray-200 hover:text-blue-600 px-3 py-3 rounded-lg font-semibold'>CampusLife</li></Link>
            <Link to='/sign-in'><li className='bg-gray-200 px-3 py-3 rounded-lg font-semibold'>Sign-In</li></Link>
          </ul>
        </div>
      )}


        
    </div>
  )
}