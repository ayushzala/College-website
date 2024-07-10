import React from 'react'
import { Link } from 'react-router-dom'

export default function Environment() {
  return (
    <div>
        <div className="flex flex-row justify-between items-center bg-gray-200 py-3 px-20">
        <p className="text-2xl tracking-wider font-semibold">
          <Link
            to="/department"
            className="hover:text-blue-600 hover:underline underline-offset-4"
          >
            Departments
          </Link>
          &nbsp;&gt;&nbsp;Environmental Eng.
        </p>
        <Link
          to="/"
          className="hover:text-blue-600 hover:underline underline-offset-4"
        >
          Home
        </Link>
      </div>

      <div className="max-w-6xl flex flex-col mx-auto items-center gap-3 bg-gray-100 mt-10 mb-10 rounded-lg">
        <div className="mt-5">
          <img src="https://ldce.ac.in/gallery/13/minislider/environmental-engineering-PxwEKowwqW.JPG" className="rounded-lg" />
        </div>

        <div className="w-full text-white px-10 py-6">
          <h1 className="bg-blue-600  p-3 text-xl font-semibold tracking-wider rounded-xl">
            Brief Introduction
          </h1>
          <br />
          <p className="text-black text-md tracking-wide leading-relaxed px-4">
            Message from the HOD Dear All, The Department of Applied Mechanics
            is a vital offshoot of Civil Engineering Program at L .D .College of
            Engineering. Applied Mechanics department has a distinguished and
            technically well-versed faculty imbued with a sense of commitment
            and sincerity. As the HOD of the department it is a matter of
            immense pride to bring to you the multifaceted activities and
            achievements of the department. We are a department of 16 faculty
            members, 2 of these holding Doctorates, 7 of these are pursuing
            Doctorate of Philosophy and the rest have a Master’s Degree. The
            strength of the courses offered by this department lies in a strong
            technical and field experience of the faculty who are involved in
            research and consultancy over and above their regular teaching
            wherein they actively involve the students through quizzes, models
            and field exercises to make learning an enriching experience.
            Faculty members are also involved in conducting training for working
            professionals in various government departments to keep them updated
            on recent and future trends. The department boasts of 2 Post
            graduate courses in Structural Engineering and Geo-tech, and UG
            program with electives in domain of Structural Analysis and
            Geo-tech. The department conducts technical competitions in model
            making of various aspects of Earthquake Resistant Design, Quiz
            competitions on Structural aspects with a view to broaden the
            horizons of knowledge for the students and to bring out their
            creativity and ability to work as team. Industry-Academia meet is
            arranged each year by the department to help its Post graduate
            students to develop a know-how of the technical advancements as well
            the Industry problems that can be taken up for their dissertation
            topics. In its endeavour to encourage Industry-Academia
            collaboration the department coordinates Expert Talks on different
            topics in order to make the students as well as faculty members stay
            abreast of latest development in the field of Structural
            engineering, Geo-technical Engineering, Concrete and allied
            construction materials, Earthquake engineering. Department also
            coordinates a number of Short Term Training Programmes, Industry
            visits, motivates students to participate in Technical events and
            mentors them to come up ace. Departmental webite:
            https://sites.google.com/view/amd-ldce/home Link to Applied
            Mechanics Department Google Site
          </p>
        </div>

        <div className="p-10 w-full text-white">
          <h1 className="bg-blue-600 p-3 text-xl font-semibold tracking-wider rounded-xl">
            Vision
          </h1>
          <br />
          <p className="text-black text-md tracking-wide leading-relaxed px-4">
            To module the students into Professionals abreast with latest Skills
            and Innovative Research Orientation, to enhance the Knowledge of
            Faculty Members and Academic Infrastructure to Excellence, and to
            serve the Society with Novel Technology.
          </p>
        </div>

        <div className="p-10 w-full text-white">
          <h1 className="bg-blue-600 p-3 text-xl font-semibold tracking-wider rounded-xl">
           Mission
          </h1>
          <br />
            <ul className='text-black flex flex-col px-4'>
                <li>To combine quality education with career focussed learning and the application of knowledge.</li>
                <li> To provide ambience of research and innovation.</li>
                <li>To provide the best resources along with expertise of faculty.</li>
                <li>To inculcate professional ethics and instil the sense of responsibility towards the society.</li>
                <li> To create opportunities for industry-academia collaboration in order to explore the new avenues in the field of civil engineering.</li>
            </ul>
        </div>

        <div className="p-10 w-full text-white">
          <h1 className="bg-blue-600 p-3 text-xl font-semibold tracking-wider rounded-xl">
            PEOs
          </h1>
          <br />
          <p className="text-black text-md tracking-wide leading-relaxed px-4">
            To module the students into Professionals abreast with latest Skills
            and Innovative Research Orientation, to enhance the Knowledge of
            Faculty Members and Academic Infrastructure to Excellence, and to
            serve the Society with Novel Technology.
          </p>
        </div>

        <div className="p-10 w-full text-white">
          <h1 className="bg-blue-600 p-3 text-xl font-semibold tracking-wider rounded-xl">
            PSOs
          </h1>
          <br />
          <p className="text-black text-md tracking-wide leading-relaxed px-4">
            To module the students into Professionals abreast with latest Skills
            and Innovative Research Orientation, to enhance the Knowledge of
            Faculty Members and Academic Infrastructure to Excellence, and to
            serve the Society with Novel Technology.
          </p>
        </div>


        <div className="p-10 w-full text-white">
          <h1 className="bg-blue-600 p-3 text-xl font-semibold tracking-wider rounded-xl">
            Facilities
          </h1>
          <br />
          <p className="text-black text-md tracking-wide leading-relaxed px-4">
            To module the students into Professionals abreast with latest Skills
            and Innovative Research Orientation, to enhance the Knowledge of
            Faculty Members and Academic Infrastructure to Excellence, and to
            serve the Society with Novel Technology.
          </p>
        </div>
  

        
      </div>
    </div>
  )
}
