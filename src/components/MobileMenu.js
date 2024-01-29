import React, { useState } from 'react';
import './mobilemenu.scss';
import MobileMenuItem from './MobileMenuItem';
import MenuItems from './mobile-menu.json';
import { Button } from './Button';
import sirine from '../media/Sirine.svg';
import website from '../media/Website.svg';
import hacker2 from '../media/Hacker2.svg';
import protection from '../media/Protection.svg';
import LinkArrow from '../media/arrow.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom';

function MobileMenu({ handleClick, openContactUs }) {
   const [submenu, setSubMenu] = useState([]);

   return (
      <>
         {
            submenu.length ? (
               <div className='mobile-menu-container'>
                  <div className="">
                     <div className="back-button"><span onClick={() => setSubMenu([])}>Solution / Industry / </span><span>Healthcare</span></div>
                     <div className="sub-menu-content">
                        <Link to='/solutionspage' className='sub-options' onClick={handleClick}>
                           <img className='sub-options-icon' src={sirine} alt="sirine" title="sirine" />
                           <div className='heading'>Threat hunting and blocking</div>
                           <img className='menu-content-arrow' src={LinkArrow} alt={'arrow icon'} />
                        </Link>
                        <div activeClassName="active" to="" className='sub-options'>
                           <img className='sub-options-icon' src={website} alt="website" title="website" />
                           <div className='heading'>Behaviour detection and repeat offenders</div>
                           <img className='menu-content-arrow' src={LinkArrow} alt={'arrow icon'} />
                        </div>
                        <div className='sub-options'>
                           <img className='sub-options-icon' src={hacker2} alt="hacker2" title="hacker2" />
                           <div className='heading'>Protecting personally identifiable data</div>
                           <img className='menu-content-arrow' src={LinkArrow} alt={'arrow icon'} />
                        </div>
                        <div activeClassName="active" to="" className='sub-options'>
                           <img className='sub-options-icon' src={protection} alt="protection" title="protection" />
                           <div className='heading'>New forms of ransomware</div>
                           <img className='menu-content-arrow' src={LinkArrow} alt={'arrow icon'} />
                        </div>
                     </div>
                  </div>
               </div>
            ) : (
               <div className='mobile-menu-container'>
                  {MenuItems.map((item, index) => <MobileMenuItem key={index} item={item} handleClick={handleClick} setSubMenu={setSubMenu} />)}
                  <div>
                     <Button buttonStyle='btn--primary' onClick={openContactUs}> INTERESTED?</Button>
                  </div>
               </div>
            )
         }
      </>
   )
}

export default MobileMenu;
