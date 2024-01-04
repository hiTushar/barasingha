/* eslint-disable no-unused-vars */
import './Work.scss';
import head from '../../../media/ExtractedHead3.webp';
import attach from '../../../media/attachment.svg';
import { useEffect, useRef, useState } from 'react';
import SuccessModal from './Success';

const BYTES_IN_ONE_MB = 1024 * 1024;
const MAX_FILE_SIZE_IN_MB = 5;

const WorkModal = ({ closeContactUsModal }) => {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showContactModal, setShowContactModal] = useState(true);
    const [fileName, setFileName] = useState('');
    const [uploadError, setUploadError] = useState('');
    const [fileSizeError, setFileSizeError] = useState('');
    const fileRef = useRef(null);
    const fileLabelRef = useRef(null);

    const submitForm = (event) => {
        event.preventDefault();
        console.log('submitted');
        setShowSuccessModal(true);
    }

    const checkAttachment = () => {
        if(!fileRef.current.files.length) {
            fileLabelRef.current.classList.add('label-focus');
        }
    }


        

    const fileUpload = () => {
        let file = fileRef.current.files[0];
        if(file) {
            console.log(file);
            if(file.size / BYTES_IN_ONE_MB > MAX_FILE_SIZE_IN_MB) {
                setFileSizeError(true);
                setTimeout(() => {
                    setFileSizeError(false);
                }, 3000);
                return;
            }
            setFileName(file.name);
            if(fileLabelRef.current.classList.contains('label-focus')) {
                fileLabelRef.current.classList.remove('label-focus');
            }
        }
    }

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
                                        Résumé / Portfolio / Link<span className='mandatory'>*</span>
                                    </p>
                                    <div className='form-field-attachment'>
                                        <label for={'resume'} ref={fileLabelRef}>
                                            <img className='attachment-icon' src={attach} alt={'attament icon'} />
                                            <p>{fileName ? fileName : 'Drag and drop or attach your resume here'}</p>
                                        </label>
                                        <input
                                            type={'file'}
                                            accept='.doc, .docx, .pdf' 
                                            id={'resume'} 
                                            className='form-field-input-file' 
                                            placeholder='Drag and drop or attach your resume here'
                                            onChange={fileUpload}
                                            required
                                            ref={fileRef}
                                        />
                                    </div>
                                    <p className='form-field-input-subtext'>{ !fileSizeError ? 'Maximum Size 5MB' : <span className='form-field-warning'>File limit exceeded</span>} </p>
                                </div>
                                <div className='form-field-submit'>
                                    <button type='submit' onClick={checkAttachment}>SEND MESSAGE</button>
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
