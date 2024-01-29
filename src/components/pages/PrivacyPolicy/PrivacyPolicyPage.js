import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ContactUsModal from "../Forms/ContactUs";
import "./PrivacyPolicyPage.scss";
import PrivacyPolicyData from "./PrivacyPolicyPageData";

export const PrivacyPolicyPage = () => {

   useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   }, [])

   const[showContactUsModal, setShowContactUsModal] =useState(false);

   const closeContactUsModal = () => setShowContactUsModal(false);

   const data = PrivacyPolicyData;
   return (
      data && (
         <div className="PrivacyPolicy_container">
            <div className="PrivacyPolicy_main component-container">
               <div className="content">
                  <div className="title-wrapper">
                     <h1 className="privacy_policy_heading text-center">{data.title}</h1>
                     <p className="para opacity-3 mt-3 text-center">{data.date}</p>
                  </div>
                  <div className="policy_details">
                  <div className="details">
                        <h2 className="heading heading--three">Biz Secure Labs PVT. Ltd.(BSLPL)</h2>
                        <div className="subtopics">
                           <p className="para para--light">
                              A company based in India, is the developer of computer or mobile security software products by the name of Net Protector, Total Security, Internet Security, NPAV End Point Security, NPAV Corp Web Control, NPAV Home Web Control, Antivirus and Mobile Security. ("NPAV Security").
                           </p>

                           <p className="para para--light">
                              We take the privacy of our customers seriously and are committed to safeguarding your privacy while you use our services. This policy describes the types of information we collect when you use BSLPL Services and Software, how we may use that information and with whom we may share it. Our privacy policy also describes the measures we take to protect the information you share with us. Should you have any questions, please contact us at <button className="help" onClick={() => setShowContactUsModal(true)}>help@npav.net</button> Our website may contain links to third party sites which are not subject to the privacy practices or content of the third party sites, and BSLPL encourages you to read the privacy policy of any third party site you may visit.
                           </p>
                        </div>
                        </div>
                     {data.subtopics &&
                        data.subtopics.map((subtopics) => (
                           <div className="details" key={uuidv4()}>
                              <h2 className="heading heading--three">{subtopics.title}</h2>

                              {subtopics &&
                                 subtopics.points &&
                                 subtopics.points.map((item) => (
                                    <div className="subtopics" key={uuidv4()}>
                                       {item && item.subtitle !== "" && (
                                          <h3 className="subtitle">{item.subtitle}</h3>
                                       )}
                                       <ul>
                                          {item &&
                                             item.subpoints.map((subpoints, index) => (
                                                <li className="para opacity" key={index}>{subpoints}</li>
                                             ))}
                                       </ul>
                                    </div>
                                 ))}
                           </div>
                        ))}
                  </div>
               </div>
            </div>
            {showContactUsModal && <ContactUsModal closeContactUsModal={closeContactUsModal}/>}
         </div>
      )
   );
};