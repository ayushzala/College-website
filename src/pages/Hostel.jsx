import React from "react";
import { Link } from "react-router-dom";

export default function Hostel() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center bg-gray-200 py-3 px-20">
        <p className="text-sm sm:text-2xltracking-wider font-semibold">
          <Link
            to="/campuslife"
            className="hover:text-blue-600 hover:underline underline-offset-4"
          >
            CampusLife
          </Link>
          &nbsp;&gt;&nbsp;Hostel
        </p>
        <Link
          to="/"
          className="hover:text-blue-600 hover:underline underline-offset-4 font-semibold"
        >
          Home
        </Link>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-10 my-10 bg-gray-100 p-10 rounded-lg">
        <img
          src="https://ldce.ac.in/img/sliders/hostels/1.jpg"
          alt="Hostel Image"
          className="shadow-2xl "
        />
        <p className="tracking-wide leading-relaxed p-4">
        Residential experience at hostel of L D College of Engineering is memorable for the students as it is in the beautiful lush green campus in the heart of the city. Whether it is planning for cultural events or exam preparation, the learning experiences adds value to the holistic development of the students. At LDCE hostel, students find a second home, as they can have the assistance of a rector and warden in each block whose untiring efforts ensure that the students’ stay at the hostel is good, and all their needs are met promptly. All civil works and electrical works are created, supported and maintained by PWD at hostel campus. <br /><br />

At LDCE hostel, students are accommodated in a twin / triple sharing rooms. Students are helped to adjust with fellow students and to the individuality that all students bring with them. Apart from this, students are trained in the orderly arrangement of their personal belongings in the dormitories, and the maintenance of proper hygiene and cleanliness. <br /><br />

A warm and affable environment in the hostel ensures that students interact among themselves freely, learn to extend mutual support when required, and develop close friendly relations. <br /><br />

Hostel building at LDCE is located inside the campus. It provides accommodation to around 800 students, including 144 girl students. <br /><br />

Hostel Administration: <br />
The hostel is administered by the rector and wardens appointed for each block by Commissionerate of Technical Education (CTE), Gandhinagar. Admissions are given to students who are residing at least 30 kms away from the hostel based on ACPC merit. <br /><br />

Facilities: 
<br />
Each hostel room is provided with beds, tables, chairs & cupboards. Other facilities shall be provided as and when government deems fit. <br />
There are four mess in the hostel campus, which are managed by students themselves. Hostel authority ensures quality of food being served in the mess. <br />
Many newspapers and magazines are subscribed by the hostel. <br />
The hostel has one common room where students can watch TV. <br />
Students can enjoy outdoor and indoor games in the college campus. <br />

        </p>
      </div>
    </div>
  );
}
