import React from 'react'
import { Link } from 'react-router-dom'
import c1 from '../assets/c_1.jpg'


export default function Adventure() {
  return (
    <div>

        <div className='flex flex-row justify-between items-center bg-gray-200 py-3 px-10'>
            <p className='text-md sm:2xl tracking-wide font-semibold'><Link to='/circular' className='hover:text-blue-600 hover:underline underline-offset-4'>CampusLife</Link>&nbsp;&gt;&nbsp;<Link to='/ldclub' className='hover:text-blue-600 hover:underline underline-offset-4'>LDCE Club</Link>&nbsp;&gt;&nbsp;Adventure</p>
            <Link to='/' className='hover:text-blue-600 hover:underline underline-offset-4 font-semibold'>Home</Link>
        </div>


        <div className='max-w-6xl mx-auto flex flex-col justify-center items-center gap-10 my-10 bg-gray-100 p-10 rounded-lg'>
          <img src={c1} alt="Adventure Image" className='shadow-2xl w-80 h-auto' />
          <p className='tracking-wide leading-relaxed p-4'>Advanature Club is an initiative of Invincible. Invincible is an NGO that is run by students of different colleges with the motto of informing people about the adventures and what young India really needs to grow in a better way.

Advanature is a combination of the words 'Adventure' and 'Nature'. This club has been started as initiative in L.D. College Of Engineering and is now spreading in other colleges as well. Advanature works on four themes: Environment Awareness, Heritage and Culture Conservation, Nature Education, Adventure. We work with a motto of creating adventures and conserving heritage and culture.

Under Invincible we are organize many nature education and adventure camps. Students from different colleges are positively responding to these events and camps which are in turn helpful to them in studies and in co-curricular activities. Advanature also organizes very interesting events and does various activities in different colleges. Advanature is basically a club run by the youth, for the youth to get involved in various things that are helpful to them right now as well as in different stages of life.

</p>
        </div>
    </div>
  )
}
