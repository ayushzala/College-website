import React from "react";
import { Link } from "react-router-dom";

export default function Academic() {
  return (
    <div >
      <div className="flex w-full justify-between items-center p-3 bg-gray-100">
        <h1 className=" text-md sm:text-2xl font-semibold tracking-wider ">
          Under Graduate Courses
        </h1>
        <Link
          to="/"
          className="hover:text-blue-600 hover:underline underline-offset-4 font-semibold"
        >
          Home
        </Link>
      </div>

      <div className=" w-full  sm:max-w-6xl sm:mx-auto flex flex-col sm:flex-row justify-evenly mt-10">
        <div className="mb-10">
          <table className="border border-collapse border-gray-200 m-2">
            <tr className="text-sm sm:text-md border border-collapse border-gray-200 text-center text-white bg-blue-800 ">
              <th className="text-center">Index</th>
              <th>Name of Course</th>
              <th>Period</th>
              <th>Intake</th>
            </tr>
            <tr className=" border border-collapse border-gray-200 text-center " >
              <td>1</td>
              <td>Artificial Intelligence and Machine Learning</td>
              <td>4</td>
              <td>60</td>
            </tr>
            <tr className=" border border-collapse border-gray-200 text-center">
              <td className="text-center">2</td>
              <td>Automobile Engineering</td>
              <td>4</td>
              <td>120</td>
            </tr>
            <tr className=" border border-collapse border-gray-200 text-center">
              <td>3</td>
              <td>Biomedical Engineering</td>
              <td>4</td>
              <td>60</td>
            </tr>
            <tr className=" border border-collapse border-gray-200 text-center">
              <td>4</td>
              <td>Chemical Engineering</td>
              <td>4</td>
              <td>60</td>
            </tr>
            <tr className=" border border-collapse border-gray-200 text-center">
              <td>5</td>
              <td>Civil Engineering</td>
              <td>4</td>
              <td>120</td>
            </tr>
            <tr className=" border border-collapse border-gray-200 text-center">
              <td>6</td>
              <td>Computer Engineering</td>
              <td>4</td>
              <td>120</td>
            </tr>
            <tr className=" border border-collapse border-gray-200 text-center">
              <td>7</td>
              <td>Electrical Engineering</td>
              <td>4</td>
              <td>120</td>
            </tr>
            <tr className=" border border-collapse border-gray-200 text-center">
              <td>8</td>
              <td>Electronics & Communication Engineering</td>
              <td>4</td>
              <td>120</td>
            </tr>
            <tr className=" border border-collapse border-gray-200 text-center">
              <td>9</td>
              <td>Environment Engineering</td>
              <td>4</td>
              <td>60</td>
            </tr>
            <tr className=" border border-collapse border-gray-200 text-center">
              <td>10</td>
              <td>Information Technology</td>
              <td>4</td>
              <td>120</td>
            </tr>
            <tr className=" border border-collapse border-gray-200 text-center">
              <td>11</td>
              <td>Instrumentation & Control Engineering</td>
              <td>4</td>
              <td>90</td>
            </tr>
            <tr className=" border border-collapse border-gray-200 text-center">
              <td>12</td>
              <td>Mechanical Engineering</td>
              <td>4</td>
              <td>120</td>
            </tr>
            <tr className=" border border-collapse border-gray-200 text-center">
              <td>13</td>
              <td>Plastic Technology</td>
              <td>4</td>
              <td>30</td>
            </tr>
            <tr className=" border border-collapse border-gray-200 text-center">
              <td>14</td>
              <td>Robotics and Automation</td>
              <td>4</td>
              <td>60</td>
            </tr>
            <tr className=" border border-collapse border-gray-200 text-center">
              <td>15</td>
              <td>Rubber Technology</td>
              <td>4</td>
              <td>30</td>
            </tr>
            <tr className=" border border-collapse border-gray-200 text-center">
              <td>16</td>
              <td>Textile Technology</td>
              <td>4</td>
              <td>60</td>
            </tr>
          </table>
        </div>

        <div>
          <div className="flex flex-col sm:flex-col justify-between items-center gap-4 mt-4">


            <div className="mb-2">
              <h1 className="text-2xl font-semibold text-blue-600 underline underline-offset-8 mb-5">
                Intake % Admission
              </h1>
              <ul className="flex flex-col mt-2 ">
                <Link to='/academic' className="hover:text-blue-400">BE Admission % Courses</Link>
                <Link to='/department' className="hover:text-blue-400">Working Professional Courses</Link>
                <Link to='/department' className="hover:text-blue-400">PG Admission & Courses</Link>
                <Link to='https://ldce.ac.in/upload/pdf/admission/phd/2021_AICTE_PHD_APPROVAL_LDCE.pdf' className="hover:text-blue-400">Fulltime Phd-ADF Scheme</Link>
              </ul>
            </div>


            <div className="mb-2">
              <h1 className="text-2xl font-semibold text-blue-600 underline underline-offset-8 mb-5">
                Intake % Admission
              </h1>
              <ul className="flex flex-col mt-2 ">
                <Link to='https://ldce.ac.in/upload/pdf/academic-calender/AC_Even_2023-24.pdf' className="hover:text-blue-400">Academic Calender</Link>
                <Link to='https://ldce.ac.in/upload/pdf/brochure/center-of-excellence-brochure-1smTbR.pdf' className="hover:text-blue-400">Brochure</Link>
                <Link to='https://ldce.ac.in/upload/pdf/EducationVerification.pdf' className="hover:text-blue-400">Education Verification</Link>
                <Link to='https://gtu.ac.in/Syllabus/Syllabus.aspx' className="hover:text-blue-400">Syllabus</Link>
              </ul>
            </div>


            <div className="mb-2">
              <h1 className="text-2xl font-semibold  text-blue-600 underline underline-offset-8 mb-5">
                Intake % Admission
              </h1>
              <ul className="flex flex-col mt-2 ">
                <Link to='https://ldce.ac.in/upload/pdf/aicte-eoa/aicte_eoa_report_2024_25.pdf' className="hover:text-blue-400">AICTE EOA</Link>
                <Link to='https://ldce.ac.in/upload/pdf/admission/Policy/AICTE_Enviroment_Policy.pdf' className="hover:text-blue-400">AICTE Environment Policy</Link>
                <Link to='https://ldce.ac.in/upload/pdf/nba-documents/Accreditation-Status.pdf' className="hover:text-blue-400">Acreditation Status</Link>
                <Link to='https://ldce.ac.in/upload/pdf/gtu_affiliation/gtu_affiliation-2023-24-MCA.pdf' className="hover:text-blue-400">GTU afilliation</Link>
                <Link to='https://ldce.ac.in/upload/pdf/NIRF/L.D.College%20of%20Engineering,%20Ahmedabad%20028.20210224-.pdf' className="hover:text-blue-400">NIRF</Link>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
