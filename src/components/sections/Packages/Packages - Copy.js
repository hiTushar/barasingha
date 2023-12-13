import React, { useState } from 'react';
import './Packages.scss';
import icon1 from '../../../media/icon.svg';
import icon2 from '../../../media/icon-1.svg';
import icon3 from '../../../media/icon-2.svg';
import icon4 from '../../../media/icon-3.svg';
import shield from '../../../media/shield.svg';
import pattern1 from '../../../media/pattern1.webp';
import pattern2 from '../../../media/pattern 2.webp';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import greenshield from '../../../media/greenshield.svg'
import noisePng from "../../../media/noise.webp";

const partners = [
   { image: "forbes", line: 'Protected by NPAV since 2016 more than 4,000 Endpoints.' },
   { image: "nasdaq", line: 'Protected by NPAV since 2017 more than 9,000 endpoints' },
   { image: "forbes", line: 'Protected by NPAV since 2016more than 4,000 Endpoints.' }
];
const options = {
   responsive: {
      0: {
         items: 1,
      },
      400: {
         items: 1,
      },
      600: {
         items: 2,
      },
      700: {
         items: 1,
      },
      1000: {
         items: 1,

      }
   },
}
function Packages() {
   const owlCarouselRef = React.useRef(null);


   function getCurrentDimension() {
      if (window.innerWidth < 767) {
         return true;
      }
      return false;
   }

   function handleCarouselChange(event) {
      const prevActiveIndex = event.item.index - 1
      const currentIndex = event.item.index
      const nextActiveIndex = event.item.index + 1

      const currentItem = document.querySelectorAll('.owl-item')[currentIndex]
      const prevItem = document.querySelectorAll('.owl-item')[prevActiveIndex]
      const nextItem = document.querySelectorAll('.owl-item')[nextActiveIndex]

      if (currentItem) currentItem.style.transform = ''
      if (prevItem) prevItem.style.transform = 'perspective(1000px) rotateY(10deg)'
      if (nextItem) nextItem.style.transform = 'perspective(1000px) rotateY(-10deg)'
   }

   React.useEffect(() => {
      const items = document.querySelectorAll('.owl-item')
      const activeIndex = Array.from(items)?.findIndex((item) => item.classList.contains('active'))

      if (activeIndex) {
         const lastItem = items[activeIndex - 1]
         lastItem.style.transform = 'perspective(1000px) rotateY(10deg)'
      }
   }, [])


   return (
      <div className="package_container">
         <img className='pattern1 pattern start-0 bottom-0' src={pattern1} />
         <img className='pattern2 pattern end-0 top-0' src={pattern2} />

         <div className="custom-container">
            <div className="package_heading">PRODUCTS AND PACKAGES</div>
            <div className="trust">Globally Trusted Among Users</div>
         </div>
         {!getCurrentDimension()
            ? <div className="package_details_container">
               <OwlCarousel
                  ref={owlCarouselRef}
                  // items={1}
                  {...options}
                  className="owl__theme__2"
                  loop
                  nav={true}
                  dots={false}
                  margin={0}
                  stagePadding={150}
                  responsiveClass={true}
                  onChanged={handleCarouselChange}
               >
                  {[...Array(10)].map((list, key) => (
                     <div className="package_card">
                        {/* <img src={noisePng} className='noise-img position-absolute' /> */}
                        <div className="noise-img"></div>
                        <div className="ellipse ellipse-one"></div>
                        <div className="ellipse ellipse-two"></div>
                        <h3 className="package_name mb-0">End Point Security Package {key}</h3>
                        <p className="package_desc pt-1 mb-0">Corporate web control allows you to secure the network by blockingunwanted sites and limiting the network access.</p>
                        <div className="package_feature_container">
                           <div className='row'>
                              <div className='col-md-3'>
                                 <div className="package_feature_card">
                                    <div className="feature_picture mb-4">
                                       <img src={icon1} alt={icon1} className='h-100' />
                                    </div>
                                    <div className="feature">Corporate web control</div>
                                    <div className="feature_desc pt-2 d-flex"><img className="shield me-2 pt-1" src={shield} alt={"shield"} /><span>Windows, Mac & Android</span></div>
                                    <div className="feature_desc pt-2 d-flex"><img className="shield me-2 pt-1" src={shield} alt={"shield"} /><span>Sensitive data encryption</span></div>
                                    <div className="feature_desc pt-2 d-flex"><img className="shield me-2 pt-1" src={shield} alt={"shield"} /><span>Detailed and Summary Report</span></div>
                                 </div>
                              </div>
                              <div className='col-md-3'>
                                 <div className="package_feature_card">
                                    <div className="feature_picture mb-4">
                                       <img src={icon2} alt={icon2} className='h-100' />
                                    </div>
                                    <div className="feature">Firewall Security Control</div>
                                    <div className="feature_desc pt-2 d-flex"><img className="shield me-2 pt-1" src={shield} alt={"shield"} /><span>Windows, Mac & Android</span></div>
                                    <div className="feature_desc pt-2 d-flex"><img className="shield me-2 pt-1" src={shield} alt={"shield"} /><span>Sensitive data encryption</span></div>
                                    <div className="feature_desc pt-2 d-flex"><img className="shield me-2 pt-1" src={shield} alt={"shield"} /><span>Detailed and Summary Report</span></div>
                                 </div>
                              </div>
                              <div className='col-md-3'>
                                 <div className="package_feature_card">
                                    <div className="feature_picture mb-4">
                                       <img src={icon3} alt={icon3} className='h-100' />
                                    </div>
                                    <div className="feature">Password Vault Manager</div>
                                    <div className="feature_desc pt-2 d-flex"><img className="shield me-2 pt-1" src={shield} alt={"shield"} /><span>Windows, Mac & Android</span></div>
                                    <div className="feature_desc pt-2 d-flex"><img className="shield me-2 pt-1" src={shield} alt={"shield"} /><span>Sensitive data encryption</span></div>
                                    <div className="feature_desc pt-2 d-flex"><img className="shield me-2 pt-1" src={shield} alt={"shield"} /><span>Detailed and Summary Report</span></div>
                                 </div>
                              </div>
                              <div className='col-md-3'>
                                 <div className="package_feature_card">
                                    <div className="feature_picture mb-4">
                                       <img src={icon4} alt={icon4} className='h-100' />
                                    </div>
                                    <div className="feature">End Point Security</div>
                                    <div className="feature_desc pt-2 d-flex"><img className="shield me-2 pt-1" src={shield} alt={"shield"} /><span>Windows, Mac & Android</span></div>
                                    <div className="feature_desc pt-2 d-flex"><img className="shield me-2 pt-1" src={shield} alt={"shield"} /><span>Sensitive data encryption</span></div>
                                    <div className="feature_desc pt-2 d-flex"><img className="shield me-2 pt-1" src={shield} alt={"shield"} /><span>Detailed and Summary Report</span></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </OwlCarousel>

            </div>
            : <div className="package_details_container_mobile">
               <OwlCarousel
                  items={1}
                  // {...options}
                  className="owl-theme"
                  loop
                  nav={true}
                  dots={false}
                  margin={8}
                  stagePadding={30}
                  onChanged={handleCarouselChange}
               >
                  <div className="mobile_package_card position-relative">
                     <div className="noise-img"></div>
                     <div className="ellipse ellipse-two"></div>
                     <div className="mobile_feature_name">End Point Security Package</div>
                     <div className="mobile_feature_desc">Corporate web control allows you to secure the network by block ingunwanted sites and limiting the network access.</div>
                     <div className="item-mob">
                        <div className="row">
                           <div className="col-9 mx-auto">
                              <img src={icon1} alt={icon1} />
                           </div>
                           <div className="col-12">
                              <div className="feature">Corporate web control</div>
                              <div className="feature_desc pt-2 d-flex"><img className="shield me-2 pt-1" src={shield} alt={"shield"} /><span>Windows, Mac & Android</span></div>
                              <div className="feature_desc pt-2 d-flex"><img className="shield me-2 pt-1" src={shield} alt={"shield"} /><span>Sensitive data encryption</span></div>
                              <div className="feature_desc pt-2 d-flex"><img className="shield me-2 pt-1" src={shield} alt={"shield"} /><span>Detailed and Summary Report</span></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </OwlCarousel>
            </div>
         }
         <div className="individual_package_container">
            <div className="custom-container">
               {/* <OwlCarousel
                    items={2}  
                    className="owl-theme"  
                    loop  
                    nav  
                    margin={8} >  
                    <div className="individual_package_card">
                        <div className="left_content">
                            <img className="indiv_image" src={globe} alt={"globe"}></img>
                        </div>  
                        <div className="right_content">
                        <div className="selling_block">FAST SELLING</div>
                        <div className="green_shield"><img src={greenshield} alt={"greenshield"}/></div>
                        <div className="green_shield"><img src={greenshield} alt={"greenshield"}/></div>
                        <div className="green_shield"><img src={greenshield} alt={"greenshield"}/></div>
                        <div className="security_stage">Premimum Security</div>
                        <div className="indiv_feature">End Point Security</div>
                        <div className="indiv_feature_desc"><img className="shield" src={shield} alt={"shield"}/>Windows, Mac & Android</div>
                        <div className="indiv_feature_desc"><img className="shield"src={shield} alt={"shield"}/>Sensitive data encryption</div>
                        <div className="indiv_feature_desc"><img className="shield" src={shield} alt={"shield"}/>Detailed and Summary Report</div>
                        </div>                          
                    </div>
                    <div className="individual_package_card">
                        <div className="left_content">
                            <img className="indiv_image" src={globe} alt={"globe"}></img>
                        </div>  
                        <div className="right_content">
                        <div className="selling_block">FAST SELLING</div>
                        <div className="green_shield"><img src={greenshield} alt={"greenshield"}/></div>
                        <div className="green_shield"><img src={greenshield} alt={"greenshield"}/></div>
                        <div className="green_shield"><img src={greenshield} alt={"greenshield"}/></div>
                        <div className="security_stage">Premimum Security</div>
                        <div className="indiv_feature">End Point Security</div>
                        <div className="indiv_feature_desc"><img className="shield" src={shield} alt={"shield"}/>Windows, Mac & Android</div>
                        <div className="indiv_feature_desc"><img className="shield"src={shield} alt={"shield"}/>Sensitive data encryption</div>
                        <div className="indiv_feature_desc"><img className="shield" src={shield} alt={"shield"}/>Detailed and Summary Report</div>
                        </div>                          
                    </div>
                    </OwlCarousel> */}
               <OwlCarousel
                  items={getCurrentDimension() ? 1.1 : 2}
                  loop
                  nav={true}
                  dots={true}
                  margin={getCurrentDimension() ? 15 : 20}
               // stagePadding={getCurrentDimension() ? 20 : 0}
               >
                  <div className="individual_package_card p-md-4 p-3">
                     <div className='row align-items-center'>
                        <div className='col-md-4 col-8 mx-auto'>
                           <div className="left_content">
                              <img className="indiv_image" src={icon1} alt={"icon1"}></img>
                           </div>
                        </div>
                        <div className='col-md-8 text-center text-md-start'>
                           <div className="right_content ">
                              <div className="fast_selling_block">FAST SELLING</div>
                              <div className='d-flex pt-2 justify-content-center justify-content-md-start'>
                                 <div className='d-flex'>
                                    <img className="green_shield" src={greenshield} alt={"greenshield"} />
                                    <img className="green_shield" src={greenshield} alt={"greenshield"} />
                                    <img className="green_shield" src={greenshield} alt={"greenshield"} />
                                 </div>
                                 <div className="security_stage ms-2">Premimum Security</div>
                              </div>
                              <div className="indiv_feature">End Point Security</div>
                              <div className="indiv_feature_desc">Corporate web control allows you to secure the network by blocking unwanted sites and limiting the network access.</div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="individual_package_card p-md-4 p-3">
                     <div className='row align-items-center'>
                        <div className='col-md-4 col-8 mx-auto'>
                           <div className="left_content">
                              <img className="indiv_image" src={icon1} alt={"icon1"}></img>
                           </div>
                        </div>
                        <div className='col-md-8 text-center text-md-start'>
                           <div className="right_content ">
                              <div className="top_selling_block">FAST SELLING</div>
                              <div className='d-flex pt-2 justify-content-center justify-content-md-start'>
                                 <div className='d-flex'>
                                    <img className="green_shield" src={greenshield} alt={"greenshield"} />
                                    <img className="green_shield" src={greenshield} alt={"greenshield"} />
                                    <img className="green_shield" src={greenshield} alt={"greenshield"} />
                                 </div>
                                 <div className="security_stage ms-2">Premimum Security</div>
                              </div>
                              <div className="indiv_feature">End Point Security</div>
                              <div className="indiv_feature_desc">Corporate web control allows you to secure the network by blocking unwanted sites and limiting the network access.</div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="individual_package_card p-md-4 p-3">
                     <div className='row align-items-center'>
                        <div className='col-md-4 col-8 mx-auto'>
                           <div className="left_content">
                              <img className="indiv_image" src={icon1} alt={"icon1"}></img>
                           </div>
                        </div>
                        <div className='col-md-8 text-center text-md-start'>
                           <div className="right_content ">
                              <div className="top_selling_block">FAST SELLING</div>
                              <div className='d-flex pt-2 justify-content-center justify-content-md-start'>
                                 <div className='d-flex'>
                                    <img className="green_shield" src={greenshield} alt={"greenshield"} />
                                    <img className="green_shield" src={greenshield} alt={"greenshield"} />
                                    <img className="green_shield" src={greenshield} alt={"greenshield"} />
                                 </div>
                                 <div className="security_stage ms-2">Premimum Security</div>
                              </div>
                              <div className="indiv_feature">End Point Security</div>
                              <div className="indiv_feature_desc">Corporate web control allows you to secure the network by blocking unwanted sites and limiting the network access.</div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* <div className="individual_package_card">
                            <div className="left_content">
                                <img className="indiv_image" src={icon2} alt={"icon2"}></img>
                            </div>
                            <div className="right_content">
                                <div className="top_selling_block">FAST SELLING</div>
                                <div className>
                                    <img className="green_shield" src={greenshield} alt={"greenshield"} />
                                    <img className="green_shield" src={greenshield} alt={"greenshield"} />
                                    <img className="green_shield" src={greenshield} alt={"greenshield"} />
                                </div>
                                <div className="security_stage">Premimum Security</div>
                                <div className="indiv_feature">End Point Security</div>
                                <div className="indiv_feature_desc">Smart Network Manager is a tool for system admins to manage each Windows PC in the network without actually visiting the PC</div>
                            </div>
                        </div> */}
               </OwlCarousel>
            </div>
         </div>
      </div >
   );
}

export default Packages;