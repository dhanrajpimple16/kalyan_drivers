import { Link } from '@remix-run/react';
import React from 'react';
import Footer from '~/component/Footer';
import Navbar from '~/component/Navbar';

const daily = () => {
  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <h1 className='fs-2 text-center'>Hire Drivers on Daily Basis</h1>
        <p className='fs-5 fw-lighter text-center p-4 d-flex justify-content-center align-items-center'>
        Now it's time to get a hassle-free and delightful travel experience with Driver on Hire! We offer personal driver on hire service on a daily basis. So that you get all about comfort, and convenience that will make your daily commuting needs at ease. Make your daily commuting safe and sound.
        With our Driver on Hire service, you can hire professional drivers on daily basis for your commute, business travels, or any other transportation needs. Whether you require a driver for a single day or an extended period, we've got your back.
        With our seamless and flexible service, you can easily hire a driver for a day to take care of your travel requirements within a few clicks. So why settle for the ordinary when you can have the extraordinary? Reserve your ride now, and let us make your travel experiences truly remarkable.
        </p>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <p className='fw-bold fs-4'>Local Charges for 2 hours (Service will be available for 24 hrs)</p>
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
                  <td>2 Hours</td>
                  <td>Rs. 500/-</td>
                </tr>
                <tr>
                  <td>Per hour overtime</td>
                  <td>Rs. 200/-</td>
                </tr>
                <tr>
                  <td>After 11 pm for night allowance up-to 6 AM.</td>
                  <td>Rs. 300/-</td>
                </tr>
                <tr>
                  <td>Drop location change charges.</td>
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
                  <td>2 Hours</td>
                  <td>Rs. 600/-</td>
                </tr>
                <tr>
                  <td>Per hour overtime</td>
                  <td>Rs. 200/-</td>
                </tr>
                <tr>
                  <td>After 11 pm for night allowance up-to 6 AM.</td>
                  <td>Rs. 300/-</td>
                </tr>
                <tr>
                  <td>Drop location change charges.</td>
                  <td>Rs. 200/-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <p className='fw-bold fs-4'>Local Charges for 4 hours (Service will be available for 24 hrs)</p>
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
                  <td>4 Hours</td>
                  <td>Rs. 600/-</td>
                </tr>
                <tr>
                  <td>Per hour overtime</td>
                  <td>Rs. 200/-</td>
                </tr>
                <tr>
                  <td>After 11 pm for night allowance up-to 6 AM.</td>
                  <td>Rs. 300/-</td>
                </tr>
                <tr>
                  <td>Drop location change charges.</td>
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
                  <td>4 Hours</td>
                  <td>Rs. 700/-</td>
                </tr>
                <tr>
                  <td>Per hour overtime</td>
                  <td>Rs. 200/-</td>
                </tr>
                <tr>
                  <td>After 11 pm for night allowance up-to 6 AM.</td>
                  <td>Rs. 300/-</td>
                </tr>
                <tr>
                  <td>Drop location change charges.</td>
                  <td>Rs. 200/-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
                  <td>8 Hours</td>
                  <td>Rs. 900/-</td>
                </tr>
                <tr>
                  <td>Per hour overtime</td>
                  <td>Rs. 200/-</td>
                </tr>
                <tr>
                  <td>After 11 pm for night allowance up-to 6 AM.</td>
                  <td>Rs. 300/-</td>
                </tr>
                <tr>
                  <td>Drop location change charges.</td>
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
                  <td>8 Hours</td>
                  <td>Rs. 1000/-</td>
                </tr>
                <tr>
                  <td>Per hour overtime</td>
                  <td>Rs. 200/-</td>
                </tr>
                <tr>
                  <td>After 11 pm for night allowance up-to 6 AM.</td>
                  <td>Rs. 300/-</td>
                </tr>
                <tr>
                  <td>Drop location change charges.</td>
                  <td>Rs. 200/-</td>
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

export default daily
