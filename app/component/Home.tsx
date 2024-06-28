import { LinksFunction } from '@remix-run/node';
import React from 'react'


const Home = () => {
  return (
    <div className='container-fluid hero-div'>
     
  <div className='hero-gradient container-fluid d-flex  justify-content-center flex-column'>
    <div className='container-fluid text-center p-5'>
      <p className='hero-heading fs-1'>NEED A DRIVER?</p>
      <p className='hero-heading1 fs-2'>GET SPECIAL DISCOUNT FOR THIS WEEK!</p>
    </div>
    <div className='hero-footer d-flex  p-5 row'>
    
      <div className='col-sm-6 d-flex justify-content-center align-items-center'>
        <div className='hero-address text-center pb-5'>
          <p>More Info:</p>
          <p>+91 845 188 6937</p>
          <p>www.KalyanDrivers.com</p>
        </div>
      </div>
      <div className='col-sm-6 d-flex justify-content-center'>
        <div className='hero-circle text-center'>
          <p>BOOK</p>
          <p>NOW</p>
        </div>
      </div>
      </div>
    </div>
 
</div>

  )
}
export default Home

