import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Button } from './Button';
import './navbar.scss';
import 'primeicons/primeicons.css';
import brandName from "../media/BARASINGHA.svg";
import logo from "../media/animated_logo.svg";
import globe from '../media/globe.svg';
import creditcard from '../media/creditcard.svg';
import hacker from '../media/hacker.svg';
import broken from '../media/broken.svg';
import safebox from '../media/safebox.svg';
import server from '../media/server.svg';
import hacker2 from '../media/Hacker2.svg';
import protection from '../media/Protection.svg';
import sirine from '../media/Sirine.svg';
import website from '../media/Website.svg';
import bars from '../media/bars.svg';
import cross from '../media/cross.svg';
import MobileMenu from './MobileMenu';
import LinkArrow from '../media/arrow.svg';

function Navbar({ showBackdrop = () => { }, hideBackdrop = () => { }, backdropIsVisible = false, setShowContactUsModal = () => { }, ...props }) {

   const [click, setClick] = useState(false);
   const [navbarMenu, setNavbarMenu] = useState({
      product: 'close',
      solution: 'close'
   })

   const handleClick = () => {
      if (backdropIsVisible) {
         hideBackdrop();
      } else {
         showBackdrop()
      };
      setClick(!click);
      if (window.innerWidth > 768) {
         // window.location.reload();
      }
   }

   const toggleBackdrop = () => {
      if (backdropIsVisible) {
         hideBackdrop();
      } else {
         showBackdrop()
      }
      if (window.innerWidth > 768) {
         // window.location.reload();
      }
   }

   const goHome = () => {
      hideBackdrop();
      setClick(false);
   }

   const menuOpen = (navOption) => {
      showBackdrop();
      setNavbarMenu(navbarMenu => ({ ...navbarMenu, [navOption]: 'open' }));
      let productMenuOption = document.getElementById(navOption);
      productMenuOption.getElementsByTagName('span')[0].style = 'color: #e5be20 !important';
      productMenuOption.getElementsByTagName('i')[0].style = 'color:  #e5be20 !important; transform: rotate(180deg); padding-top: 0px';
   }

   const menuClose = (navOption) => {
      hideBackdrop();
      setNavbarMenu(navbarMenu => ({ ...navbarMenu, [navOption]: 'close' }));
      let solutionMenuOption = document.getElementById(navOption);
      solutionMenuOption.getElementsByTagName('span')[0].style = 'color: #c8c8c8 !important';
      solutionMenuOption.getElementsByTagName('i')[0].style = 'color:  #c8c8c8 !important; transform: rotate(0deg); padding-top: 0px';
   }

   return (
      <>
         <nav className='navbar sticky-top'>
            <div className='component-container position-relative d-flex w-100 justify-content-between align-items-center'>
               <NavLink onClick={goHome} activeClassName="active" to="/" className='navbar-logo'>
                  <img src={logo} className='navbar-logo-image' alt='logo'></img>
                  <img src={brandName} className='navbar-logo-brandname' alt='brandname'></img>
               </NavLink>
               <div className='menu-icon'>
               </div>
               <ul className={click ? 'nav-menu active' : 'nav-menu mb-0'}>
                  <li className='menu' onMouseEnter={() => menuOpen('product')} onMouseLeave={() => menuClose('product')}>
                     <div className='nav-links' id='product'>
                        <span>Products</span>
                        <i className="pi pi-angle-down ms-1" style={{ paddingTop: '2px' }}></i>
                     </div>
                     {
                        navbarMenu.product === 'open' ? (
                           <div className="menu-container">
                              <div className="menu-row">
                                 <div className='menu-column'>
                                    <Link to="/productspage">
                                       <div className='menu-content' onClick={() => menuClose('product')}>
                                          <div className='menu-content-link'>
                                             <img src={globe} alt="globe" title="globe" />
                                             <span className="heading heading--three">Corporate Web Control</span>
                                          </div>
                                          <img className='menu-content-arrow' src={LinkArrow} alt={'arrow icon'} />
                                       </div>
                                    </Link>
                                    <div className='menu-content'>
                                       <img src={broken} alt="broken" title="broken" />
                                       <span className="heading heading--three">Windows Booster</span>
                                       <img className='menu-content-arrow' src={LinkArrow} alt={'arrow icon'} />
                                    </div>
                                 </div>
                                 <div className='menu-column'>
                                    <div className='menu-content'>
                                       <img src={creditcard} alt="creditcard" title="creditcard" />
                                       <span className="heading heading--three">End Point Security</span>
                                       <img className='menu-content-arrow' src={LinkArrow} alt={'arrow icon'} />
                                    </div>
                                    <div className='menu-content'>
                                       <img src={safebox} alt="safebox" title="safebox" />
                                       <span className="heading heading--three">Password Vault Manager</span>
                                       <img className='menu-content-arrow' src={LinkArrow} alt={'arrow icon'} />
                                    </div>
                                 </div>
                                 <div className='menu-column'>
                                    <div className='menu-content'>
                                       <img src={hacker} alt="hacker" title="hacker" />
                                       <span className="heading heading--three">Secure RDP Manager</span>
                                       <img className='menu-content-arrow' src={LinkArrow} alt={'arrow icon'} />
                                    </div>
                                    <div className='menu-content'>
                                       <img src={server} alt="server" title="server" />
                                       <span className="heading heading--three">Firewall</span>
                                       <img className='menu-content-arrow' src={LinkArrow} alt={'arrow icon'} />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ) : null
                     }
                  </li>
                  <li className='menu' onMouseEnter={() => menuOpen('solution')} onMouseLeave={() => menuClose('solution')}>
                     <div className='nav-links' id='solution'>
                        <span>Solutions</span>
                        <i className="pi pi-angle-down ms-1" style={{ paddingTop: '2px' }}></i>
                     </div>
                     {
                        navbarMenu.solution === 'open' ? (
                           <div className="menu-container solutions">
                              <div className="menu-row">
                                 <div className='menu-column'>
                                    <div className='menu-column2'>
                                       <div className='title'>Industry</div>
                                       <div className='subtitle1'>Healthcare</div>
                                       <div className='subtitle'>Information Technology</div>
                                       <div className='subtitle'>Automobile</div>
                                       <div className='subtitle'>Government</div>
                                       <div className='seperator'></div>
                                       <div className='title'>Business Goals</div>
                                       <div className='subtitle'>Department Control</div>
                                       <div className='subtitle'>Information Technology</div>
                                       <div className='subtitle'>Access Management</div>
                                       <div className='subtitle'>Protecting Infra</div>
                                    </div>
                                 </div>
                                 <div className="menu-column">
                                    <div className="menu-sub-row">
                                       <div className='menu-column'>
                                          <Link to='/solutionspage' className='menu-content' onClick={() => menuClose('solution')}>
                                             <div className='menu-content-link'>
                                                <img src={sirine} alt="sirine" title="sirine" />
                                                <div className='heading heading--three'>Threat hunting and blocking</div>
                                                <img className='menu-content-arrow' src={LinkArrow} alt={'arrow icon'} />
                                             </div>
                                          </Link>
                                          <div className='menu-content'>
                                             <img src={hacker2} alt="hacker2" title="hacker2" />
                                             <div className='heading heading--three'>Protecting personally identifiable data</div>
                                             <img className='menu-content-arrow' src={LinkArrow} alt={'arrow icon'} />
                                          </div>
                                       </div>
                                       <div className='menu-column'>
                                          <div className='menu-content'>
                                             <img src={website} alt="website" title="website" />
                                             <div className='heading heading--three'>Behaviour detection and repeat offenders</div>
                                             <img className='menu-content-arrow' src={LinkArrow} alt={'arrow icon'} />
                                          </div>
                                          <div className='menu-content'>
                                             <img src={protection} alt="protection" title="protection" />
                                             <div className='heading heading--three'>New forms of ransomware</div>
                                             <img className='menu-content-arrow' src={LinkArrow} alt={'arrow icon'} />
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ) : null
                     }
                  </li>
                  <li className='menu'>
                     <NavLink activeClassName="active" to="/casestudy" className='nav-links'>
                        <span>Case Studies</span>
                     </NavLink>
                  </li>
                  <li className='menu'>
                     <NavLink activeClassName="active" to="/about" className='nav-links'>
                        <span>About</span>
                     </NavLink>
                  </li>
                  <li className='menu me-0'>
                     <NavLink activeClassName="active" to="/career" className='nav-links'>
                        <span>Careers</span>
                     </NavLink>
                  </li>
               </ul>
               <Button buttonStyle='btn--primary' className="btn desktop-btn"  onClick={() => setShowContactUsModal(true)}> INTERESTED?</Button>

               <div className='mobile-menu' onClick={handleClick} onMouseEnter={hideBackdrop}>
                  {click ? <img src={cross} alt={cross} title={cross}></img>
                     : <img src={bars} alt={bars} title={bars}></img>}
               </div>
               {click && <MobileMenu openContactUs={() => setShowContactUsModal(true)} handleClick={handleClick} />}
            </div>
         </nav>

      </>
   )
}

export default Navbar