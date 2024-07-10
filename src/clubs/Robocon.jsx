import React from "react";
import { Link } from "react-router-dom";
import c6 from '../assets/c_6.png'

export default function Robocon() {
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
          &nbsp;&gt;&nbsp;Team Robocon LDCE
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
          src={c6}
          alt="Robocon"
          className="shadow-2xl w-80 h-auto"
        />
        <p className="tracking-wide leading-relaxed p-4">
        ABU (Asian Pacific Broadcasting Union) Robocon is an international event that is going to be organized in Indonesia in 2015, in which more than 35 countries take part from across the globe including China, Japan, Vietnam, Thailand, etc. A theme-based competition, for which a specific task is decided, depicts that pre decided theme of the host country. In 2015, the theme was ‘Robominton: Badminton Robo-Game’ which involves a badminton doubles game. To represent one’s own country, initially a national contest is held in all the participating countries and the winner team of that team gets the chance to represent its own country at the international level. <br /><br />

In India, more than 80 top colleges including IITs, NITs, BITS, etc. take part in this contest. LD College of engineering is one of those colleges, which has consistently been taking part in this contest from the last 14 years. Over these years, LD College of Engineering has been able to make its impact at the contest very effectively. In 2012, LD College of Engineering was successful to achieve the prestigious award of ‘Best Innovative Design’. In 2015, Robocon LDCE has been able to stand at respectable 3rd position among the top 84 colleges across the country. <br /><br />

Team Robocon LDCE is also very active in College. Team organize Lakshya fest every year in college and also do the all robotics events in GTU techfest. Team Robocon LDCE has taken an initiative and form Club Robocon LDCE which do different activities for students throughout the year.


        </p>
      </div>
    </div>
  );
}
