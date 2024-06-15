import React from "react";
import refinanceicon from '../files/refinanceicon.png';
import houselogo from '../files/houselogo.png';
import consolidationicon from '../files/consolidationicon.png';
import helocicon from '../files/helocicon.png';

const Services = () => {

    return (

        <div className="container">
        <div className="row">
        <h2>Services Offered</h2>
          <div className="col-lg-3">
            <img className='service-logos' src={refinanceicon} alt='' />
            <h3>Mortgage Renewals</h3>
          </div>
          <div className="col-lg-3">
            <img className='service-logos' src={houselogo} alt='' />
            <h3>Purchases</h3>
          </div>
          <div className="col-lg-3">
            <img className='service-logos' src={consolidationicon} alt='' />
            <h3>Refinancing/Debt Consolidation</h3>
          </div>
          <div className="col-lg-3">
            <img className='service-logos' src={helocicon} alt='' />
            <h3>HEMLOC</h3>
            <p>Home Equity Line of Credit</p>
          </div>
          <a href='/mortgages' className="btn btn-primary">Learn more</a>
        </div>
      </div>
    );
};

export default Services;

