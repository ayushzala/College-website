import React from "react";
import { Link } from "react-router-dom";
import canteen from '../assets/canteen.jpg'

export default function Canteen() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center bg-gray-200 py-3 px-20">
        <p className="text-sm sm:text-2xl tracking-wider font-semibold">
          <Link
            to="/campuslife"
            className="hover:text-blue-600 hover:underline underline-offset-4"
          >
            CampusLife
          </Link>
          &nbsp;&gt;&nbsp;Canteen
        </p>
        <Link
          to="/"
          className="hover:text-blue-600 hover:underline underline-offset-4 font-semibold"
        >
          Home
        </Link>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-5 my-10 bg-gray-100 p-10 rounded-lg">
        <img
          src="https://ldce.ac.in/img/sliders/canteen/1.jpg"
          alt="Adventure Image"
          className="shadow-2xl h-96"
        />
        <p className="tracking-wide leading-relaxed p-4">
        Canteen facility is available in the campus for the students and staff members. An entrée of delectable cuisines is provided at pocket-friendly prices.
        </p>
      </div>
    </div>
  );
}
