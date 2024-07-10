import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div className="flex justify-between bg-gray-200 items-center px-20 py-3">
        <h1 className="text-md sm:text-2xl font-semibold tracking-wider ">
          About LDCE History
        </h1>
        <Link
          to="/"
          className="hover:text-blue-700 hover:underline underline-offset-4 font-semibold"
        >
          Home
        </Link>
      </div>

      <div className="max-w-full sm:max-w-6xl my-10 mx-auto">
        <h1 className="text-2xl sm:text-3xl text-center  text-blue-800 underline underline-offset-8 mb-6 ">
          Founder/Establisher
        </h1>
        <div className="text-md sm:text-lg flex flex-col sm:flex-row gap-4 text-wrap bg-gray-100 p-12 rounded-lg ">
          <img
            src="https://ldce.ac.in/img/Shri_Kasturbhai_Lalbhai_Image.jpg"
            alt="kasturbhai lalbhai image"
            className="w-56 sm:w-60  rounded-md"
            title="Lalbhai Dalpatbhai"
          />
          <p className="tracking-wide leading-loose">
            <b>L. D. College of Engineering (LDCE), Ahmedabad</b> is a premier
            government engineering institute in Gujarat State set with the
            objectives of imparting higher education, research and training in
            various fields of engineering & technology. The institute is
            affiliated with Gujarat Technological University, Ahmedabad and
            administrated by the Department of Technical Education, Government
            of Gujarat. The institute was established in June 1948 with a
            generous donation of Rs. 25 lacs and 31.2 Hectres of land by the
            textile magnate <b>Sheth Shri Kasturbhai Lalbhai</b> . Hence College
            is named as <b>Lalbhai Dalpatbhai College of Engineering(LDCE)</b>.
            It is situated adjacent to Gujarat University campus and is located
            at the nucleus of various national level institutes such as{" "}
            <b>PRL, ATIRA, IIM</b> etc. The campus is having buildings for
            various departments, offices, hostels, residences for Principal,
            rector and wardens.
          </p>
        </div>

        <div className="mt-7 ">
          <h1 className="text-2xl sm:text-3xl text-blue-800 text-center underline underline-offset-8">
            Foundation/History
          </h1>
          <br />
          <div className="bg-gray-100 my-3 rounded-lg ">
            <div className="mb-3 gap-5 p-12  rounded-lg flex flex-col sm:flex-row">
              <p className="tracking-wide leading-normal">
                L.D. College of Engineering (LDCE) was established on 20th June,
                1948 as one of the first few engineering colleges in India. The
                institution owes its foundation to the bold and inspired vision
                of Kasturbhai Lalbhai, who named the college after his father,
                Lalbhai Dalpatbhai. <br />
                <br />
                Initially affiliated to Bombay University, L.D. College of
                Engineering (LDCE) came under the Gujarat University after its
                establishment in 1949. <br />
                <br />
                The land for the campus was donated by the Lalbhai family, who
                played a major role in decisions pertaining to this institute in
                its initial years. LDCE started its journey by offering three
                undergraduate courses in Mechanical, Civil and Electrical
                Engineering with an intake of 35 students in each field.
              </p>
              <img
                src="https://ldce.ac.in/upload/gallery/history/5.jpg"
                alt="Ld history"
                className="w-80 h-auto  rounded-lg"
                title="History image"
              />
            </div>

            <div className="mb-3 gap-5 p-12  rounded-lg flex flex-col sm:flex-row">
              <img
                src="https://ldce.ac.in/upload/gallery/history/3.jpg"
                alt="Canteen in early years"
                className="w-52 h-auto rounded-lg"
                title="canteen"
              />
              <p className="tracking-wide leading-relaxed">
                Today it has both undergraduate and post graduate courses in 14
                departments. Today, the total strength of the college stands
                more than 6000. Almuni of LDCE have spread all over the globe
                and have created an image of highly professional and skilful
                engineers. Throughout this wonderful journey, teachers and
                principals have shaped the lives of thousands of engineers. The
                legacy inherited is rich and full of colors. LDCE has and will
                keep on serving this nation and its countrymen through the light
                of knowledge.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl text-center text-blue-800 underline underline-offset-8">
            Today
          </h1>
          <div className="flex flex-col sm:flex-row  sm:max-w-6xl gap-5 mt-7 p-5">
            <img
              src="https://ldce.ac.in/upload/gallery/history/annexe-building.jpg"
              alt="Annexe building"
              className="w-full sm:w-1/2 rounded-lg"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVlH6aQYemxBCRtP3r973X0kUsXX7I0-V6uQ&s"
              alt="Garden image"
              className="w-full sm:w-1/2 rounded-lg"
            />
          </div>
        </div>
      </div>


    </div>
  );
}
