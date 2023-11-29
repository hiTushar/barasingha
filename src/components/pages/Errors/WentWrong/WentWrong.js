import './WentWrong.scss';
import wentwrong from '../../../../media/wentwrong.svg';

const WentWrong = ({closeWentWrong}) => {
  
    return(
      <>
      <div className="wrong_wrapper"></div>
      <div className="wrong_container">
        <div className="content_conatiner">
            <div className="wrong_image">
                <img src={wentwrong} alt={wentwrong}/>
            </div>
            <div className="message">
                Sorry! Something Went Wrong
            </div>
            <div className="message_desc">
                <div>Brace yourself till we get the error fixed.</div>
                <div>You may also refresh the page or try again later</div>
            </div>
            <button className="close_button" onClick={closeWentWrong}>Back To Home</button>
        </div>
      </div>
      </>
    );
  }

  export default WentWrong;