import React, { useState, useRef } from 'react';
import placeholder3 from "../../../../media/placeholder_img_3.webp";
import PlayFilled from "../../../../media/PlayFilled.svg";
import './Features.scss';
import pattern from '../../../../media/pattern1.webp';

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
         image: placeholder3
      },
      {
         id: 2,
         tabTitle: 'View Problem Devices',
         title: '2 - Root cause analysis cyber threat at its worst',
         description: 'All NPAV endpoints, including endpoints and mobiles, can be managed from our cloud-based unified management console Smart Network Manager.',
         link: "https://www.google.com",
         image: placeholder3
      },
      {
         id: 3,
         tabTitle: 'Remediation',
         title: '3 - Root cause analysis cyber threat at its worst',
         description: 'All NPAV endpoints, including endpoints and mobiles, can be managed from our cloud-based unified management console Smart Network Manager.',
         link: "https://www.google.com",
         image: placeholder3
      },
      {
         id: 4,
         tabTitle: 'Success Story',
         title: '4 - Root cause analysis cyber threat at its worst',
         description: 'All NPAV endpoints, including endpoints and mobiles, can be managed from our cloud-based unified management console Smart Network Manager.',
         link: "https://www.google.com",
         image: placeholder3
      },
      {
         id: 5,
         tabTitle: 'Success Story',
         title: '4 - Root cause analysis cyber threat at its worst',
         description: 'All NPAV endpoints, including endpoints and mobiles, can be managed from our cloud-based unified management console Smart Network Manager.',
         link: "https://www.google.com",
         image: placeholder3
      },
      {
         id: 6,
         tabTitle: 'Success Story',
         title: '4 - Root cause analysis cyber threat at its worst',
         description: 'All NPAV endpoints, including endpoints and mobiles, can be managed from our cloud-based unified management console Smart Network Manager.',
         link: "https://www.google.com",
         image: placeholder3
      },
      {
         id: 7,
         tabTitle: 'Success Story',
         title: '4 - Root cause analysis cyber threat at its worst',
         description: 'All NPAV endpoints, including endpoints and mobiles, can be managed from our cloud-based unified management console Smart Network Manager.',
         link: "https://www.google.com",
         image: placeholder3
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
         <div className="component-container position-relative">
            <div className="title-wrapper">
               <p className="heading--fancy text-center">Details</p>
               <p className="heading--two text-center my-2">Features</p>
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
                                 <img src={placeholder3} alt="malware" />
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
            <div className='bg'>
               <img src={pattern} alt='pattern' />
            </div>
         </div>
      </div>
   );
}

export default Features;