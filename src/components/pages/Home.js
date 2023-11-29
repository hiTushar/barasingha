import React from 'react';
import Banner from '../../components/pages/Banner';
import Environment from '../../components/sections/Environment/Environment';
import Security from '../../components/sections/Security/Security';
import Solutions from '../../components/sections/Solutions/Solutions';
import Certifications from '../../components/sections/Certifications/Certifications';
import Process from '../../components/sections/Process/Process';
import Interested from '../../components/sections/Interested/Interested';
import Partners from '../../components/sections/Partners/Partners';
import Packages from '../../components/sections/Packages/Packages';
import video from "../../media/ball.mp4";

function Home({ 
               setShowContactUsModal = () => {},
               setShowWentWrong = () => {},
               setShowPage404 = () => {},
               setShowSendingFailed = () => {},
               setShowWrongPassword = () => {} 
            }) {

   window.scrollTo({ top: 0, behavior: 'smooth' })
   
   return (
      <>
         <Banner setShowContactUsModal={setShowContactUsModal}
                 setShowWentWrong={setShowWentWrong}
                 setShowPage404={setShowPage404}
                 setShowSendingFailed={setShowSendingFailed}
                 setShowWrongPassword={setShowWrongPassword}
               />
         <Environment />
         <div className="env_video_container">
            <div className="env_video">
               <video src={video} autoPlay loop muted playsInline></video>
            </div>
         </div >
         <Security />
         <Packages />
         <Solutions />
         <Certifications />
         <Process />
         <Partners />
         <Interested setShowContactUsModal={setShowContactUsModal} />
      </>
   )
}

export default Home;