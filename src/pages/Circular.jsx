import React from "react";
import { Link } from "react-router-dom";


export default function Circular() {
  return (
    <div>
      <div className="px-10 py-3  tracking-wider font-semibold bg-gray-200 flex flex-row justify-between items-center mb-10 ">
        <h1 className="text-lg sm:text-2xl">Important Circulars</h1>
        <Link to='/' className="hover:text-blue-600 hover:underline underline-offset-4">Home</Link>
      </div>

      <div className="max-w-6xl mx-auto bg-gray-100 p-10 rounded-lg flex flex-col gap-6 mb-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-white bg-blue-600 p-2 text-xl rounded-lg">News Letters</h1>
          <ul className="flex flex-col px-6 leading-loose">
            <span><Link to='https://ldce.ac.in/upload/pdf/newsletters//ldce-newsletter-january-march-2024-CIvVPc.pdf'> LDCE Newsletter January-March 2024</Link></span>
            <span><Link to='https://ldce.ac.in/upload/pdf/newsletters//ldce-newsletter-october-december-2023-hVG24Y.pdf'> LDCE Newsletter October-December 2023</Link></span>
            <span><Link to='https://ldce.ac.in/upload/pdf/newsletters//ldce-newsletter-july-september-2023-CvFA3D.pdf'> LDCE Newsletter July-September 2023</Link></span>
            <span><Link to='https://ldce.ac.in/upload/pdf/newsletters//ldce-newsletter-october-december-2022-mNpBjQ.pdf'> LDCE Newsletter October-December 2022</Link></span>
            <span><Link to='https://ldce.ac.in/upload/pdf/newsletters//ldce-newsletter-july-september-2022-qseBl3.pdf'> LDCE Newsletter July-September 2022</Link></span>
            <span><Link to='https://ldce.ac.in/upload/pdf/newsletters//ldce-newsletter-april-june-2023-NmGBol.pdf'> LDCE Newsletter April-June 2023</Link></span>
            <span><Link to='https://ldce.ac.in/upload/pdf/newsletters//ldce-newsletter-january-march-2023.pdf'> LDCE Newsletter January-March 2023</Link></span>
            <span><Link to='https://ldce.ac.in/upload/pdf/newsletters//ldce-newsletter-april-june-2022-AcaPs7.pdf'>  LDCE Newsletter April-June 2022</Link></span>
            <span><Link to='https://ldce.ac.in/upload/pdf/newsletters//ldce-newsletter-january-march-2022-RlClHB.pdf'>  LDCE Newsletter January-March 2022</Link></span>
            <span><Link to='https://ldce.ac.in/upload/pdf/newsletters//ldce-newsletter-october-december-2021-Z8N7qk.pdf'>  LDCE Newsletter October-December 2021</Link></span>
            <span><Link to='https://ldce.ac.in/upload/pdf/newsletters//ldce-newsletter-july-september-2021-cASW2a.pdf'>  LDCE Newsletter July-September 2021</Link></span>
            <span><Link to='https://ldce.ac.in/upload/pdf/newsletters//ldce-newsletter-april-june-2021-SB7MP2.pdf'> LDCE Newsletter April-June 2021</Link></span>
            <span><Link to='https://ldce.ac.in/upload/pdf/newsletters//ldce-newsletter-january-march-2021-K9zgJt.pdf'>  LDCE Newsletter January-March 2021</Link></span>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
        <h1 className="text-white bg-blue-600 p-2 text-xl rounded-lg">Circulars</h1>
          <ul className="flex flex-col px-6 leading-loose">
            <span><Link to='https://ldce.ac.in/upload/pdf/circular/student-transfer-gr-AwCuNo.pdf'>Student Transfer GR</Link></span>
            <span><Link to='https://ldce.ac.in/upload/pdf/circular/optional-holidays-2024-yG6beu.pdf'>Optional Holidays 2024</Link></span>
            <span><Link to='https://ldce.ac.in/upload/pdf/circular/public-holidays-2024-cFzHum.pdf'>Public Holidays 2024</Link></span>
            <span><Link to='https://ldce.ac.in/upload/pdf/circular/institute-level-work-distribution-FXiiSr.pdf'> Institute Level Work Distribution</Link></span>
            <span><Link to='https://ldce.ac.in/upload/pdf/circular/rti-officer-rkYJ2D.pdf'> RTI Officer</Link></span>
            <span><Link to='https://ldce.ac.in/upload/pdf/circular/continuous-evaluation-guidelines-jqZBxu.pdf'>Continuous Evaluation Guidelines</Link></span>
            <span><Link to='https://ldce.ac.in/upload/pdf/circular/gtu-rules-regulations-FuVvTS.pdf'> GTU Rules & Regulations</Link></span>
            <span><Link to='https://ldce.ac.in/upload/pdf/circular/new-email-service-for-ldce-students-cMsupT.pdf'> New Email Service for LDCE Students</Link></span>
            <span><Link to='https://ldce.ac.in/upload/pdf/circular/circular-students-rules-and-regulation-5BqTpN.pdf'> Students rules and regulation</Link></span>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
        <h1 className="text-white bg-blue-600 p-2 text-xl rounded-lg">Achievements</h1>
          <ul className="flex flex-col px-6">
            <span><Link to='/achivement'>Achivements</Link></span>
          </ul>
        </div>
      </div>
    </div>
  );
}
