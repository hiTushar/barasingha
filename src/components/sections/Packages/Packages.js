import React from 'react';
import './Packages.scss';
import icon1 from '../../../media/net.svg';
import icon2 from '../../../media/icon-1.svg';
import icon3 from '../../../media/icon-2.svg';
import icon4 from '../../../media/icon-3.svg';
import shield from '../../../media/shield.svg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import greenshield from '../../../media/greenshield.svg';
import SlikSlider from '../../SlikSlider';
import IndividualPackage from './IndividualPackage';

const slickMob = {

   infinite: true,
   speed: 1000,
   autoplay: false,
   autoplaySpeed: 5000,
   slidesToShow: 1,
   slidesToScroll: 1,
   centerMode: true,
   centerPadding: "5%",
}

const slickInnerMob = {
   infinite: true,
   speed: 1000,
   autoplay: false,
   autoplaySpeed: 5000,
   slidesToShow: 2,
   slidesToScroll: 1,
   centerMode: true
}

const data = [
   {
      title: 'End Point Security Package 0',
      desc: 'Corporate web control allows you to secure the network by block ingunwanted sites and limiting the network access.'
   },
   {
      title: 'End Point Security Package 1',
      desc: 'Corporate web control allows you to secure the network by block ingunwanted sites and limiting the network access.'
   },
   {
      title: 'End Point Security Package 2',
      desc: 'Corporate web control allows you to secure the network by block ingunwanted sites and limiting the network access.'
   },
]

const subData = [
   {
      icon: icon1,
      title: 'Corporate web control',
      desc: ['Windows, Mac & Android', 'Sensitive data encryption', 'Detailed and Summary Report']
   },
   {
      icon: icon2,
      title: 'Firewall Security Control',
      desc: ['Windows, Mac & Android', 'Sensitive data encryption', 'Detailed and Summary Report']
   },
   {
      icon: icon3,
      title: 'Password Vault Manager',
      desc: ['Windows, Mac & Android', 'Sensitive data encryption', 'Detailed and Summary Report']
   },
   {
      icon: icon4,
      title: 'End Point Security',
      desc: ['Windows, Mac & Android', 'Sensitive data encryption', 'Detailed and Summary Report']
   }
]

function Packages() {
   const owlCarouselRef = React.useRef(null);


   function getCurrentDimension() { return window.innerWidth < 992 }

   function getStagePadding() {
      const width = window.innerWidth;

      if(width >= 1500) {
         return 180;
      }
      else if(width >= 1400) {
         return 130;
      }
      else if(width >= 1300) {
         return 80;
      }
      else if(width > 1200) {
         return 53;
      }
      else {
         return 50;
      }
   }

   function getMargin() {
      const width = window.innerWidth;

      if(width >= 1400) {
         return 0;
      }
      else if (width >= 1200) {
         return 30;
      }
      else {
         return 50;
      }
   }

   function handleCarouselChange(event) {
      const currentIndex = event.item.index
      const prevActiveIndex = currentIndex ? event.item.index - 1 : event.item.count - 1;
      const nextActiveIndex = event.item.index + 1

      const currentItem = document.querySelectorAll('.owl-item')[currentIndex]
      const prevItem = document.querySelectorAll('.owl-item')[prevActiveIndex]
      const nextItem = document.querySelectorAll('.owl-item')[nextActiveIndex]

      if(currentItem) {
         currentItem.style.transform = '';
      }
      if(prevItem) {
         prevItem.style.transform = 'perspective(1000px) rotateY(20deg) translate(130px, 0) scale3d(1, 0.9, 1)';
      }
      if(nextItem) {
         nextItem.style.transform = 'perspective(1000px) rotateY(-20deg) translate(-130px, 0) scale3d(1, 0.9, 1)';
      }
   }

   React.useEffect(() => {
      // const items = document.querySelectorAll('.owl-item')
      // const activeIndex = Array.from(items)?.findIndex((item) => item.classList.contains('active'))
      // if (activeIndex) {
      //    const lastItem = items[activeIndex - 1]
      //    lastItem.style.transform = 'perspective(1000px) rotateY(20deg) translate(130px, 0) scale3d(1, 0.9, 1)'
      // }
   }, [])

   console.log('reloaded');
   return (
      <section className="package_container">
         <div className="title-wrapper">
            <p className="heading heading--fancy text-center">PRODUCTS AND PACKAGES</p>
            <p className="heading heading--two--packages text-center mt-2">Globally Trusted Among Users</p>
         </div>
         {!getCurrentDimension()
            ? <div className="package_details_container">
               <OwlCarousel
                  ref={owlCarouselRef}
                  items={1}
                  className="owl__theme__2"
                  loop
                  nav={true}
                  dots={false}
                  margin={getMargin()}
                  stagePadding={getStagePadding()}
                  responsiveClass={true}
                  onChanged={handleCarouselChange}
                  navContainerClass='owl-nav-custom'
               >
                  {[...Array(10)].map((list, key) => (
                     <div className="package_card" key={key}>
                        {/* <img src={noisePng} className='noise-img position-absolute' /> */}
                        <div className="noise-img"></div>
                        <div className="ellipse ellipse-one"></div>
                        <div className="ellipse ellipse-two"></div>
                        <div className="title-wrapper">
                           <p className="heading heading--two mb-0 text-center">End Point Security Package {key}</p>
                           <p className="para para--light text-center m-0 mt-2">Corporate web control allows you to secure the network by blocking <br /> unwanted sites and limiting the network access.</p>
                        </div>
                        <div className="package_feature_container">
                           <div className='row'>
                              <div className='col-md-3'>
                                 <div className="package_feature_card">
                                    <div className="feature_picture mb-4">
                                       <img src={icon1} alt={icon1} className='h-100' />
                                    </div>
                                    <div className="heading heading--three mb-2">Corporate web control</div>
                                    <div className="para pt-2 d-flex"><img className="shield me-2" src={shield} alt={"shield"} /><span>Windows, Mac & Android</span></div>
                                    <div className="para pt-2 d-flex"><img className="shield me-2" src={shield} alt={"shield"} /><span>Sensitive data encryption</span></div>
                                    <div className="para pt-2 d-flex"><img className="shield me-2" src={shield} alt={"shield"} /><span>Detailed and Summary Report</span></div>
                                 </div>
                              </div>
                              <div className='col-md-3'>
                                 <div className="package_feature_card">
                                    <div className="feature_picture mb-4">
                                       <img src={icon2} alt={icon2} className='h-100' />
                                    </div>
                                    <div className="heading heading--three mb-2">Firewall Security Control</div>
                                    <div className="para pt-2 d-flex"><img className="shield me-2" src={shield} alt={"shield"} /><span>Windows, Mac & Android</span></div>
                                    <div className="para pt-2 d-flex"><img className="shield me-2" src={shield} alt={"shield"} /><span>Sensitive data encryption</span></div>
                                    <div className="para pt-2 d-flex"><img className="shield me-2" src={shield} alt={"shield"} /><span>Detailed and Summary Report</span></div>
                                 </div>
                              </div>
                              <div className='col-md-3'>
                                 <div className="package_feature_card">
                                    <div className="feature_picture mb-4">
                                       <img src={icon3} alt={icon3} className='h-100' />
                                    </div>
                                    <div className="heading heading--three mb-2">Password Vault Manager</div>
                                    <div className="para pt-2 d-flex"><img className="shield me-2" src={shield} alt={"shield"} /><span>Windows, Mac & Android</span></div>
                                    <div className="para pt-2 d-flex"><img className="shield me-2" src={shield} alt={"shield"} /><span>Sensitive data encryption</span></div>
                                    <div className="para pt-2 d-flex"><img className="shield me-2" src={shield} alt={"shield"} /><span>Detailed and Summary Report</span></div>
                                 </div>
                              </div>
                              <div className='col-md-3'>
                                 <div className="package_feature_card">
                                    <div className="feature_picture mb-4">
                                       <img src={icon4} alt={icon4} className='h-100' />
                                    </div>
                                    <div className="heading heading--three mb-2">End Point Security</div>
                                    <div className="para pt-2 d-flex"><img className="shield me-2" src={shield} alt={"shield"} /><span>Windows, Mac & Android</span></div>
                                    <div className="para pt-2 d-flex"><img className="shield me-2" src={shield} alt={"shield"} /><span>Sensitive data encryption</span></div>
                                    <div className="para pt-2 d-flex"><img className="shield me-2" src={shield} alt={"shield"} /><span>Detailed and Summary Report</span></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </OwlCarousel>
               <div className='package_details__overlay'></div>
            </div>
            : <div className="package_details_container_mobile">
               <SlikSlider {...slickMob} dots={false}>
                  {
                     data.map((dataPt, index) => (
                        <div className='mobile_package_card' key={index}>
                           <div className="noise-img"></div>
                           <div className="ellipse ellipse-two"></div>
                           <div className="mobile_feature_name">{dataPt.title}</div>
                           <div className="mobile_feature_desc para para--light text-center mt-2">{dataPt.desc}</div>
                           <div className='all-items'>
                              <div>
                                 {
                                    subData.map((dataPt, index) => (
                                       <div className="item-mob" key={index   }>
                                          <div className="row">
                                             <div className="col-12 feature-img">
                                                <img src={dataPt.icon} alt={dataPt.icon} className="" />
                                             </div>
                                             <div className="col-12 feature">
                                                <div className="heading heading--three mb-2">{dataPt.title}</div>
                                                <div className="para"><img className="shield me-2" src={shield} alt={"shield"} /><span>{dataPt.desc[0]}</span></div>
                                                <div className="para pt-2"><img className="shield me-2" src={shield} alt={"shield"} /><span>{dataPt.desc[1]}</span></div>
                                                <div className="para pt-2"><img className="shield me-2" src={shield} alt={"shield"} /><span>{dataPt.desc[2]}</span></div>
                                             </div>
                                          </div>
                                       </div>
                                    ))
                                 }
                              </div>
                           </div>
                           <div className='slider-items'>
                              <SlikSlider {...slickInnerMob} dots={true}>
                                 {
                                    subData.map((dataPt, index) => (
                                       <div className="item-mob" key={index   }>
                                          <div className="row">
                                             <div className="col-12">
                                                <img src={dataPt.icon} alt={dataPt.icon} className="mx-auto" />
                                             </div>
                                             <div className="col-12 feature">
                                                <div className="heading heading--three mb-2">{dataPt.title}</div>
                                                <div className="para"><img className="shield me-2" src={shield} alt={"shield"} /><span>{dataPt.desc[0]}</span></div>
                                                <div className="para pt-2"><img className="shield me-2" src={shield} alt={"shield"} /><span>{dataPt.desc[1]}</span></div>
                                                <div className="para pt-2"><img className="shield me-2" src={shield} alt={"shield"} /><span>{dataPt.desc[2]}</span></div>
                                             </div>
                                          </div>
                                       </div>
                                    ))
                                 }
                              </SlikSlider>
                           </div>
                        </div>
                     ))
                  }
               </SlikSlider>
            </div>
         }
         <div className="individual_package_container">
            <OwlCarousel
               items={getCurrentDimension() ? 1 : 2}
               loop
               nav={true}
               // infinite={true}
               speed={1000}
               //autoplay={true}
               autoplaySpeed={1000}
               dots={true}
               margin={getCurrentDimension() ? 100 : 32}
               stagePadding={getCurrentDimension() ? 10 : 32}
            >
               <div className="individual_package_card d-flex align-items-center">
                  <div className='row align-items-center'>
                     <div className='col-lg-3 col-12'>
                        <div className="left_content">
                           <img className="indiv_image" src={icon1} alt={"icon1"}></img>
                        </div>
                     </div>
                     <div className='col-lg-7 col-12 text-center text-lg-start'>
                        <div className="right_content ">
                           <div className="fast_selling_block">FAST SELLING</div>
                           <div className='d-flex pt-2 justify-content-center justify-content-lg-start'>
                              <div className='d-flex'>
                                 <img className="green_shield" src={greenshield} alt={"greenshield"} />
                                 <img className="green_shield fade-shield" src={greenshield} alt={"greenshield"} />
                                 <img className="green_shield fade-shield" src={greenshield} alt={"greenshield"} />
                              </div>
                              <div className="security_stage ms-2">Premium Security</div>
                           </div>
                           <div className="indiv_feature mb-2">Corporate web control</div>
                           <div className="para para--light">Corporate web control allows you to secure the network by blocking unwanted sites and limiting the network access.</div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="individual_package_card d-flex align-items-center">
                  <div className='row align-items-center'>
                     <div className='col-lg-3 col-12'>
                        <div className="left_content">
                           <img className="indiv_image" src={icon1} alt={"icon1"}></img>
                        </div>
                     </div>
                     <div className='col-lg-7 col-12 text-center text-lg-start'>
                        <div className="right_content ">
                           <div className="top_selling_block">TOP SELLING</div>
                           <div className='d-flex pt-2 justify-content-center justify-content-lg-start'>
                              <div className='d-flex'>
                                 <img className="green_shield" src={greenshield} alt={"greenshield"} />
                                 <img className="green_shield" src={greenshield} alt={"greenshield"} />
                                 <img className="green_shield fade-shield" src={greenshield} alt={"greenshield"} />
                              </div>
                              <div className="security_stage ms-2">Standard Security</div>
                           </div>
                           <div className="indiv_feature mb-2">Firewall</div>
                           <div className="para para--light">Smart Network Manager is a tool for system admins to manage each Windows PC in the network without actually visiting</div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="individual_package_card d-flex align-items-center">
                  <div className='row align-items-center'>
                     <div className='col-lg-3 col-12'>
                        <div className="left_content">
                           <img className="indiv_image" src={icon1} alt={"icon1"}></img>
                        </div>
                     </div>
                     <div className='col-lg-7 col-12 text-center text-lg-start'>
                        <div className="right_content ">
                           <div className="top_selling_block">TOP SELLING</div>
                           <div className='d-flex pt-2 justify-content-center justify-content-lg-start'>
                              <div className='d-flex'>
                                 <img className="green_shield" src={greenshield} alt={"greenshield"} />
                                 <img className="green_shield" src={greenshield} alt={"greenshield"} />
                                 <img className="green_shield fade-shield" src={greenshield} alt={"greenshield"} />
                              </div>
                              <div className="security_stage ms-2">Standard Security</div>
                           </div>
                           <div className="indiv_feature mb-2">End Point Security</div>
                           <div className="para para--light">Corporate web control allows you to secure the network by blocking unwanted sites and limiting the network access.</div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="individual_package_card d-flex align-items-center">
                  <div className='row align-items-center'>
                     <div className='col-lg-3 col-12'>
                        <div className="left_content">
                           <img className="indiv_image" src={icon1} alt={"icon1"}></img>
                        </div>
                     </div>
                     <div className='col-lg-7 col-12 text-center text-lg-start'>
                        <div className="right_content ">
                           <div className="top_selling_block">TOP SELLING</div>
                           <div className='d-flex pt-2 justify-content-center justify-content-lg-start'>
                              <div className='d-flex'>
                                 <img className="green_shield" src={greenshield} alt={"greenshield"} />
                                 <img className="green_shield" src={greenshield} alt={"greenshield"} />
                                 <img className="green_shield fade-shield" src={greenshield} alt={"greenshield"} />
                              </div>
                              <div className="security_stage ms-2">Standard Security</div>
                           </div>
                           <div className="indiv_feature mb-2">Secure RDP Manager</div>
                           <div className="para para--light">Smart Network Manager is a tool for system admins to manage each Windows PC in the network without actually visiting</div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="individual_package_card d-flex align-items-center">
                  <div className='row align-items-center'>
                     <div className='col-lg-3 col-12'>
                        <div className="left_content">
                           <img className="indiv_image" src={icon1} alt={"icon1"}></img>
                        </div>
                     </div>
                     <div className='col-lg-7 col-12 text-center text-lg-start'>
                        <div className="right_content ">
                           <div className="top_selling_block">TOP SELLING</div>
                           <div className='d-flex pt-2 justify-content-center justify-content-lg-start'>
                              <div className='d-flex'>
                                 <img className="green_shield" src={greenshield} alt={"greenshield"} />
                                 <img className="green_shield" src={greenshield} alt={"greenshield"} />
                                 <img className="green_shield fade-shield" src={greenshield} alt={"greenshield"} />
                              </div>
                              <div className="security_stage ms-2">Standard Security</div>
                           </div>
                           <div className="indiv_feature mb-2">Windows Booster</div>
                           <div className="para para--light">Corporate web control allows you to secure the network by blocking unwanted sites and limiting the network access.</div>
                        </div>
                     </div>
                  </div>
               </div>
            </OwlCarousel>
         </div>
      </section >
   );
}

export default Packages;
