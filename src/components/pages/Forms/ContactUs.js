/* eslint-disable no-unused-vars */
import './ContactUs.scss';
import head from '../../../media/ExtractedHead3.webp';
import { useState } from 'react';
import SuccessModal from './Success';

const ContactUsModal = ({ closeContactUsModal }) => {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showContactModal, setShowContactModal] = useState(true);

    const submitForm = (event) => {
        event.preventDefault();
        console.log('submitted');
        setShowSuccessModal(true);
    }

    return (
        <div className='contact_us_wrapper'>
            {
                !showSuccessModal ? (
                    <div className='contact_us_container'>
                        <div className='info'>
                            <p className='info-title'>Contact us</p>
                            <p className='info-subtext'>Send us a message and we will get back ASAP!</p>
                            <div className='info-logo'>
                                <img src={head} alt={'logo'} />
                            </div>
                        </div>
                        <div className='form'>
                            <form onSubmit={submitForm}>
                                <div className='form-field'>
                                    <p className='form-field-title'>
                                        Name<span className='mandatory'>*</span>
                                    </p>
                                    <input className='form-field-input' type='text' placeholder='Enter your name' required></input>
                                </div>
                                <div className='form-field'>
                                    <p className='form-field-title'>
                                        Email<span className='mandatory'>*</span>
                                    </p>
                                    <input className='form-field-input' type='email' placeholder='Enter your email' required></input>
                                </div>
                                <div className='form-field'>
                                    <p className='form-field-title'>
                                        Message
                                    </p>
                                    <textarea className='form-field-textarea' placeholder='Type your message here'></textarea>
                                    <p className='form-field-input-subtext'>Maximum 500 characters</p>
                                </div>
                                <div className='form-field-submit'>
                                    <button type='submit'>SEND MESSAGE</button>
                                </div>
                            </form>
                        </div>
                        <div className='close' onClick={closeContactUsModal}>&times;</div>
                    </div>
                ) : (
                    <SuccessModal closeContactUsModal={closeContactUsModal} />
                )
            }
        </div>
    );
}

export default ContactUsModal;
