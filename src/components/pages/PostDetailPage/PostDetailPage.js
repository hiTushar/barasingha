import React from "react";
import "./PostDetailPage.scss";
import caseStudyData from "./PostDetailPageData.js";
import cyber from "../../../media/cyber_attack.svg";
import transfer from "../../../media/data_transfer.svg";
import { Button } from 'components/Button';

export const PostDetailPage = () => {

   window.scrollTo({ top: 0, behavior: 'smooth' })

   return (
      <div className="PostDetailPage_container">
         <div className="container">
            <div className="PostDetailPage_main">
               <div className="content">
                  <div className="survey">SURVEY RESEARCH</div>
                  <div className="CaseStudy_details">
                     <h1 className="heading heading--one blogHeading">{caseStudyData && caseStudyData.title}</h1>
                     <div className="para para--light  date">{caseStudyData && caseStudyData.date}</div>
                     <div className="points_container">
                        {caseStudyData &&
                           caseStudyData.subtopics.map((topic, index) => (
                              <div className="points">
                                 {topic && topic.title !== "" && (
                                    <h2 className="subtopic_title">{topic && topic.title}</h2>
                                 )}
                                 <ul>
                                    {topic &&
                                       topic.points.map((point, index) => <li>{point}</li>)}
                                 </ul>
                                 {index === 0 && (
                                    <img
                                       className="cyber"
                                       src={cyber}
                                       alt="cyber"
                                       title="cyber"
                                    />
                                 )}
                              </div>
                           ))}
                        <div className="extra_data">
                           <div className="transfer">
                              <img src={transfer} title="transfer" alt="transfer" />
                           </div>
                           <div className="group">
                              <div className="text">
                                 <div>
                                    Whether acquired through ransomware or other hacking
                                    mechanisms, data theft is a serious issue. There is a big
                                    market on the dark web for banking information and
                                    sensitive personal information of customers, vendors, and
                                    employees, including social security numbers and credit
                                    card information.
                                 </div>
                                 <div>
                                    If a company has inadequate safeguards to protect the
                                    sensitive information it has been entrusted with, there
                                    can be serious potential liability implications and risks
                                    of reputational harm.
                                 </div>
                              </div>
                              {/* <div className="read_more">
                                 <span>Read More</span>
                                 <img src={sideArrow} alt="sideArrow" title="sideArrow" />
                              </div> */}
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="buttons">
                     <Button buttonStyle="btn--outline">Previous</Button>
                     <Button buttonStyle="button2">Read Next</Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};