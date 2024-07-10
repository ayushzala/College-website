import React from "react";
import { Link } from "react-router-dom";

export default function LdClub() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center bg-gray-200 py-3 px-20">
        <p className="text-lg sm:text-2xl tracking-wide font-semibold">
          <Link
            to="/campuslife"
            className="hover:text-blue-600 hover:underline underline-offset-4"
          >
            Campuslife
          </Link>
          &nbsp;&gt;&nbsp;LDCE Club
        </p>
        <Link
          to="/"
          className="hover:text-blue-600 hover:underline underline-offset-4"
        >
          Home
        </Link>
      </div>

      {/* Card-1 */}
      <div className="max-w-6xl mx-auto my-10">
        <div className="border w-auto h-auto p-5 bg-gray-100  flex flex-col sm:flex-row items-center gap-5    border-l-blue-800">
          <img
            src="https://ldce.ac.in/upload/logo/club/advanature.jpg"
            alt="Adventure"
            className="flex self-center sm:self-start  w-60 h-auto"
          />

          <div className="flex flex-col gap-5 ml-4">
            <Link to="/adventure">
              <h1 className="text-3xl text-center sm:text-start text-blue-700 font-semibold tracking-wide  hover:underline underline-offset-8">
                Adventure
              </h1>
            </Link>
            <p className="text-lg tracking-wide font-semibold">
              Advanature Club is an initiative of Invincible. Invincible is an
              NGO that is run by students of different colleges with the motto
              of informing people about the adventures and what young India
              really needs to grow in a better way. Advanature is a combination
              of the words 'Adventure' and 'Nature'. ...
            </p>
            <Link to="/adventure">
              <button className="bg-blue-700 px-3 py-2 font-semibold text-lg text-white rounded-lg">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Card-2 */}
      <div className="max-w-6xl mx-auto my-10">
        <div className="border w-auto h-auto p-5 bg-gray-100  flex flex-col sm:flex-row items-center gap-5    border-l-blue-800">
          <img
            src="https://ldce.ac.in/upload/logo/club/coders-club.jpg"
            alt="Coders Club"
            className="flex self-center sm:self-start w-60 h-auto"
          />

          <div className="flex flex-col gap-5 ml-4">
            <Link to='/codersclub'>
              <h1 className="text-3xl text-center sm:text-start text-blue-700 font-semibold tracking-wide hover:underline underline-offset-8">
                Coders Club
              </h1>
            </Link>
            <p className="text-lg tracking-wide font-semibold">
              Coders Club is a coding and technology related club of L.D.
              College of Engineering. It aims to make the students learn and
              expertise coding. At Coders Club, the students apply computer
              programming concepts in solving real life problems. Coders Club
              focus on new technologies and computer languages ...
            </p>
            <Link to="/coderclub">
              <button className="bg-blue-700 px-3 py-2 font-semibold text-lg text-white rounded-lg">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Card-3 */}
      <div className="max-w-6xl mx-auto my-10">
        <div className="border w-auto h-auto p-5 bg-gray-100  flex flex-col sm:flex-row items-center gap-5    border-l-blue-800">
          <img
            src="https://ldce.ac.in/upload/logo/club/foss-programming-club-ldce.jpg"
            alt="FOSS Programming Club, LDCE"
            className="flex self-center sm:self-start w-60 h-auto"
          />

          <div className="flex flex-col gap-5 ml-4">
            <Link to="/foss">
              <h1 className="text-3xl text-center sm:text-start text-blue-700 font-semibold tracking-wide hover:underline underline-offset-8">
                FOSS Programming Club, LDCE
              </h1>
            </Link>
            <p className="text-lg tracking-wide font-semibold">
              What makes a university or institute powerful? The resources? We
              believe it is the ideas, which stem from the people who study or
              teach in an institute. There is no doubt that L. D. College of
              Engineering attracts the nation's best minds. 'FOSS Programming
              Club' aims to strengthen the weak area...
            </p>
            <Link to="/foss">
              <button className="bg-blue-700 px-3 py-2 font-semibold text-lg text-white rounded-lg">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Card-4 */}
      <div className="max-w-6xl mx-auto my-10">
        <div className="border w-auto h-auto p-5 bg-gray-100  flex flex-col sm:flex-row items-center gap-5    border-l-blue-800">
          <img
            src="https://ldce.ac.in/upload/logo/club/ieee-ldce.gif"
            alt="IEEE LDCE"
            className="flex self-center sm:self-start w-60 h-auto"
          />

          <div className="flex flex-col gap-5 ml-4">
            <Link to="/ieee">
              <h1 className="text-3xl text-center sm:text-start text-blue-700 font-semibold tracking-wide hover:underline underline-offset-8">
                IEEE LDCE
              </h1>
            </Link>
            <p className="text-lg tracking-wide font-semibold">
              The IEEE (Institute of Electrical and Electronics Engineers)
              describes itself as ""the world's largest technical professional
              society -- promoting the development and application of
              electrotechnology and allied sciences for the benefit of humanity,
              the advancement of the profession, and the well-bei...
            </p>
            <Link to="/ieee">
              <button className="bg-blue-700 px-3 py-2 font-semibold text-lg text-white rounded-lg">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Card-5 */}
      <div className="max-w-6xl mx-auto my-10">
        <div className="border w-auto h-auto p-5 bg-gray-100  flex flex-col sm:flex-row items-center gap-5    border-l-blue-800">
          <img
            src="https://ldce.ac.in/upload/logo/club/innovator-club.png"
            alt="Innovator Club"
            className="flex self-center sm:self-start w-60 h-auto"
          />

          <div className="flex flex-col gap-5 ml-4">
            <Link to="/innovator">
              <h1 className="text-3xl text-center sm:text-start text-blue-700 font-semibold tracking-wide hover:underline underline-offset-8">
                Innovator Club
              </h1>
            </Link>
            <p className="text-lg tracking-wide font-semibold">
              The Innovator Club of L.D. College of Engineering was founded by
              one of the alumni of our college Mr. Roshan Rawal on 23rd February
              2017. Innovator club was founded to inculcate an environment of
              innovation amongst students and to enable them to generate new
              ideas and become more innovative. Aim of ...
            </p>
            <Link to="/innovator">
              <button className="bg-blue-700 px-3 py-2 font-semibold text-lg text-white rounded-lg">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Card-6 */}
      <div className="max-w-6xl mx-auto my-10">
        <div className="border w-auto h-auto p-5 bg-gray-100  flex flex-col sm:flex-row items-center gap-5    border-l-blue-800">
          <img
            src="https://ldce.ac.in/upload/logo/club/team-robocon-ldce.png"
            alt="team robocon"
            className="flex self-center sm:self-start w-60 h-auto"
          />

          <div className="flex flex-col gap-5 ml-4">
            <Link to="/robocon">
              <h1 className="text-3xl text-center sm:text-start text-blue-700 font-semibold tracking-wide hover:underline underline-offset-8">
                Team Robocon LDCE
              </h1>
            </Link>
            <p className="text-lg tracking-wide font-semibold">
              ABU (Asian Pacific Broadcasting Union) Robocon is an international
              event that is going to be organized in Indonesia in 2015, in which
              more than 35 countries take part from across the globe including
              China, Japan, Vietnam, Thailand, etc. A theme-based competition,
              for which a specific task is decided...
            </p>
            <Link to="/robocon">
              <button className="bg-blue-700 px-3 py-2 font-semibold text-lg text-white rounded-lg">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Card-7 */}
      <div className="max-w-6xl mx-auto my-10">
        <div className="border w-auto h-auto p-5 bg-gray-100  flex flex-col sm:flex-row items-center gap-5    border-l-blue-800">
          <img
            src="https://ldce.ac.in/upload/logo/club/national-service-scheme.png"
            alt="NSS"
            className="flex self-center sm:self-start w-60 h-auto"
          />

          <div className="flex flex-col gap-5 ml-4">
            <Link to="/nss">
              <h1 className="text-3xl text-center sm:text-start text-blue-700 font-semibold tracking-wide hover:underline underline-offset-8">
                National Service Scheme
              </h1>
            </Link>
            <p className="text-lg tracking-wide font-semibold">
              National Service Scheme popularly known as NSS is a student
              organization which comes under Ministry of Youth Affairs & Sports,
              Government of India. It aims at personality development of
              students through community linkage & service....
            </p>
            <Link to="/nss">
              <button className="bg-blue-700 px-3 py-2 font-semibold text-lg text-white rounded-lg">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
