import React from 'react'
import { Link } from 'react-router-dom'


export default function Placement() {
  return (
    <div>

      <div className='flex flex-row justify-between items-center bg-gray-200 py-3 px-20'>
            <p className='text-sm sm:text-2xl tracking-wider font-semibold'><Link to='/campuslife' className='hover:text-blue-600 hover:underline underline-offset-4'>CampusLife</Link>&nbsp;&gt;&nbsp;Placements</p>
            <Link to='/' className='hover:text-blue-600 hover:underline underline-offset-4'>Home</Link>
      </div>


      <div className='max-w-6xl flex flex-col mx-auto items-center gap-3 bg-gray-100 mt-10 mb-10 rounded-lg'>
        
        <div className='w-full text-white px-10 py-6'>
          <h1 className='bg-blue-600  p-3 text-xl font-semibold tracking-wider rounded-xl'>Year wise Placement Data</h1>
          <br />
          <ul className='text-black flex flex-col px-4'>
            <Link to='https://ldce.ac.in/upload/pdf/placement-cell/PLACEMENT-2016.pdf'  className='hover:text-blue-600 font-semibold mb-1'>Placement Statistics - 2016</Link>
            <Link to='https://ldce.ac.in/upload/pdf/placement-cell/PLACEMENT-2017.pdf'  className='hover:text-blue-600 font-semibold mb-1'>Placement Statistics - 2017</Link>
            <Link to='https://ldce.ac.in/upload/pdf/placement-cell/PLACEMENT-2018.pdf'  className='hover:text-blue-600 font-semibold mb-1'>Placement Statistics - 2018</Link>
            <Link to='https://ldce.ac.in/upload/pdf/placement-cell/PLACEMENT-2019.pdf'  className='hover:text-blue-600 font-semibold mb-1'>Placement Statistics - 2019</Link>
            <Link to='https://ldce.ac.in/upload/pdf/placement-cell/PLACEMENT-2020.pdf'  className='hover:text-blue-600 font-semibold mb-1'>Placement Statistics - 2020</Link>
            <Link to='https://ldce.ac.in/upload/pdf/placement-cell/PLACEMENT-2021.pdf'  className='hover:text-blue-600 font-semibold mb-1'>Placement Statistics - 2021</Link>
            <Link to='https://ldce.ac.in/upload/pdf/placement-cell/PLACEMENT-2022.pdf'  className='hover:text-blue-600 font-semibold mb-1'>Placement Statistics - 2022</Link>
            <Link to='https://ldce.ac.in/upload/pdf/placement-cell/PLACEMENT-2023.pdf'  className='hover:text-blue-600 font-semibold mb-1'>Placement Statistics - 2023</Link>
            <Link to='https://ldce.ac.in/upload/pdf/placement-cell/PLACEMENT-2024.pdf'  className='hover:text-blue-600 font-semibold mb-1'>Placement Statistics - 2024</Link>
            <Link to='https://ldce.ac.in/upload/pdf/placement-cell/PLACEMENT_STATISTICS.pdf'  className='hover:text-blue-600 font-semibold mb-1'>Placement Statistics Average</Link>
            <Link to='https://ldce.ac.in/upload/pdf/placement-cell/placement-stats-graph.pdf'  className='hover:text-blue-600 font-semibold mb-1'>Placement Records Graphical Representation</Link>
            <Link to='https://ldce.ac.in/upload/pdf/placement-cell/our_recruiters.pdf'  className='hover:text-blue-600 font-semibold mb-1'>Our Placement Recruiters</Link>
          </ul>
        </div>

        <div className='p-10 w-full text-white'>
        <h1 className='bg-blue-600 p-3 text-xl font-semibold tracking-wide rounded-xl'>Placement-Cell Head / Contact Us</h1>
        <br />
          <ul className='text-black flex flex-col px-4'>
            <li> <b>Prof. Vinodkumar P. Patel</b> ( M.Tech, IIT, Roorkee) Associate Professor</li>
            <li>Training & Placement Officer L. D. College of Engineering, Ahmedabad - 380015 India</li>
            <li>Email: <b>placement@ldce.ac.in</b></li>
          </ul>
        </div>
      </div>

      
    </div>
  )
}
