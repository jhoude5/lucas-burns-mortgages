import React from "react";
import martelLogo from '../files/martelLogo.jpeg';
import facebooklogo from '../files/facebook.svg';
import linkedinlogo from '../files/linkedin.svg';
import instagramlogo from '../files/instagram.svg';

const Footer = () => {

    return (

        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h2>Lucas Burns</h2>
                        <p className="footer-mortgage-info">Mortgage Agent (Level 2)</p>
                        <p className="footer-mortgage-licence-info">Licence #M20001298</p>
                        <a href='https://martelmortgages.ca/'>
                            <img className='footer-martel-logo' src={martelLogo} alt='martel logo'/>
                        </a>
                    </div>
                    <div className="center col-lg-4">
                        <h3>Head Office</h3>
                        <p className="martel-info">Martel Mortgages<br/>
                            FSCO # 13015<br/>
                            Building B3101 County Road 29<br/>
                            Brockville, ON K6V 5T4<br/>
                            1.855.320.2464 ext 118</p>
                        
                    </div>
                    <div className="center col-lg-4">
                        <h3>Telephone</h3>
                        <a href='tel:613-298-1522'>(613) 298-1522</a>
                        <h3>Email</h3>
                        <a href='mailto:lburns@martelmortgages.ca'>lburns@martelmortgages.ca</a>
                    </div>
                    <div className="footer-bottom">
                        <div className="copyright">
                            <p>Copyright © All Rights Reserved</p>
                        </div>
                        <div className="social-icons">
                            <img src={facebooklogo} alt='facebook logo' />
                            <img src={linkedinlogo} alt='linkedin logo' />
                            <img src={instagramlogo} alt='instagram logo' />
                        </div>
                    </div>
                   
                </div>
            </div>
        </footer>
    );
};

export default Footer;

