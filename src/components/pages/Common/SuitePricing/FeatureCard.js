import globeoutlined from '../../../../media/globeoutlined.svg';
import endpoint from '../../../../media/endpoint.svg';
import plug from '../../../../media/plug.svg';
import fire from '../../../../media/fire.svg';
import windows from '../../../../media/windows.svg';
import check from '../../../../media/check.svg';

export default function FeatureCard({ setShowContactUsModal }) {
    return (
        <div className="feature_card">
            <div className="card_content">
                <div className="suite_type">Standard Suite</div>
                <div className="suite_info">For basic home user or individual user(3 Device protection)</div>
                <div className='suite_data'>
                    <div className="feature_container">
                        <div className="feature_content">
                            <div className="image"><img src={globeoutlined} alt="globeoutlined" /></div><div className="feature">Corporate Web Control</div>
                        </div>
                        <div className="feature_content">
                            <div className="image"><img src={endpoint} alt="endpoint" /></div><div className="feature">Endpoint Security</div>
                        </div>
                        <div className="feature_content">
                            <div className="image"><img src={plug} alt="plug" /></div><div className="feature">Secure RDP Manager</div>
                        </div>
                        <div className="feature_content">
                            <div className="image"><img src={fire} alt="fire" /></div><div className="feature">Firewall</div>
                        </div>
                        <div className="feature_content">
                            <div className="image"><img src={windows} alt="windows" /></div><div className="feature">Windows Booster</div>
                        </div>
                    </div>
                    <div className="benefits_conatiner">
                        <div className="benefits_content">
                            <div className="benefits_heading">Benefits</div>
                            <div className="benefits_content_container">
                                <div className="feature_content">
                                    <div className="image"><img src={check} alt="check" /></div><div className="feature">Windows, Mac & Android</div>
                                </div>
                                <div className="feature_content">
                                    <div className="image"><img src={check} alt="check" /></div><div className="feature">Protection against never‑before‑seen threats</div>
                                </div>
                                <div className="feature_content">
                                    <div className="image"><img src={check} alt="check" /></div><div className="feature">Sensitive data encryption</div>
                                </div>
                            </div>
                            <div className="price_year">
                                <div className="price">₹ 17,534</div>
                                <div className="year">Every Year</div>
                            </div>

                            <button className="btn_container" onClick={() => setShowContactUsModal(true)}><span className="demo">REQUEST A DEMO</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}