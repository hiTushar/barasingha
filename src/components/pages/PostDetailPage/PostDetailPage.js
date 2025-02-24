import React, { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./PostDetailPage.scss";
import caseStudyData from "./PostDetailPageData.js";
import cyber from "../../../media/cyber_attack.webp";
import transfer from "../../../media/data_transfer.svg";
import { Button } from 'components/Button';
import LinkArrow from '../../../media/arrow.svg';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const PostDetailPage = () => {

   const history = useHistory();
   
   useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   }, [])

   return (
      <div className="PostDetailPage_container">
         <div className="component-container">
            <div className="PostDetailPage_main">
               <div className="content">
                  <div className="content-back-button" onClick={() => history.goBack()}>
                     <img src={LinkArrow} alt={'back button'} /> 
                  </div>
                  <div className="survey">SURVEY RESEARCH</div>
                  <div className="CaseStudy_details">
                     <h1 className="heading heading--one blogHeading">{caseStudyData && caseStudyData.title}</h1>
                     <div className="para para--light  date">{caseStudyData && caseStudyData.date}</div>
                     <div className="points_container">
                        {caseStudyData &&
                           caseStudyData.subtopics.map((topic, index) => (
                              <div className="points" key={uuidv4()}>
                                 {topic && topic.title !== "" && (
                                    <h2 className="subtopic_title">{topic && topic.title}</h2>
                                 )}
                                 <ul>
                                    {topic &&
                                       topic.points.map((point, index) => <li key={uuidv4()}>{point}</li>)}
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
                     <Button buttonStyle="btn--outline">PREVIOUS</Button>
                     <Button buttonStyle="button2">READ NEXT</Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};