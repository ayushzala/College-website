import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-black">
      <footer className=" flex flex-col sm:flex-row sm:mx-auto max-w-6xl mx-auto justify-between pb-10 px-10">
      <div className="text-white flex-col sm:flex-row  ">
        <h1 className="text-xl my-6 underline underline-offset-8">Quick Links</h1>
            <ul className="flex flex-col gap-2 ">
                <li className="hover:text-red-600"><Link to='/campusmap'>CampusMap</Link></li>
                <li className="hover:text-red-600"><Link to='https://s3-ap-southeast-1.amazonaws.com/gtusitecirculars/uploads/Induction%20Program_Final_687199.pdf'>Student Induction Program</Link></li>
                <li className="hover:text-red-600"><Link to='/links'>Important Links</Link></li>
                <li className="hover:text-red-600"><Link to='https://aicte-india.org/feedback/'>AICTE Feedback</Link></li>
            </ul>
        </div>
        <div className="text-white">
            <h1 className="text-xl my-6 underline underline-offset-8">About</h1>
            <ul className="flex flex-col gap-2 ">
                <li className="hover:text-red-600"><Link to='/about'>History</Link></li>
                <li className="hover:text-red-600"><Link to='/academic'>Admission Procedure</Link></li>
                <li className="hover:text-red-600"><Link to='/academic'>Fees & Scholarship</Link></li>
            </ul>
        </div>
        
        <div className="text-white">
        <h1 className="text-xl my-6 underline underline-offset-8">Inportant Info.</h1>
            <ul className="flex flex-col gap-2 ">
                <li className="hover:text-red-600"><Link to='https://rti.gov.in/'>Right To Info.</Link></li>
                <li className="hover:text-red-600"><Link to='https://ldce.ac.in/upload/pdf/legal/mou/MOU_LDCE_BIS_2023.pdf'>MOU</Link></li>
                <li className="hover:text-red-600"><Link to='https://ldce.ac.in/upload/pdf/legal/teqip/TEQIP_Equipment.pdf'>TEQIP</Link></li>
                <li className="hover:text-red-600"><Link to='https://ldce.ac.in/upload/pdf/legal/Mandatory_Disclosure.pdf'>Mandatory Disclosure</Link></li>
                <li className="hover:text-red-600"><Link to='https://ldce.ac.in/upload/pdf/legal/tender-notice/detail_spec_220914.pdf'>Tender Notice</Link></li>
            </ul>
        </div>
        <div className="text-white">
        <h1 className="text-xl my-6 underline underline-offset-8">Conatct Us</h1>
            <ul className="flex flex-col gap-2 ">
                <li className="hover:text-red-600 text-blue-400 font-semibold"><Link to='https://ldce.ac.in/'>L.D. College Of Eng.</Link></li>
                <li>Opp Gujarat University, <br />
                                                    Navrangpura, Ahmedabad - 380015. <br />
                                                    GUJARAT INDIA</li>
            </ul>
        </div>
      </footer>
    </div>
  );
}
