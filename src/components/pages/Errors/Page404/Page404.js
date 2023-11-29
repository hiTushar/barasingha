import './Page404.scss';
import error404 from '../../../../media/Error404.svg';

const Page404 = ({closePage404}) => {
  
    return(
      <>
      <div className="page404_wrapper"></div>
      <div className="page404_container">
        <div className="content_conatiner">
            <div className="page404_image">
                <img src={error404} alt={error404}/>
            </div>
            <div className="message">
                We've Lost This Page
            </div>
            <div className="message_desc">
                <div>Sorry, the page you are looking for cannot be found. It may have been moved,</div>
                <div>deleted, or never existed in the first place.</div>
            </div>
            <button className="close_button" onClick={closePage404}>Back To Home</button>
        </div>
      </div>
      </>
    );
  }

  export default Page404;