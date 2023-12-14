import React from 'react';
import './Demo.scss';
import { Button } from "../../../Button";

function Demo({ setShowContactUsModal = () => { } }) {

   return (
      <div className="demo_container">
         <div className='bg'></div>
         <div className="demo_content_container component-container">
            <div className="left_content">
               <h2 className="heading heading--two">Want to Try This Solution?</h2>
               <p className="para para--lg para--light">Meet the needs of your business with Security solutions to evolve your organization</p>
            </div>
            <div className="right_content">
               <Button onClick={() => setShowContactUsModal(true)}>Get a free demo</Button>
            </div>
         </div>
      </div>
   );
}

export default Demo;