import React from 'react'
import { Link } from 'react-router-dom'

export default function Campuslife() {
  return (
    <div>

      <div className='flex justify-between bg-gray-200 items-center px-20 py-3 border-b border-gray-200'>
        <h1 className='text-lg sm:text-2xl font-semibold tracking-wider'>CampusLife of college</h1>
        <Link to='/' className='hover:text-blue-700 hover:underline underline-offset-4' >Home</Link>
      </div>


      <div className='max-w-6xl flex flex-col mx-auto items-center gap-3 bg-gray-100 mt-10 mb-10 rounded-lg'>
        
        <div className='w-full text-white px-10 py-6'>
          <h1 className='bg-blue-600  p-3 text-xl font-semibold tracking-wider rounded-xl'>Student Life</h1>
          <br />
          <ul className='text-black flex flex-col px-4'>
            <Link to='/ldclub'  className='hover:text-blue-600 font-semibold mb-1'>LDCE Clubs</Link>
            <Link to='/' className='hover:text-blue-600 font-semibold mb-1'>Photo Gallery</Link>
            <Link to='/nss' className='hover:text-blue-600 font-semibold mb-1'>National Service Scheme</Link>
          </ul>
        </div>

        <div className='p-10 w-full text-white'>
        <h1 className='bg-blue-600 p-3 text-xl font-semibold tracking-wider rounded-xl'>Campus Life</h1>
        <br />
          <ul className='text-black flex flex-col px-4'>
            <Link to='/sport' className='hover:text-blue-600 font-semibold mb-1'>Sports</Link>
            <Link to='/placement' className='hover:text-blue-600 font-semibold mb-1'>Placement Cell</Link>
            <Link to='/' className='hover:text-blue-600 font-semibold mb-1'>LDCE Alumni Association</Link>
          </ul>
        </div>

        <div className='p-10 w-full text-white'>
        <h1 className='bg-blue-600 p-3 text-xl font-semibold tracking-wider rounded-xl'>Infra structure</h1>
        <br />
          <ul className='text-black flex flex-col px-4'>
            <Link to='/campusmap' className='hover:text-blue-600 font-semibold mb-1'>Campus Map</Link>
            <Link to='/library' className='hover:text-blue-600 font-semibold mb-1'>Library</Link>
            <Link to='/canteen' className='hover:text-blue-600 font-semibold mb-1'>Canteen</Link>
            <Link to='/hostel' className='hover:text-blue-600 font-semibold mb-1'>Hostel</Link>
            <Link to='https://ldce.ac.in/upload/pdf/admission/Policy/LDCE_GREEN_CAMPUS_POLICY.pdf' className='hover:text-blue-600 font-semibold mb-1'>LDCE Green Campus Policy</Link>
          </ul>
        </div>


        <div className='p-10 w-full text-white'>
        <h1 className='bg-blue-600 p-3 text-xl font-semibold tracking-wider rounded-xl'>Placements</h1>
        <br />
          <ul className='text-black flex flex-col px-4'>
            <Link to='https://ldce.ac.in/upload/pdf/placement-cell/LDCE_TPO_BROUCHUR.pdf' className='hover:text-blue-600 font-semibold mb-1'>Placement Cell Brochure</Link>
            <Link to='https://ldce.ac.in/upload/pdf/placement-cell/placement_activities.pdf' className='hover:text-blue-600 font-semibold mb-1'>Placement Cell Activities</Link>
            <Link to='https://ldce.ac.in/upload/pdf/placement-cell/Facilities_For_Placement.pdf' className='hover:text-blue-600 font-semibold mb-1'>Facilities For Placement Drive-tpo at LDCE</Link>
            <Link to='/placement' className='hover:text-blue-600 font-semibold mb-1'>Year-wise Placement Data</Link>
            
          </ul>
        </div>

      </div>
      
    </div>
  )
}
