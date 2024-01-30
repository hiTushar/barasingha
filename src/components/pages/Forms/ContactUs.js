/* eslint-disable no-unused-vars */
import './ContactUs.scss';
import head from '../../../media/ExtractedHead3.webp';
import { useState } from 'react';
import SuccessModal from './Success';

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const NAME_REGEX = /^[a-zA-Z\s]+$/

const ContactUsModal = ({ closeContactUsModal }) => {
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [charLeft, setCharLeft] = useState(500);

    const nameChange = (event) => {
        let val = event.target.value;
        setFormData(prev => ({ ...prev, name: val }));
        setFormErrors(prev => ({ ...prev, name: '' }));
        if(val.trim()) {
            if(!val.match(NAME_REGEX)) {
                setFormErrors(prev => ({ ...prev, name: 'Error: Enter Valid Name'}))
            }
        }
    }

    const messageChange = (event) => {
        let val = event.target.value;
        setFormData(prev => ({ ...prev, message: val }));
        setCharLeft(500 - val.length)
    }

    const emailChange = (event) => {
        let val = event.target.value; 
        setFormData(prev => ({ ...prev, email: val }));
        setFormErrors(prev => ({ ...prev, email: '' }));
        if(val.trim()) {
            if(!val.match(EMAIL_REGEX)) {
                setFormErrors(prev => ({ ...prev, email: 'Error: Enter Valid Email' }));
            }
        }
    }

    const checkSubmitDisabled = () => formErrors.name.length || formErrors.email.length || formErrors.message.length || !formData.name.length || !formData.email.length || !formData.message.length;

    const submitForm = (event) => {
        event.preventDefault();
        setShowSuccessModal(true);
    }

    console.log(formData, formErrors);

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
                                <div className={`form-field`}>
                                    <p className='form-field-title'>
                                        Name<span className='mandatory'>*</span>
                                    </p>
                                    <input onChange={nameChange} className={`form-field-input ${formErrors.name ? 'error-outline' : ''}`} type='text' placeholder='Enter your name'></input>
                                    {
                                        formErrors.name ? (
                                            <p className='form-field-subtext error-subtext'>
                                                {formErrors.name}
                                            </p>
                                        ) : null
                                    }
                                </div>
                                <div className={`form-field ${formErrors.email ? 'error-outline' : ''}`}>
                                    <p className='form-field-title'>
                                        Email<span className='mandatory'>*</span>
                                    </p>
                                    <input onChange={emailChange} className={`form-field-input ${formErrors.email ? 'error-outline' : ''}`} type='email' placeholder='Enter your email'></input>
                                    {
                                        formErrors.email ? (
                                            <p className='form-field-subtext error-subtext'>
                                                {formErrors.email}
                                            </p>
                                        ) : null
                                    }
                                </div>
                                <div className='form-field'>
                                    <p className='form-field-title'>
                                        Message<span className='mandatory'>*</span>
                                    </p>
                                    <textarea onChange={messageChange} value={formData.message} className={`form-field-textarea ${formErrors.message ? 'error-outline' : ''}`} placeholder='Type your message here' maxLength='500'></textarea>
                                    <p className='form-field-subtext'>Max {charLeft} characters left</p>
                                </div>
                                <div className='form-field-submit'>
                                    <button disabled={checkSubmitDisabled()} type='submit'>SEND MESSAGE</button>
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
