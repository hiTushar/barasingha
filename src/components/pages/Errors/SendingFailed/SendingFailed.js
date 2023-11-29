import './SendingFailed.scss';
import sendingfailed from '../../../../media/sendingfailed.svg';

const SendingFailed = ({closeSendingFailed}) => {
    

  function refreshPage(){
    window.location.reload();
} 
  
    return(
      <>
      <div className="sending_failed_wrapper"></div>
      <div className="sending_failed_container">
        <div className="content_conatiner">
            <div className="sending_failed_image">
                <img src={sendingfailed} alt={sendingfailed}/>
            </div>
            <div className="message">
                Sending Failed
            </div>
            <div className="message_desc">
                Your changes were saved, but we could not connect your account due to a technical issue on our end. Please try connecting again. If the issue keeps happening, contact <span className="customer_care">Customer Care.</span>
            </div>
            <a href="/"><button className="close_button" onClick={closeSendingFailed}>Back To Home</button></a>
            <div className="retry" onClick={() => refreshPage()}>RETRY</div>
        </div>
      </div>
      </>
    );
  }

  export default SendingFailed;