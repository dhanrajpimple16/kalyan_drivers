import { Link } from '@remix-run/react';
import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid ">
        <div className="row ">

          <div className="col-md-4  text-center footer-value">
            <h3 className='fs-2 font-bold '>Services</h3>
            <Link to={'/hourly'} className='nav-link text-light fs-6'>Hourly Drivers</Link>
            <Link to={'/temporary'} className='nav-link text-light fs-6'>Temporary Drivers</Link>
            <Link to={'/Night'} className='nav-link text-light fs-6'>Night Drivers</Link>
            <Link to={'/Permanent'} className='nav-link text-light fs-6'>Permanent Drivers</Link>
            <Link to={'/outstation'} className='nav-link text-light fs-6'>Outstation Drivers</Link>
            <Link to={'/daily'} className='nav-link text-light fs-6'>Daily Drivers</Link>
          </div>


          <div className="col-md-4 text-center footer-value">
            <h3 className='fs-2 font-bold'>Cities</h3>
            <p className='fs-6'>Mumbai</p>
            <p className='fs-6'>Kalyan</p>
            <p className='fs-6'>Thane</p>
            <p className='fs-6'>Navi Mumbai</p>
          </div>

   
          <div className="col-md-4 text-center footer-value ">
            <h3 className='fs-2 font-bold '>Address</h3>
            <p className='fs-6'>1234 Main St, Anytown, USA</p>
            <p className='fs-6'>Email: example@example.com</p>
            <p className='fs-6'>Phone: +1234567890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
