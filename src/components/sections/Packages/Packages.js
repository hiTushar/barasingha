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
import dataOne from './dataPackageOne.json';
import subDataOne from './subDataPackageOne';
import dataTwo from './dataPackageTwo.json';

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

function getCurrentDimension() { return window.innerWidth < 992 }

function getStagePaddingTwo() {
   const width = window.innerWidth;

   if (width >= 576) {
      return 30;
   }
   else {
      return 20;
   }
}

function getMarginTwo() {
   const width = window.innerWidth;

   if (width > 400) {
      return 35;
   }
   else {
      return 100;
   }
}

function getItemCountTwo() {
   const width = window.innerWidth;

   if (width > 540) {
      return 2;
   }
   else {
      return 1;
   }
}

function handleCarouselChange(event) {
   const currentIndex = event.item.index
   const prevActiveIndex = currentIndex ? event.item.index - 1 : event.item.count - 1;
   const nextActiveIndex = event.item.index + 1

   const currentItem = document.querySelectorAll('.owl-item')[currentIndex]
   const prevItem = document.querySelectorAll('.owl-item')[prevActiveIndex]
   const nextItem = document.querySelectorAll('.owl-item')[nextActiveIndex]

   if (currentItem) {
      currentItem.style.transform = '';
   }
   if (prevItem) {
      prevItem.style.transform = 'perspective(1000px) rotateY(20deg) translate(130px, 0) scale3d(1, 1, 1)';
   }
   if (nextItem) {
      nextItem.style.transform = 'perspective(1000px) rotateY(-20deg) translate(-130px, 0) scale3d(1, 1, 1)';
   }
}

function Packages() {
   const owlCarouselRef = React.useRef(null);

   React.useEffect(() => {
      // const items = document.querySelectorAll('.owl-item')
      // const activeIndex = Array.from(items)?.findIndex((item) => item.classList.contains('active'))
      // if (activeIndex) {
      //    const lastItem = items[activeIndex - 1]
      //    lastItem.style.transform = 'perspective(1000px) rotateY(20deg) translate(130px, 0) scale3d(1, 0.9, 1)'
      // }
   }, [])

   // console.log('reloaded');
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
                  responsiveClass={true}
                  onChanged={handleCarouselChange}
                  navContainerClass='owl-nav-custom'
                  responsive={{
                     0: {
                        stagePadding: 30,
                        margin: 30
                     },
                     1201: {
                        stagePadding: 60 + (window.innerWidth - 1250) * 0.5
                     },
                     1501: {
                        stagePadding: 185
                     }
                  }}
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
                     dataOne.map((dataPt, index) => (
                        <div className='mobile_package_card' key={index}>
                           <div className="noise-img"></div>
                           <div className="ellipse ellipse-two"></div>
                           <div className="mobile_feature_name">{dataPt.title}</div>
                           <div className="mobile_feature_desc para para--light text-center mt-2">{dataPt.desc}</div>
                           <div className='all-items'>
                              {
                                 subDataOne.map((dataPt, index) => (
                                    <div className="item-mob" key={index}>
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
                           <div className='slider-items'>
                              <SlikSlider {...slickInnerMob} dots={true}>
                                 {
                                    subDataOne.map((dataPt, index) => (
                                       <div className="item-mob" key={index}>
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
               items={getItemCountTwo()}
               loop
               nav={true}
               // infinite={true}
               speed={1000}
               dotsEach={true}
               //autoplay={true}
               autoplaySpeed={1000}
               dots={true}
               margin={getMarginTwo()}
               stagePadding={getStagePaddingTwo()}
               navContainerClass='owl-nav-indv-custom'
            >
               {
                  dataTwo.map((dataPt, index) => (
                     <div className="individual_package_card" key={index}>
                        {/* <div className='row'> */}
                        <div className="left_content">
                           <img className="indiv_image" src={icon1} alt={"icon1"}></img>
                        </div>
                        <div className="right_content ">
                           <div className="fast_selling_block">{dataPt.sellType}</div>
                           <div className='pt-2 security_type'>
                              <div className='shield'>
                                 <div>
                                    <img className="green_shield" src={greenshield} alt={"greenshield"} />
                                 </div>
                                 <div>
                                    <img className="green_shield fade-shield" src={greenshield} alt={"greenshield"} />
                                 </div>
                                 <div>
                                    <img className="green_shield fade-shield" src={greenshield} alt={"greenshield"} />
                                 </div>
                              </div>
                              <div className="security_stage">{dataPt.securityType}</div>
                           </div>
                           <div className="indiv_feature mb-2">{dataPt.title}</div>
                           <div className="para para--light">{dataPt.desc}</div>
                        </div>
                        {/* </div> */}
                     </div>
                  ))
               }
            </OwlCarousel>
         </div>
      </section >
   );
}

export default Packages;
