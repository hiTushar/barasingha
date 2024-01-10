import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import fulltime from "../../../media/fulltime.svg";
import remote from "../../../media/remote.svg";
import arrowDown from "../../../media/arrowdown.svg";
import './CareerDetailsPage.scss';
import positionDetailsData from "../../data/positionDetails.json";
import LinkArrow from '../../../media/arrow.svg';
import WorkModal from '../Forms/Work';

function CareerDetailsPage() {

   useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   }, [])

   const history = useHistory();

   const [currentTab, setCurrentTab] = useState('1');
   const careerNav = useRef(null);

   const [showWorkWithUsModal, setShowWorkWithUsModal] = useState(false);

   const closeWorkWithUsModal = () => setShowWorkWithUsModal(false);

   // const [tabs, setTabData] = useState([]);

// useEffect(() => {
//    fetchData();
//  }, []);

//  const fetchData = () => {
//    try {
//      const response = positionDetailsData; // this will be the fetch point
//       if(response && response.status === 200 ){
//          const result = response.results;
//          setTabData(result);
//       }
//       else {
//          //alert once design team confirms
//       }
//    } catch (error) {
//      console.error('Error fetching data:', error);
//    }
//  };

   const tabs = positionDetailsData.results;

   const handleTabClick = (e) => {
      setCurrentTab(e.target.id);
   }

   const scroll = (scrollOffset) => {
      careerNav.current.scrollLeft += scrollOffset;
   };

   return (
      <div className="career_details_container">
         <div className="component-container">
            <div className="title-wrapper">
               <div className='title-link-arrow' onClick={() => history.goBack()}>
                  <img src={LinkArrow} alt={'arrow'} />
               </div>
               <div className='title-header'>
                  <h6 className="career_details_title">Available Career Positions</h6>
                  <h2 className="career_details_join_team">Join our team and help us build a secure future</h2>
               </div>
            </div>

            <div className='career_details'>
               <div className="tabs-wrapper">
                  <div className='tabs' ref={careerNav}>
                     {tabs.map((tab, i) =>
                        <>
                           <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}({tab.positions.length}) </button>
                           <div className='saperator-wrapper'>
                              <span className="saperator"></span>
                           </div>
                        </>
                     )}
                  </div>

                  <div className="tabs-btn">
                     <button className='btn btn-prev' onClick={() => scroll(-150)}><i className="pi pi-chevron-left"></i></button>
                     <button className='btn btn-next' onClick={() => scroll(150)}><i className="pi pi-chevron-right"></i></button>
                  </div>
               </div>
               <div className="padding_48"></div>
               <div className='career_detail_tabs_content'>
                  {tabs.map((tab, i) =>
                     <div key={i}>
                        {currentTab === `${tab.id}` &&
                           tab.positions.map((position, i) => {
                              let careerClassName = "see_all_description";
                              const length = tab.positions.length;
                              if(tab.positions[length-1] === position){
                                 careerClassName = "see_all_description_last" 
                              }
                              return (
                                 <div key={i}>
                                    <div className="title_details_container">
                                       <div className="title_place_exp">
                                          <div className="job_title">
                                             {position.jobName}
                                          </div>
                                          <div className="location_exp">
                                             {position.location} • {position.exp}
                                          </div>
                                       </div>
                                       <div className="buttons_container">
                                          {position.buttons.length === 2 ?
                                             <div className="two_button">
                                                <button className="career_details_apply margin_12" onClick={() => setShowWorkWithUsModal(true)}>APPLY NOW</button>
                                                <button className="career_details_save">SAVE</button>
                                             </div>
                                             : <div>
                                                <button className="career_details_apply">NOTIFY ME</button>
                                             </div>}
                                       </div>
                                    </div>
                                    <div className="jobtype">
                                       <img src={position.jobType === 'fulltime' ? fulltime : remote} alt={"jobtype"} />{position.jobType}
                                    </div>
                                    <input type="checkbox" id={`expend${i}`} />
                                    <div class="medium-12 small-12 columns smalldesc">
                                       <p class="font16 ">{position.desc} </p>
                                    </div>
                                    <label for={`expend${i}`}>
                                       <div className={careerClassName}>
                                          <span className='all'>See All Description</span>
                                          <span className='less'>Show Less Description</span>
                                          <img className="image" src={arrowDown} alt={arrowDown} />
                                       </div>
                                    </label>
                                    <div className="padding_48"></div>
                                 </div>
                              );
                           })
                        }
                     </div>
                  )}
               </div>
            </div>
         </div>
         {showWorkWithUsModal && <WorkModal closeContactUsModal={closeWorkWithUsModal} />}
      </div>
   );
}

export default CareerDetailsPage;