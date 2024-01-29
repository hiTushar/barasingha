import React from 'react';
import { NavLink } from 'react-router-dom';
import './mobilemenu.scss';

function MobileMenuContentItem({ item, handleClick }) {

   return (
      <>
         <div className='menu-item-content'>
            <NavLink activeClassName='active' onClick={handleClick} to={item.path}>{item.title}</NavLink>
         </div>
      </>
   )
}

export default MobileMenuContentItem;