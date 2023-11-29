import React from 'react';
import './banner.scss';
import video1 from '../../media/video1.mp4'
import npav from '../../media/Net Protector Antivirus _ Download best antivirus for pc_Download npav.-0 1.svg'
import opswat from '../../media/OPSWAT B B&W 1.svg'
import microsoft from '../../media/microsoft.svg'
import black from '../../media/Black.svg';

function Banner({ 
                setShowContactUsModal = () => {} ,
                setShowWentWrong = () => {},
                setShowPage404 = () => {},
                setShowSendingFailed = () => {},
                setShowWrongPassword = () => {}
              }) {

  return (
    <div className="banner-container">
      <div className="custom-container">
        <div className="section_1">
          <div className="deploy_title">Deploy NPAV’s</div>
          <h1 className="heading py-2">Multi-layered cloud augmented technologies</h1>
          <div className="feature">
            Fits all security requirements. Flexible and scalable to any IT
            environment
          </div>
          <div className="btn_container">
            <button className="btn_contact_sales" onClick={() => setShowSendingFailed(true)}>Contact Sales</button>
          </div>
        </div>
        <div className="brands position-relative">            
        <div className="brand-dot-img position-absolute"></div>     
          <div className="trust">TRUSTED AND CERTIFIED BY</div>
          <div className="brands_images">
            <img src={npav} alt="npav" title="npav" />
            <img src={opswat} alt="opswat" title="opswat" />
            <img src={microsoft} alt="microsoft" title="microsoft" />
            <img src={black} alt="black" title="black" />
          </div>
        </div>
      </div>
        <div className="video_container">
          <video src={video1} autoPlay loop muted playsInline/>
        </div>
    </div>
  );
}

export default Banner;
