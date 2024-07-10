import React from "react";
import { Link } from "react-router-dom";
import c2 from '../assets/c_2.jpg'

export default function CodersClub() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center bg-gray-200 py-3 px-10">
        <p className="text-md sm:2xl tracking-wider font-semibold">
          <Link
            to="/campuslife"
            className="hover:text-blue-600 hover:underline underline-offset-4"
          >
            CampusLife
          </Link>
          &nbsp;&gt;&nbsp;
          <Link
            to="/ldclub"
            className="hover:text-blue-600 hover:underline underline-offset-4"
          >
            LDCE Club
          </Link>
          &nbsp;&gt;&nbsp;Coders Club LDCE
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
          src={c2}
          alt="coders Image"
          className="shadow-2xl w-80 h-auto"
        />
        <div>
        <p className="tracking-wide leading-relaxed p-4">
          Coders Club is a coding and technology related club of L.D. College of
          Engineering. It aims to make the students learn and expertise coding.
          At Coders Club, the students apply computer programming concepts in
          solving real life problems. Coders Club focus on new technologies and
          computer languages and provide technical and practical knowledge to
          the students. The mission is to have integrity and achieve Excellence,
          respect the Individual and foster an environment of learning and
          sharing. The focus is on helping students to achieve their career
          objectives by providing the innovative learning methods and best
          practical approach of learning. The Vision is to ensure that students
          acquire and use knowledge, skills to become creative and successful
          members of society. The club also provides internships to the students
          to boost up their skills in coding, marketing and management.
          </p>
          <br />
          <ul className="tracking-wide leading-relaxed p-4">
            <h1> Activities Done till now:</h1>
            <li>C Language Course</li>
            <li>C Language Certification Examination</li>
            <li>C Language Community formation and exchange</li>
            <li>C Language Quiz</li>
            <li>Web Development Course - ongoing</li>
          </ul>
          <br />
          <ul className="tracking-wide leading-relaxed p-4">
            <h1>Activities Planned for Future:</h1>
            <li>Internships</li>
            <li>Workshops</li>
            <li>Seminars</li>
            <li>Live Project Work</li>
            <li>Hackathons</li>
          </ul>
          <br />
          <ul className="tracking-wide leading-relaxed p-4">
            <h1>Our Teams</h1>
            <li>Faculty Co-ordinator: Prof. Hiteishi Diwanji(Associate professor, Information Technology Department)</li>
            <li>President: Bhumi Sharma (Information Technology Department)</li>
            <li>Vice-President: Aman Shaikh(Information Technology Department)</li>
            <li>Secretary: Meet Prajapati(Information Technology Department)</li>
            <li>Manager: Arpan Prajapati(Information Technology Department)</li>
            <li>Treasurer: Ravi Patel(Information Technology Department)</li>
            <li>Chairman: Istiyak Shaikh(Information Technology Department)</li>
            <li>Vice-Secretary: Sanskruti Panchal(Information Technology Department)</li>
          </ul>
          <ul className="tracking-wide leading-relaxed p-4">
            <h1>Contact Details:</h1>
            <li>Email: codersclubldce@gmail.com</li>
            <li>Instagram: codersclub_ldce</li>
            <li>Contact No.: 9898660970</li>
          </ul>

        
        </div>
        
      </div>
    </div>
  );
}
