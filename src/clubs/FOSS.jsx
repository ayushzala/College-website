import React from "react";
import { Link } from "react-router-dom";
import c3 from '../assets/c_3.jpg'

export default function FOSS() {
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
          &nbsp;&gt;&nbsp;FOSS Programming Club LDCE
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
          src={c3}
          alt="foss Image"
          className="shadow-2xl w-80 h-auto"
        />
        <p className="tracking-wide leading-relaxed p-4">
          What makes a university or institute powerful? The resources? We
          believe it is the ideas, which stem from the people who study or teach
          in an institute. There is no doubt that L. D. College of Engineering
          attracts the nation's best minds. <br /><br />
          'FOSS Programming Club' aims to strengthen the weak areas as compared
          to global students of computer sciences. One of it is `Competitive
          Coding`. <br /><br />
          `Competitive Coding`, very frankly is a sport and enlists all benefits
          of it, namely keeping the brain alert and active. <br /><br />
          Though these are the areas we prioritize this year, our vision enlists
          stimulating the young minds to think of new ideas and beat them to
          death. We wish to create an environment which encourages students to
          take up challenges in the subject, and more importantly have a culture
          of completing them, which at the ground level involves having more
          than a prototype; a product along with a documentation. <br /><br />
          Central to all stated above is creating a work culture where we guide
          the students towards methodically finding a solution to their problems
          and coming up with results rather than dropping good ideas. <br /><br />
          Activities organized by the club can be broadly organized into
          Development (Web Development, Open Source, Game/App Development) and
          programming contests. Lecture series are regularly taken on
          algorithms, web hijacking, game development and android app
          development platforms. Club has different sub parts like the
          “Algorithms Interests Group” and “Developer’s Group”. Apart from
          activities for its members, club also develops various applications to
          be used by the campus and college Fest. <br /><br />
          During summers, FOSS Programming Club offers a variety of projects to
          the first year students. It acts as a great learning experience for
          them as well as exposes them to software development. It has kept an
          archive of projects previously offered so that students can build
          above them. Lectures on algorithmic programming are taken throughout
          the semester as well as in the summer. Weekend Programming Contests
          are held regularly at its own online judge to increase the interest of
          students in competitive programming as well as to improve their
          practice.
        </p>
      </div>
    </div>
  );
}
