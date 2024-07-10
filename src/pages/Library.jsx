import React from "react";
import { Link } from "react-router-dom";

export default function Library() {
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
          &nbsp;&gt;&nbsp;Library
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
          src="https://ldce.ac.in/img/sliders/library/1.jpg"
          alt="Library Image"
          className="shadow-2xl "
        />
        <p className="tracking-wide leading-relaxed p-4">
          The Central Library of the renowned institute of the state, L. D.
          College of Engineering, Ahmedabad is the hub for information services
          in the institute, gathering place for the faculties & students of
          diversified technological areas and also serves as a major learning
          and resource centre. It is a creative and innovative partner in
          supporting the teaching, learning, scholarship and research activities
          of the institute. With the fast growing collection, both in digital
          and print forms using the state-of-the-art facilities, the Central
          library of the institute is contributing exponentially to provide a
          world class academic environment with the institute. <br />
          <br />
          It is located in a separate building having beautiful landscape of
          lush green plants within the campus which gives a pleasant ambience to
          the readers. Well-furnished and illuminated location creates an
          atmosphere of serenity that motivates the readers to have effective
          learning and research activities.It has a spacious area of 2845.85 Sq.
          meter that exudes peaceful learning environment. <br />
          <br />
          The collection in the library encompasses 90520 books of 33726 titles
          varying in subjects like Engineering, Management, Architecture &
          Design, Basic Science & Humanities and also includes reference books,
          number of CDs/DVDs and subscribed to 53 print journals and magazines
          in print and 1326 e-books and other e-resources. Major e-resources
          such as IEEE Journals, Science Direct, IEEE Proceedings, ASME, ASCE
          and Springer which are accessible to the faculties and students
          community from anywhere in the campus.The Library was given best
          knowledge centre (Library) award of the state (1st Rank) for the year
          2018 by Indian Society for Technical Education (ISTE). <br />
          <br />
          Library Timings <br />
          • 10:30 am to 09:00 pm <br />
          • Remains closed on Sunday & Public Holidays <br /> <br /><br />
        <Link to='https://ndl.iitkgp.ac.in/'>Link Of National Digital Library</Link>
        </p>
      </div>
    </div>
  );
}
