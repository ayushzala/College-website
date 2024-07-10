import React from 'react'
import { Link } from 'react-router-dom'

export default function Links() {
  return (
    <div>
        <div className='flex justify-between bg-gray-200 items-center px-20 py-3 border-b border-gray-200'>
        <h1 className='text-2xl font-semibold tracking-wider'>Important Links</h1>
        <Link to='/' className='hover:text-blue-700 hover:underline underline-offset-4' >Home</Link>
      </div>

      <div className='max-w-6xl flex flex-col mx-auto items-center gap-3 bg-gray-100 mt-10 mb-10 rounded-lg'>
        <div className='w-full text-white px-10 py-6'>
          <h1 className='bg-blue-600  p-3 text-xl font-semibold tracking-wider rounded-xl'>College Related Links</h1>
          <br />
          <ul className='text-black flex flex-col px-4'>
            <Link to='https://acpc.gujarat.gov.in/'  className='hover:text-blue-600 font-semibold mb-1'>ACPC - Admission Committee for Professional Courses</Link>
            <Link to='https://www.gtu.ac.in/' className='hover:text-blue-600 font-semibold mb-1'>GTU - Gujarat Technological University</Link>
            <Link to='https://gtuinnovationcouncil.ac.in/' className='hover:text-blue-600 font-semibold mb-1'>GIC - GTU Innovation Council</Link>
            <Link to='http://www.gksgujarat.org/' className='hover:text-blue-600 font-semibold mb-1'>Gujarat Knowledge Society</Link>
            <Link to='https://study.gujarat.gov.in/Home/University' className='hover:text-blue-600 font-semibold mb-1'>Study in Gujarat</Link>
            <Link to='https://dte.gujarat.gov.in/' className='hover:text-blue-600 font-semibold mb-1'>Commissionerate of Technical Education,Gujarat</Link>
          </ul>
        </div>
        <div className='w-full text-white px-10 py-6'>
          <h1 className='bg-blue-600  p-3 text-xl font-semibold tracking-wider rounded-xl'>Competative Exam Related Links</h1>
          <br />
          <ul className='text-black flex flex-col px-4'>
            <Link to='https://upsc.gov.in/'  className='hover:text-blue-600 font-semibold mb-1'>UPSC</Link>
            <Link to='https://gpsc.gujarat.gov.in/' className='hover:text-blue-600 font-semibold mb-1'>GPSC</Link>
            <Link to='https://indiancc.mygov.in/' className='hover:text-blue-600 font-semibold mb-1'>National Cadet Corps</Link>
            <Link to='https://nss.gov.in/' className='hover:text-blue-600 font-semibold mb-1'>National Service Scheme</Link>
            <Link to='https://indianairforce.nic.in/' className='hover:text-blue-600 font-semibold mb-1'>Indian Airforce</Link>
            <Link to='https://indianarmy.nic.in/' className='hover:text-blue-600 font-semibold mb-1'>Indian Army</Link>
            <Link to='https://www.joinindiannavy.gov.in/' className='hover:text-blue-600 font-semibold mb-1'>Indian Navy</Link>
          </ul>
        </div>

        

      </div>
    </div>
  )
}
