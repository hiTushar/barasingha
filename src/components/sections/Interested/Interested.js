import React from 'react';
import './Interested.scss';
import { Button } from 'components/Button';

function Interested({ setShowContactUsModal = () => { } }) {

   return (
      <div className="interested_container">
         <div className='bg'></div>
         <div className="demo_content_container container">
            <div className="left_content">
               <h2 className="heading heading--two">Interested in Our Products?</h2>
               <p className="para para--lg para--light">Get personalised Quotation for the products you need.</p>
            </div>
            <div className="right_content">
               <Button onClick={() => setShowContactUsModal(true)}>INTERESTED?</Button>
            </div>
         </div>
      </div>
   );
}

export default Interested;