import React from "react";
import closeIcon from '../files/close.svg';
import PropTypes from 'prop-types';
import MainMenu from './menu/mainmenu'
import MobileMenu from './menu/mobilemenu';


const Header = () => {

    return (

        <header>
            <div className="book-now">
                <div className="container">
                        <p>Get Started</p>
                        <a className="btn btn-secondary" href='https://calendly.com/lucasburns-mortgage-agent/phone-call'>Book an Appointment</a>
                    
                </div>
                </div>
            <div className='header container'><div className='inner'>
                <MainMenu />
                <MobileMenu
                  right
                  noTransition
                  width={'75%'}
                  customBurgerIcon={<svg alt='mobile menu navigation icon' width="20" height="15" fill="%23FFF" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h20v2H0zM0 7h20v2H0zM0 13h20v2H0z" /></svg>}
                  customCrossIcon={<img alt='mobile menu close button' src={closeIcon} />}
                />
            </div></div>
        
      

        </header>
    );
};

export default Header;

Header.propTypes = {
    onMenuClick: PropTypes.func,
    visibility: PropTypes.bool
};