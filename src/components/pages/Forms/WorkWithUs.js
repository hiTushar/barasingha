import './WorkWithUs.scss';
import head from '../../../media/ExtractedHead3.png';
import close from '../../../media/closeoutlined.svg';

const WorkWithUs = ({closeWorkWithUsModal}) => {
    return(
      <>
      <div className="work_with_us_wrapper"></div>
      <div className="work_with_us_container">
        <div className="left_container">
            <div className="work_with_us">Work  With Us </div>
            <div className="send_us">Send us a message and we will get back ASAP!</div>
            <div className="barasingha_head">
                <img src={head} alt={head}/>
            </div>
        </div>
        <div className="right_container">
            <div className="close" onClick={closeWorkWithUsModal}>
                <img src={close} alt="close"></img>
            </div>
            <div className="input_name">
                Name <div className="mandatory">*</div>
            </div>
            <div className="work_with_us_bar pad_bot">
                <input class="WorkWithUs_input" type="text"></input>
            </div>
            <div className="input_name">
                Email <div className="mandatory">*</div>
            </div>
            <div className="work_with_us_bar pad_bot">
                <input class="WorkWithUs_input" type="text"></input>
            </div>
            <div className="input_name">
                Résumé/ Portfolio/ Link
            </div>
            <div className="work_with_us_bar">
                <input class="WorkWithUs_message" type="text"></input>
            </div>
            <div className="max_character">
                Maximum 500 characters
            </div>
            <button className="send_message_container">Submit Request</button>
        </div>
      </div>
      </>
    );
  }

  export default WorkWithUs;