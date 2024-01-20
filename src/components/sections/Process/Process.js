import React from 'react';
import './Process.scss';
import video from '../../../media/process.webm'

function Process() {
   return (
      <div className="process_container">
         <div className="component-container">
            <div className='title-wrapper'>
               <p className="heading heading--fancy">PROCESS</p>
               <p className="heading heading--two">How it Works?</p>
            </div>
            <div className="video_container mx-auto">
               <video disableRemotePlayback className="video" src={video} autoPlay loop muted playsInline/>
            </div>
         </div>
         <div className="process-ellipse"></div>
      </div>
   );
}

export default Process;