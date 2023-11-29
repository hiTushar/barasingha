import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import malware from "../../../../media/malware.png";
import PlayFilled from "../../../../media/PlayFilled.svg";
import './Features.scss';

function Features() {
   const [currentTab, setCurrentTab] = useState('1');
   const featuresNav = useRef(null);

   const tabs = [
      {
         id: 1,
         tabTitle: 'Root Cause Analysis',
         title: 'Root cause analysis cyber threat at its worst',
         description: 'All NPAV endpoints, including endpoints and mobiles, can be managed from our cloud-based unified management console Smart Network Manager.',
         link: "https://www.google.com",
         image: malware
      },
      {
         id: 2,
         tabTitle: 'View Problem Devices',
         title: '2 - Root cause analysis cyber threat at its worst',
         description: 'All NPAV endpoints, including endpoints and mobiles, can be managed from our cloud-based unified management console Smart Network Manager.',
         link: "https://www.google.com",
         image: malware
      },
      {
         id: 3,
         tabTitle: 'Remediation',
         title: '3 - Root cause analysis cyber threat at its worst',
         description: 'All NPAV endpoints, including endpoints and mobiles, can be managed from our cloud-based unified management console Smart Network Manager.',
         link: "https://www.google.com",
         image: malware
      },
      {
         id: 4,
         tabTitle: 'Success Story',
         title: '4 - Root cause analysis cyber threat at its worst',
         description: 'All NPAV endpoints, including endpoints and mobiles, can be managed from our cloud-based unified management console Smart Network Manager.',
         link: "https://www.google.com",
         image: malware
      },
      {
         id: 5,
         tabTitle: 'Success Story',
         title: '4 - Root cause analysis cyber threat at its worst',
         description: 'All NPAV endpoints, including endpoints and mobiles, can be managed from our cloud-based unified management console Smart Network Manager.',
         link: "https://www.google.com",
         image: malware
      },
      {
         id: 6,
         tabTitle: 'Success Story',
         title: '4 - Root cause analysis cyber threat at its worst',
         description: 'All NPAV endpoints, including endpoints and mobiles, can be managed from our cloud-based unified management console Smart Network Manager.',
         link: "https://www.google.com",
         image: malware
      },
      {
         id: 7,
         tabTitle: 'Success Story',
         title: '4 - Root cause analysis cyber threat at its worst',
         description: 'All NPAV endpoints, including endpoints and mobiles, can be managed from our cloud-based unified management console Smart Network Manager.',
         link: "https://www.google.com",
         image: malware
      },
   ];
   const handleTabClick = (e) => {
      setCurrentTab(e.target.id);
   }
   const scroll = (scrollOffset) => {
      featuresNav.current.scrollLeft += scrollOffset;
   };

   return (
      <div className="features_container">
         <div className="container">
            <div className="title-wrapper">
               <h6 className="heading heading--fancy text-center">Details</h6>
               <h2 className="heading heading--two text-center my-2">Features</h2>
            </div>

            <div className='features'>
               <div className="tabs-wrapper">
                  <div className='tabs' ref={featuresNav}>
                     {tabs.map((tab, i) =>
                        <>
                           <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
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
               <div className='content'>
                  {tabs.map((tab, i) =>
                     <div key={i}>
                        {currentTab === `${tab.id}` &&
                           <div className='tab-item'>
                              {/* Image */}
                              <div className="image-wrapper">
                                 <img src={malware} alt="malware" />
                              </div>
                              <div className="tab-content">
                                 <h2 className="heading heading--two">
                                    {tab.title}
                                 </h2>
                                 <p className="para para--light">
                                    {tab.description}
                                 </p>
                                 <div className='link'>
                                    <span>Watch Video</span>
                                    <img src={PlayFilled} alt="play" />
                                 </div>
                              </div>
                           </div>
                        }
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Features;