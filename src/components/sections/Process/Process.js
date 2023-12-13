import React from 'react';
import './Process.scss';
import video from '../../../media/process.webm'

function Process() {
   return (
      <div className="process_container">
         <div className="container">
            <div className="process_heading">PROCESS</div>
            <div className="work">How it Works?</div>
            <div className="video_container mx-auto">
               <video disableRemotePlayback className="video" src={video} autoPlay loop muted playsInline/>
            </div>
            <div className="process-ellipse"></div>
         </div>
      </div>
   );
}

export default Process;