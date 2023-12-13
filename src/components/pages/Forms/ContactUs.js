import './ContactUs.scss';
import head from '../../../media/ExtractedHead3.png';
import close from '../../../media/closeoutlined.svg';
import { useState } from 'react';
import SuccessModal from './Success';

const ContactUsModal = ({closeContactUsModal}) => {


  const[showSuccessModal, setShowSuccessModal] =useState(false);
  const [showContactModal, setShowContactModal] = useState(true);
    
    return(
      <>
      <div className="contact_us_wrapper"></div>
      {showContactModal &&
            <>
               
               <div className="contact_us_container">
        <div className="left_container">
            <div className="contact_us">Contact us</div>
            <div className="send_us">Send us a message and we will get back ASAP!</div>
            <div className="barasingha_head">
                <img src={head} alt={head}/>
            </div>
        </div>
        <div className="right_container">
            <div className="close" onClick={closeContactUsModal}>
                <img src={close} alt="close"></img>
            </div>
            <div className="input_name">
                Name <div className="mandatory">*</div>
            </div>
            <div className="contact_us_bar pad_bot">
                <input class="contactus_input" type="text"></input>
            </div>
            <div className="input_name">
                Email <div className="mandatory">*</div>
            </div>
            <div className="contact_us_bar pad_bot">
                <input class="contactus_input" type="text"></input>
            </div>
            <div className="input_name">
                Message
            </div>
            <div className="contact_us_bar">
                <input class="contactus_message" type="text"></input>
            </div>
            <div className="max_character">
                Maximum 2000 characters
            </div>
            <button className="send_message_container" onClick={() => { setShowSuccessModal(true); setShowContactModal(false) }}>SEND MESSAGE</button>
        </div>
        </div>
            </>
         }
         {showSuccessModal && <SuccessModal closeContactUsModal={closeContactUsModal} />}
      </>
    );
  }

  export default ContactUsModal;