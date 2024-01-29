import './Success.scss';
import mask from '../../../media/mask.svg';
import tick from '../../../media/CheckCircleTwoTone.svg'

const SuccessModal = ({ closeContactUsModal }) => {

  return (
    <>
      <div className="success_container">
        <div className="barasingha_head">
          <img src={mask} alt={mask} />
          <img src={tick} alt={tick} className='tick' />
        </div>
        <div className="received_msg">
          All good, we’ve received your email
        </div>
        <div className="successfully_msg">
          Your message has been successfully sent. We appreciate you taking the time to contact us. Our team will review your inquiry and aim to get back to you within 48 hours.
        </div>
        <button className="close_button" onClick={closeContactUsModal}>CLOSE</button>
        <div className="concerns">
          If you have any urgent concerns or need immediate assistance, please call our helpline at 1800-1917-1917-66
          Remember to check your email (including the spam folder) for our response.
        </div>
      </div>
    </>
  );
}

export default SuccessModal;
