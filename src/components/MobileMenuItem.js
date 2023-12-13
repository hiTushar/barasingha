import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './mobilemenu.scss';
import MobileMenuContentItem from './MobileMenuContentItem';

function MobileMenuItem({ item, handleClick }) {

   const [open, setOpen] = useState(false);

   if (item.children) {
      return (
         <>
            <div className={`menu-item ${open ? "open" : " "}`}>
               <div className='menu-title' onClick={() => setOpen(!open)}>
                  <span>{item.title}
                     <i className={open ? "pi pi-angle-down" : "pi pi-angle-up"} ></i>
                  </span>
               </div>
            </div>
            <div className={open ? "mob-sub-menu" : " "}>
               {open && item.children.map((child, index) => <MobileMenuContentItem handleClick={handleClick} key={index} item={child} />)}
            </div>

         </>
      )
   } else {
      return (
         <NavLink activeClassName='active' to={item.path} onClick={handleClick} className='menu-item'>
            <div className='menu-title'>
               <span>{item.title}</span>
            </div>
         </NavLink>
      )
   }
}

export default MobileMenuItem;