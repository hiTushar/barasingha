import './WrongPassword.scss';
import wrongpassword from '../../../../media/wrongpassword.svg';

const WrongPassword = ({closeWrongPassword}) => {
  
    return(
      <>
      <div className="wrong_password_wrapper"></div>
      <div className="wrong_password_container">
        <div className="content_conatiner">
            <div className="wrong_password_image">
                <img src={wrongpassword} alt={wrongpassword}/>
            </div>
            <div className="message">
                Wrong Password
            </div>
            <div className="message_desc">
                Your password appears to be incorrect or not in line with our guidelines. Please double-check it. If the problem persists, contact <span className="customer_care">Customer Care.</span>
            </div>
            <button className="close_button" onClick={closeWrongPassword}>Retry</button>
        </div>
      </div>
      </>
    );
  }

  export default WrongPassword;