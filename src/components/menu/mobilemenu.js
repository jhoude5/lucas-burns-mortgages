import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'gatsby';

const MobileMenu = (props) => {

  return (
    <Menu {...props}>
      <ul className="mmenu--list">
      
        <li className='mmenu--list__item'>
          <Link to='#contact'>Contact</Link>
        </li>
        
        <li className='mmenu--list__item'>
          <Link href='#blog'>Blog</Link>
        </li>

        <li className='mmenu--list__item'>
          <Link to="#apply">Apply Now</Link>
        </li>

        <li className='mmenu--list__item'>
          <Link to="#testimonials">Testimonials</Link>
        </li>

      </ul>
    </Menu>
  );
};

export default MobileMenu;