import React from "react";
import { Link } from "react-router-dom";
import c4 from '../assets/c_4.gif'

export default function IEEE() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center bg-gray-200 py-3 px-10">
        <p className="text-md sm:2xl tracking-wider font-semibold">
          <Link
            to="/circular"
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
          &nbsp;&gt;&nbsp;IEEE LDCE
        </p>
        <Link
          to="/"
          className="hover:text-blue-600 hover:underline underline-offset-4"
        >
          Home
        </Link>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-10 my-10 bg-gray-100 p-10 rounded-lg">
        <img
          src={c4}
          alt="ieee Image"
          className="shadow-2xl w-80 h-auto"
        />
        <p className="tracking-wide leading-relaxed p-4">
        The IEEE (Institute of Electrical and Electronics Engineers) describes itself as ""the world's largest technical professional society -- promoting the development and application of electrotechnology and allied sciences for the benefit of humanity, the advancement of the profession, and the well-being of our members." <br /><br />

The IEEE fosters the development of standards that often become national and international standards. The organization publishes a number of journals, has many local chapters, and several large societies in special areas, such as the IEEE Computer Society.
        </p>
      </div>
    </div>
  );
}
