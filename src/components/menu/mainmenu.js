import React from 'react'
import { Link } from 'gatsby';
import homelogo from '../../files/Logo.png';

const MainMenu = () => {

  return (
    <nav className='navbar navbar-expand-lg'>
        <Link to='/' className='navbar-brand lucas-burns'>
          <img className='home-logo' src={homelogo} alt='logo'/>
        </Link>
        <div className='header-info'>
        <p className='header-name'>Lucas Burns</p>
        <p className='header-mortgage-info'>Mortgage Agent (Level 2)</p>
        <p className='header-martel-info'>Martel Mortgages</p>
        </div>
        
        
        <div className="collapse navbar-collapse nav-menu">
            <ul className='navbar-nav'>
            
                <li className='nav-item'><Link className='nav-link' to='#contact'>Contact</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/blog'>Blogs</Link></li>
                <li className='nav-item'><Link className='nav-link' to='#apply'>Apply Now</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/testimonials'>Testimonials</Link></li>
                
            </ul>
        </div>
     
    </nav>
  )
}

export default MainMenu;