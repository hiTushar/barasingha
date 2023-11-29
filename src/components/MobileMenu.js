import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './mobilemenu.scss';
import MobileMenuItem from './MobileMenuItem';
import MenuItems from './mobile-menu.json';
import { Button } from './Button';

function MobileMenu({ handleClick }) {

   return (
      <>
         <div className='mobile-menu-container'>
            {MenuItems.map((item, index) => <MobileMenuItem key={index} item={item} handleClick={handleClick} />)}
            <Button buttonStyle='btn--primary'> INTERESTED?</Button>
         </div>
      </>
   )
}

export default MobileMenu;
