import React from "react";
import { Link } from "react-router-dom";

export default function Sports() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center bg-gray-200 py-3 px-20">
        <p className="text-lg sm:text-2xl tracking-wider font-semibold">
          <Link
            to="/campuslife"
            className="hover:text-blue-600 hover:underline underline-offset-4"
          >
            CampusLife
          </Link>
          &nbsp;&gt;&nbsp;Sports
        </p>
        <Link
          to="/"
          className="hover:text-blue-600 hover:underline underline-offset-4 font-semibold"
        >
          Home
        </Link>
      </div>

      <div className="max-w-4xl mx-auto  my-10">
        <img src="https://ldce.ac.in/img/sliders/sports/1.jpg" className="rounded-lg" />
      </div>

      <div className="w-full sm:max-w-6xl sm:mx-auto my-10">
        <div className="border w-auto h-auto p-5 bg-gray-100  flex flex-row items-center gap-5 border-l-blue-800">
          <img
            src="https://ldce.ac.in/upload/logo/sports/cricket.png"
            alt="Cricket image"
            className="flex self-start w-60 h-auto"
          />

          <div className="flex flex-col gap-5 ml-4">
            <h1 className="text-3xl text-blue-700 font-semibold tracking-wide  hover:underline underline-offset-8">
              Cricket
            </h1>
            <p className="text-lg tracking-wide font-semibold">
              Cricket is more of a religion to the people of India and so it is
              to L.D.C.E. The institute team has constantly dominated the
              inter-college sports meet and is a force to reckon with. The
              inter-year and L.D Cup tournaments are also fiercely contested and
              more often than not, produce new talents for the university team.
            </p>
            <Link to="https://en.wikipedia.org/wiki/Cricket">
              <button className="bg-blue-700 px-3 py-2 font-semibold text-lg text-white rounded-lg">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-10">
        <div className="border w-auto h-auto p-5 bg-gray-100  flex flex-row items-center gap-5 border-l-blue-800">
          <img
            src="https://ldce.ac.in/upload/logo/sports/football.png"
            alt="Football image"
            className="flex self-start w-60 h-auto"
          />

          <div className="flex flex-col gap-5 ml-4">
            <h1 className="text-3xl text-blue-700 font-semibold tracking-wide  hover:underline underline-offset-8">
              Football
            </h1>
            <p className="text-lg tracking-wide font-semibold">
              With the sudden resurgence of football in our country, it has
              found its feet in the field of sports. Our very own Ronaldinho’s
              and Ronaldo’s slog it out daily in the well-maintained football
              field. Experienced coaches provide the necessary guidance for
              students to hone their skills.
            </p>
            <Link to="https://en.wikipedia.org/wiki/Football">
              <button className="bg-blue-700 px-3 py-2 font-semibold text-lg text-white rounded-lg">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-10">
        <div className="border w-auto h-auto p-5 bg-gray-100  flex flex-row items-center gap-5 border-l-blue-800">
          <img
            src="https://ldce.ac.in/upload/logo/sports/tennis.png"
            alt="Tennis Image"
            className="flex self-start w-60 h-auto"
          />

          <div className="flex flex-col gap-5 ml-4">
            <h1 className="text-3xl text-blue-700 font-semibold tracking-wide  hover:underline underline-offset-8">
              Tennis
            </h1>
            <p className="text-lg tracking-wide font-semibold">
              LDCE is perhaps the only college that had the foresight of Lawn
              Tennis being one of the most progressive sport. As a result, the
              institute has two side by side concrete courts. LDCE team has been
              making headlines in recent years. Considering the very stiff
              competition in the inter-college sports meet, they have managed to
              bag several medals and trophies.
            </p>
            <Link to="https://en.wikipedia.org/wiki/Tennis">
              <button className="bg-blue-700 px-3 py-2 font-semibold text-lg text-white rounded-lg">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-10">
        <div className="border w-auto h-auto p-5 bg-gray-100  flex flex-row items-center gap-5 border-l-blue-800">
          <img
            src="https://ldce.ac.in/upload/logo/sports/badminton.png"
            alt="badminton Image"
            className="flex self-start w-60 h-auto"
          />

          <div className="flex flex-col gap-5 ml-4">
            <h1 className="text-3xl text-blue-700 font-semibold tracking-wide  hover:underline underline-offset-8">
              Badminton
            </h1>
            <p className="text-lg tracking-wide font-semibold">
              The institute boasts of a well-equipped indoor badminton hall
              apart from the badminton courts available in hostels. The hostel
              court is well-lit and students utilize them to often play
              badminton throughout the nights. The badminton team has been
              constantly bringing laurels to the institute in the inter-college
              sports meet and is provided with the best resources by the
              institute.
            </p>
            <Link to="https://en.wikipedia.org/wiki/Badminton">
              <button className="bg-blue-700 px-3 py-2 font-semibold text-lg text-white rounded-lg">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-10">
        <div className="border w-auto h-auto p-5 bg-gray-100  flex flex-row items-center gap-5 border-l-blue-800">
          <img
            src="https://ldce.ac.in/upload/logo/sports/table_tennis.png"
            alt="table tennis image"
            className="flex self-start w-60 h-auto"
          />

          <div className="flex flex-col gap-5 ml-4">
            <h1 className="text-3xl text-blue-700 font-semibold tracking-wide  hover:underline underline-offset-8">
              Table Tennis
            </h1>
            <p className="text-lg tracking-wide font-semibold">
              The institute has a wide array of table tennis facilities ranging
              from the indoor tennis hall. The indoor hall is for the practice
              of the institute team whereas the tables at UG and hostels are for
              the other students.
            </p>
            <Link to="https://en.wikipedia.org/wiki/Table_tennis">
              <button className="bg-blue-700 px-3 py-2 font-semibold text-lg text-white rounded-lg">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-10">
        <div className="border w-auto h-auto p-5 bg-gray-100  flex flex-row items-center gap-5 border-l-blue-800">
          <img
            src="https://ldce.ac.in/upload/logo/sports/volleyball.png"
            alt="volley ball image"
            className="flex self-start w-60 h-auto"
          />

          <div className="flex flex-col gap-5 ml-4">
            <h1 className="text-3xl text-blue-700 font-semibold tracking-wide  hover:underline underline-offset-8">
              Volley Ball
            </h1>
            <p className="text-lg tracking-wide font-semibold">
              The volleyball court in the institute are located near the cricket
              ground. The institute holds the state and inter-college level
              volleyball tournament every year. The sport of volleyball has thus
              got a great impetus in the institute as the players get to
              interact with trained team players, thus helping them to further
              improve their techniques and skills.
            </p>
            <Link to="https://en.wikipedia.org/wiki/Volleyball">
              <button className="bg-blue-700 px-3 py-2 font-semibold text-lg text-white rounded-lg">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-10">
        <div className="border w-auto h-auto p-5 bg-gray-100  flex flex-row items-center gap-5 border-l-blue-800">
          <img
            src="https://ldce.ac.in/upload/logo/sports/athletic.png"
            alt="aethletic image"
            className="flex self-start w-60 h-auto"
          />

          <div className="flex flex-col gap-5 ml-4">
            <h1 className="text-3xl text-blue-700 font-semibold tracking-wide  hover:underline underline-offset-8">
              Athletics
            </h1>
            <p className="text-lg tracking-wide font-semibold">
              Athletics at LDCE generates a lot of buzz. There is a myriad of
              well-trained athletes in the institute and they are representing
              LDCE at state and national level competitions.
            </p>
            <Link to="https://en.wikipedia.org/wiki/Sport_of_athletics">
              <button className="bg-blue-700 px-3 py-2 font-semibold text-lg text-white rounded-lg">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-10">
        <div className="border w-auto h-auto p-5 bg-gray-100  flex flex-row items-center gap-5 border-l-blue-800">
          <img
            src="https://ldce.ac.in/upload/logo/sports/chess.png"
            alt="chess image"
            className="flex self-start w-60 h-auto"
          />

          <div className="flex flex-col gap-5 ml-4">
            <h1 className="text-3xl text-blue-700 font-semibold tracking-wide  hover:underline underline-offset-8">
              Chess
            </h1>
            <p className="text-lg tracking-wide font-semibold">
              Chess is all about intelligence and thinking at the spur of the
              moment. LDCE's performance at LD Cup and inter-college
              competitions has been at par with any other reputed
              college/university. The institute promotes this sport by hosting
              annual chess tournament as a part of LD Cup.
            </p>
            <Link to="https://en.wikipedia.org/wiki/Chess">
              <button className="bg-blue-700 px-3 py-2 font-semibold text-lg text-white rounded-lg">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-10">
        <div className="border w-auto h-auto p-5 bg-gray-100  flex flex-row items-center gap-5 border-l-blue-800">
          <img
            src="https://ldce.ac.in/upload/logo/sports/kabaddi.png"
            alt="kabaddi image"
            className="flex self-start w-60 h-auto"
          />

          <div className="flex flex-col gap-5 ml-4">
            <h1 className="text-3xl text-blue-700 font-semibold tracking-wide  hover:underline underline-offset-8">
              Kabaddi
            </h1>
            <p className="text-lg tracking-wide font-semibold">
              Kabaddi has been the heart of Indian sports since decades. LDCE
              has successfully been able to revive the same sport. The institute
              has continuously produced quality kabaddi players at university
              level as well.
            </p>
            <Link to="https://en.wikipedia.org/wiki/Kabaddi">
              <button className="bg-blue-700 px-3 py-2 font-semibold text-lg text-white rounded-lg">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-10">
        <div className="border w-auto h-auto p-5 bg-gray-100  flex flex-row items-center gap-5 border-l-blue-800">
          <img
            src="https://ldce.ac.in/upload/logo/sports/kho_kho.png"
            alt="kho kho image"
            className="flex self-start w-60 h-auto"
          />

          <div className="flex flex-col gap-5 ml-4">
            <h1 className="text-3xl text-blue-700 font-semibold tracking-wide  hover:underline underline-offset-8">
              Kho Kho
            </h1>
            <p className="text-lg tracking-wide font-semibold">
              Kho-Kho is the most beloved sport at school level. Students have
              been incessantly encouraged to actively participate in the same at
              institute level. LD Cup, an annual sports fest has seen an influx
              of quality Kho-Kho players. This sport has seen unprecedented
              results at university level also.
            </p>
            <Link to="https://en.wikipedia.org/wiki/Kabaddi">
              <button className="bg-blue-700 px-3 py-2 font-semibold text-lg text-white rounded-lg">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
