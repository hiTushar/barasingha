import React, { Suspense, lazy } from 'react';
import Banner from '../../components/pages/Banner';
import video from "../../media/ball.mp4";
import Loader from '../../components/Loader';

const Environment = lazy(() => import('../../components/sections/Environment/Environment'));
const Security = lazy(() => import('../../components/sections/Security/Security'));
const Packages = lazy(() => import('../../components/sections/Packages/Packages'))
const Solutions = lazy(() => import('../../components/sections/Solutions/Solutions'));
const Certifications = lazy(() => import('../../components/sections/Certifications/Certifications'));
const Process = lazy(() => import('../../components/sections/Process/Process'));
const Partners = lazy(() => import('../../components/sections/Partners/Partners'));
const Interested = lazy(() => import('../../components/sections/Interested/Interested'));

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
         <Suspense fallback={<Loader />}>
            <Environment />
         </Suspense>
         <div className="env_video_container">
            <div className="env_video">
               <video disableRemotePlayback src={video} autoPlay loop muted playsInline></video>
            </div>
         </div >
         <Suspense fallback={<Loader />}>
            <Security />
         </Suspense>
         <Suspense fallback={<Loader />}>
            <Packages />
         </Suspense>
         <Suspense fallback={<Loader />}>
            <Solutions />
         </Suspense>
         <Suspense fallback={<Loader />}>
            <Certifications />
         </Suspense>
         <Suspense fallback={<Loader />}>
            <Process />
         </Suspense>
         <Suspense fallback={<Loader />}>
            <Partners />
         </Suspense>
         <Suspense fallback={<Loader />}>
            <Interested setShowContactUsModal={setShowContactUsModal} />
         </Suspense>
      </>
   )
}

export default Home;