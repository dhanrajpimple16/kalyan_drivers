import { Link } from '@remix-run/react';
import React from 'react';
import Footer from '~/component/Footer';
import Navbar from '~/component/Navbar';

const permanent = () => {
  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <h1 className='fs-2 text-center'>Hire Permanent Drivers</h1>
        <p className='fs-5 fw-lighter text-center p-4 d-flex justify-content-center align-items-center'>
          Need a driver for a few hours? Our verified drivers are available on hourly basis! So whether you need a personal driver for shopping, a short city tour, a business meeting, a social gathering, or planning to visit someone on short notice. Our hourly basis drivers service is a must-try!
          Hire Drivers on Hourly Basis for short-term trips or special events. Driver on Hire offers a flexible hiring option that is convenient and affordable. We have a pool of experienced and reliable drivers who ensure safety during your commute. With our drivers on an hourly basis, you don't have to worry about parking, navigating through traffic, or route hunting saga. Our drivers are well-versed in local traffic patterns and can efficiently navigate through the city, saving you time and stress. So for your next short-term trip or special event enjoy a hassle-free and comfortable ride with Driver on Hire.
        </p>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <p className='fw-bold fs-4'>Local Charges for 8 hours (Service will be available for 24 hrs)</p>
          <div className='col-12 col-md-6 p-4'>
            <h1 className='fs-5 text-center'>Manual /Automatic Car:-</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Hours</th>
                  <th scope="col">Rates</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>6 months membership with unlimited replacement guarantee.</td>
                  <td>Rs. 6000/- + GST</td>
                </tr>
                <tr>
                  <td>1 year membership with unlimited replacement guarantee.</td>
                  <td>Rs. 8000/- + GST</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='container-fluid d-flex justify-content-center align-items-center'>
        <Link to='/' className='btn btn-primary m-auto'>Book Driver</Link>
      </div>
      <Footer />
    </>
  )
}

export default permanent