/* eslint-disable no-unused-vars */
import './Work.scss';
import head from '../../../media/ExtractedHead3.webp';
import attach from '../../../media/attachment.svg';
import { useRef, useState } from 'react';
import SuccessModal from './Success';

const BYTES_IN_ONE_MB = 1024 * 1024;
const MAX_FILE_SIZE_IN_MB = 5;
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const NAME_REGEX = /^[a-zA-Z\s]+$/

const WorkModal = ({ closeContactUsModal }) => {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    // const [fileInputKey, setFileInputKey] = useState(0);
    const fileRef = useRef(null);
    const fileLabelRef = useRef(null);
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        file: null
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        file: ''
    });

    const nameChange = (event) => {
        setFormData(prev => ({ ...prev, name: val }))
        setFormErrors(prev => ({ ...prev, name: '' }));
        let val = event.target.value.trim()
        if(val) {
            if(!val.match(NAME_REGEX)) {
                setFormErrors(prev => ({ ...prev, name: 'Error: Enter Valid Name'}))
            }
        }
    }

    const emailChange = (event) => {
        setFormData(prev => ({ ...prev, email: event.target.value }));
        setFormErrors(prev => ({ ...prev, email: '' }));
        let val = event.target.value.trim() 
        if(val) {
            if(!val.match(EMAIL_REGEX)) {
                setFormErrors(prev => ({ ...prev, email: 'Error: Enter Valid Email' }));
            }
        }
    }

    const fileUpload = () => {
        let file = fileRef.current.files[0];
        if(file) {
            if(file.size / BYTES_IN_ONE_MB <= MAX_FILE_SIZE_IN_MB) {
                setFormData(prev => ({ ...prev, file: file }));
                setFormErrors(prev => ({ ...prev, file: '' }));
                // setFileInputKey(fileInputKey => !fileInputKey); // this rerenders the component so that file input field is reset
            }
            else {
                setFormErrors(prev => ({ ...prev, file: 'Error: File Size > 5MB'}));
                setFormData(prev => ({ ...prev, file: null }));
                setTimeout(() => {
                    setFormErrors(prev => ({ ...prev, file: '' }));
                }, 3000)
            }
        }
    }

    const checkSubmitDisabled = () => formErrors.name.length || formErrors.email.length || formErrors.file.length || !formData.name.length || !formData.email.length || !formData.file;

    const submitForm = (event) => {
        event.preventDefault();
        setShowSuccessModal(true);
    }

    console.log(formData, formErrors);
    
    return (
        <div className='work_wrapper'>
            {
                !showSuccessModal ? (
                    <div className='work_container'>
                        <div className='info'>
                            <p className='info-title'>Work With Us</p>
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
                                <div className={`form-field ${formErrors.file ? 'error-outline' : ''}`}>
                                    <p className='form-field-title'>
                                        Résumé / Portfolio / Link<span className='mandatory'>*</span>
                                    </p>
                                    <div className={`form-field-attachment `}>
                                        <label htmlFor={'resume'} ref={fileLabelRef} className={formErrors.file ? 'error-outline' : ''}>
                                            <div>
                                                <img className='attachment-icon' src={attach} alt={'attament icon'} />
                                                <div className={`attachment-text${formData.file ? '-name' : '-placeholder'}`}>{formData.file ? formData.file.name : 'Drag and drop or attach your resume here'}</div>
                                            </div>
                                        </label>
                                        <input
                                            type={'file'}
                                            accept='.doc, .docx, .pdf' 
                                            id={'resume'} 
                                            className='form-field-input-file' 
                                            placeholder='Drag and drop or attach your resume here'
                                            onChange={fileUpload}
                                            ref={fileRef}
                                            // key={fileInputKey}
                                        />
                                    </div>
                                    {
                                        formErrors.file ? (
                                            <p className='form-field-subtext error-subtext'>
                                                {formErrors.file}
                                            </p>
                                        ) : (
                                            <p className='form-field-subtext'>Maximum Size 5MB</p>
                                        )
                                    }
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

export default WorkModal;
