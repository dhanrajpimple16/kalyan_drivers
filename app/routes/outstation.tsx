import { Link } from '@remix-run/react';
import React from 'react';
import Footer from '~/component/Footer';
import Navbar from '~/component/Navbar';

const outstation = () => {
  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <h1 className='fs-2 text-center'>Book Driver for Outstation: One-way Trip</h1>
        <p className='fs-5 fw-lighter text-center p-4 d-flex justify-content-center align-items-center'>
        Are you planning a trip outside the city and in need of a professional driver on rent for outstation? Look no further than Driver on hire! We offer a reliable high on demand driver service that is specifically tailored to your requirement. Our experienced drivers will make sure you have a safe and enjoyable trip, whether you're traveling for business meetings or for leisure.
We thoughtfully select our drivers, making sure they have exemplary driving records along with knowledge of a variety of routes. But mostly, they are committed to deliver you outstanding service and a stress-free trip. In case you're traveling alone or with a group, our drivers are qualified to operate a range of situations and vehicles, ensuring everyone enjoys a comfortable ride.
With our flexible booking options, you can select the day, time, and pickup location that best suit your schedule and preferences. We do acknowledge the value of an uncomplicated outstation journey, which is why we provide efficient driver services.
So why stress about inconvenient public transportation or navigating unfamiliar roads? Book a driver for your one-way trip out of town today and experience a stress-free journey to your destination.
        </p>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <p className='fw-bold fs-4'>Outstation Charges (Same day return)</p>
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
                  <td>12 Hours</td>
                  <td>Rs. 1000/-</td>
                </tr>
                <tr>
                  <td>Per hour overtime</td>
                  <td>Rs. 100/-</td>
                </tr>
                <tr>
                  <td>For DA Daily allowance</td>
                  <td>Rs. 300/-</td>
                </tr>
                <tr>
                  <td>Early morning charge ( If you want a driver between 4 AM to 6 AM ) ( After 4.00 AM another's day charge i.e. Rs. 1300/- applicable )</td>
                  <td>Rs. 200/-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='col-12 col-md-6 p-4'>
            <h1 className='fs-5 text-center'>Luxury:-</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Hours</th>
                  <th scope="col">Rates</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12 Hours</td>
                  <td>Rs. 1100/-</td>
                </tr>
                <tr>
                  <td>Per hour overtime</td>
                  <td>Rs. 100/-</td>
                </tr>
                <tr>
                  <td>For DA Daily allowance</td>
                  <td>Rs. 300/-</td>
                </tr>
                <tr>
                  <td>Early morning charge ( If you want a driver between 4 AM to 6 AM ) ( After 4.00 AM another's day charge i.e Rs. 1400/- applicable )</td>
                  <td>Rs. 200/-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <p className='fw-bold fs-4'>Outstation Charges (Stay)</p>
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
                  <td>Per day</td>
                  <td>Rs. 1000/-</td>
                </tr>
                <tr>
                  <td>For DA Daily allowance</td>
                  <td>Rs. 300/-</td>
                </tr>
                <tr>
                  <td>Early morning charge ( If you want a driver between 4 AM to 6 AM ) ( On the last day if you released the driver after 11 PM to 11.59 PM - 200/- night allowance applicable after 12.00 AM 300/- Driver allowance and 100/- per hour overtime applicable After 4.00 AM another 's day charge i.e 1300/- applicable )
                  Note: In a day driver will drive only 12 hours and accommodation you need to arrange or else driver will manage in the car.</td>
                  <td>Rs. 200/-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='col-12 col-md-6 p-4'>
            <h1 className='fs-5 text-center'>Luxury:-</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Hours</th>
                  <th scope="col">Rates</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Per day</td>
                  <td>Rs. 1100/-</td>
                </tr>
                <tr>
                  <td>For DA Daily allowance</td>
                  <td>Rs. 300/-</td>
                </tr>
                <tr>
                  <td>Early morning charge ( If you want a driver between 4 AM to 6 AM ) ( On the last day if you released the driver after 11 PM to 11.59 PM - 200/- night allowance applicable after 12.00 AM 300/- Driver allowance and 100/- per hour overtime applicable After 4.00 AM another 's day charge i.e 1400/- applicable )
                  Note: In a day driver will drive only 12 hours and accommodation you need to arrange or else driver will manage in the car.</td>
                  <td>Rs. 200/-
                  </td>
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

export default outstation
