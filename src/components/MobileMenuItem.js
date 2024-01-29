import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './mobilemenu.scss';
import MobileMenuContentItem from './MobileMenuContentItem';

function MobileMenuItem({ item, handleClick, setSubMenu }) {

   const [open, setOpen] = useState(false);

   const renderSubMenu = (menuItem) => {
      if (menuItem.categories) {
         let menuCategoryMap = menuItem.categories.reduce((all, category) => {
            return (
               {
                  ...all,
                  [category]: menuItem.children.filter(childMenuItem => childMenuItem.category === category)
               }
            )
         }, {})

         return (    
            Object.keys(menuCategoryMap).map((category, index) => (
               <div className='menu-item-nested' key={index}>
                  <div className='menu-item-category'>{category}</div>
                  <div>
                     {
                        menuCategoryMap[category].map((categoryItem, index) => {
                           return (
                              <div className='menu-item-content' key={index} onClick={() => setSubMenu(categoryItem.children ? categoryItem.children : [])}>
                                 <span>{categoryItem.title}</span>
                              </div>
                           )
                        })
                     }
                  </div>
                  <div className='seperator'></div>
               </div>
            ))
         )
      }

      return (
         menuItem.children.map((child, index) => <MobileMenuContentItem handleClick={handleClick} key={index} item={child} />)
      )
   }

   if (item.children) {
      return (
         <>
            <div className={`menu-item ${open ? "open" : " "}`} onClick={() => setOpen(!open)}>
               <div className='menu-title'>
                  <span>
                     {item.title}
                     <i className={!open ? "pi pi-angle-down" : "pi pi-angle-up"} ></i>
                  </span>
               </div>
            </div>
            <div className={open ? "mob-sub-menu" : " "}>
               {open && renderSubMenu(item)}
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