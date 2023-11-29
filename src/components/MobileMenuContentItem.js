import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './mobilemenu.scss';

function MobileMenuContentItem({ item, handleClick }) {

   return (
      <>
         <div className='menu-item-content'>
            <span><NavLink activeClassName='active' onClick={handleClick} to={item.path}>{item.title}</NavLink></span>
         </div>
      </>
   )
}

export default MobileMenuContentItem;