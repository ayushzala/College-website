import React from "react";
import { Link } from "react-router-dom";
import c5 from '../assets/c_5.png'

export default function Innovator() {
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
          &nbsp;&gt;&nbsp;Innovator Club LDCE
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
          src={c5}
          alt="Innovator Image"
          className="shadow-2xl w-80 h-auto"
        />
        <p className="tracking-wide leading-relaxed p-4">
          The Innovator Club of L.D. College of Engineering was founded by one
          of the alumni of our college Mr. Roshan Rawal on 23rd February 2017.
          Innovator club was founded to inculcate an environment of innovation
          amongst students and to enable them to generate new ideas and become
          more innovative. Aim of the club is to encourage students to take part
          in different types of activities by which they can improvise their
          mindset and keep up with the growing world. The club conducts
          activities in different domains like Technology, Professionalism, and
          culturism to evolve into a better individual. <br />
          <br />
          Vision & Goal <br />
          The vision of the club is to create an atmosphere of self learning and
          self development for the students of our college and to ingrain the
          technical as well as non technical skills in the students through
          various activities and programs. Our goal is to enhance the technical
          skill, improve team working and communication skills of students. We
          provide resources for the application of their ideas and to foster
          their innovative thinking. <br />
          <br />
          Signature Events of INNOVATOR CLUB: <br />
          IRADA:- A National level tech-fest, major highlights of this fest are
          INNOVICHAR (Talk-show), INNOVATHON (Hackathon) and 50+ events from
          different domains. It was initiated by our president Mr. Nayan
          Savaliya. www.iradafestldce.com <br />
          INNOVATHON:- A National level hackathon which is being organised every
          year since 2019. In which students of different states provide the
          best possible solution to real life industry based problems. <br />
          INNO-SPARK:- A state level quiz competition organised to spark the
          light of knowledge among students. <br />
          INNO-VICHAR:- A National level Talk-show in which eminent speakers
          from different regions share their expertise to the students. <br />
          The Entrepreneurs show- It's being organised specially to encourage
          students about start-ups. A perfect guide for every startup
          enthusiastic. <br />
          Hour Of Code- The "Hour of Code" is an initiative taken by our club
          where in the members from the club visit different schools and teach
          them various types of skills and conduct sessions to shape their
          future better. <br />
          Dell Futurist- DELL Futurist was organised by the club on 8th
          september 2017.The event focused on “Vlogging” and “Gaming” as a
          career. <br />
          Workshops- The Club successfully hosted many workshops on c, python,
          java language, creativity, cloud computing for the students of all the
          departments of Engineering. <br />
          Industrial Visits- The Club has done many industrial visits like at
          ISRO, PRL, Nidhi polymer and Design Demo Day at VGEC.
        </p>
      </div>
    </div>
  );
}
