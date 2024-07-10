import React from 'react'
import { Link } from 'react-router-dom'
import c7 from '../assets/c_7.png'

export default function NSS() {
  return (
    <div>
      <div className='flex flex-row justify-between items-center bg-gray-200 py-3 px-10'>
            <p className='text-md sm:2xl tracking-wider font-semibold'><Link to='/circular' className='hover:text-blue-600 hover:underline underline-offset-4'>CampusLife</Link>&nbsp;&gt;&nbsp;<Link to='/ldclub' className='hover:text-blue-600 hover:underline underline-offset-4'>LDCE Club</Link>&nbsp;&gt;&nbsp;National Service Scheme</p>
            <Link to='/' className='hover:text-blue-600 hover:underline underline-offset-4'>Home</Link>
        </div>


        <div className='max-w-6xl mx-auto flex flex-col justify-center gap-10 my-10 bg-gray-100 p-10 rounded-lg'>
          <img src={c7} alt="=NSS Image" className='shadow-2xl w-80 h-auto mx-auto mb-10' />
          <p className='flex flex-col gap-5'>
            <h1 className='text-xl text-blue-600'>Major Activities taken up by NSS</h1>
            <ul className='flex flex-col leading-relaxed pl-5'>
              <li>Digital Literacy Workshop & training to common people immediately after Demonetization</li>
              <li>Blood Donation Camp – Highest in the state among all educational institutes</li>
              <li>Thalassemia Checkup & Awareness – 100%</li>
              <li>Health Checkup of all First Year Students</li>
              <li>Eye Checkup, Dental checkup, HB, BMI, BP, Sugar</li>
              <li>Alfaz- an open mic</li>
              <li>Man Ki Baat – Appreciated LDCE GTU for SBM by PM Narendra Modi</li>
              <li>Kerala Flood Relief Work</li>
              <li>Joy of Giving</li>
              <li>Live web casting during general & state election</li>
              <li>Tree Plantation - Green Campus</li>
              <li>VoSAP Seminar & Audit</li>
              <li>Ummeed-Let’s Fly Happiness</li>
              <li>Sodhyatra – Innovation & SSIP - 4</li>
              <li>Rang Amaizi-A unique wall painting competition</li>
            </ul>
          </p>
          <p className='flex flex-col gap-5'>
            <h1 className='text-xl text-blue-600'>GTU Awards:</h1>
            <ul className='flex flex-col leading-relaxed pl-5'>
              <li>NSS LDCE(BEST NSS UNIT)</li>
              <li>MAJOR(DR) C S SANGHVI(BEST PROGRAM OFFICER)</li>
              <li>ALFAZ MANKAD(BEST NSS VOLUNTEER- MALE)</li>
              <li>SHIVANGI PATEL(BEST NSS VOLUNTEER- FEMALE)</li>
              <li>MADHISH PARIKH(BEST NSS VOLUNTEER)</li>
            </ul>
          </p>
          <p className='flex flex-col gap-5'>
          <h1 className='text-xl text-blue-600'>STATE AWARDS:</h1>
            <ul className='flex flex-col leading-relaxed pl-5'>
              <li>ALFAZ MANKAD- 2017 (BEST NSS VOLUNTEER- MALE)</li>
              <li>SHIVANGI PATEL- 2017 (BEST NSS VOLUNTEER- FEMALE)</li>
              <li>KUNJ PATEL -2016(BEST NSS VOLUNTEER-MALE)</li>
              <li>MADHISH PARIKH -2014(BEST NSS VOLUNTEER -MALE)</li>
            </ul>
          </p>
        </div>
    </div>
  )
}
