import React from 'react'
import { IoLocationSharp } from "react-icons/io5";

const Location = () => {
  return (
    <div className='text-center pt-5 pb-5 bg-dark text-white'>
  <h1 className=' mb-5 fw-bolder location-heading'>We cater to all these cities</h1>
  <IoLocationSharp className='text-center  m-auto  location-icons'/>
  <div className='mt-5'>
    <div className='row text-center fs-3'>
     
      <div className='col-sm-4 col-6 mb-3'>
        <div>
          <p className='mb-0 location-hover'>Mumbai</p>
        </div>
      </div>
      <div className='col-sm-4 col-6 mb-3'>
        <div>
          <p className='mb-0 location-hover'>Navi Mumbai</p>
        </div>
      </div>
      <div className='col-sm-4 col-6 mb-3'>
        <div>
          <p className='mb-0 location-hover'>Dadar</p>
        </div>
      </div>

      <div className='col-sm-4 col-6 mb-3'>
        <div>
          <p className='mb-0 location-hover'>Dombivali</p>
        </div>
      </div>
      <div className='col-sm-4 col-6 mb-3'>
        <div>
          <p className='mb-0 location-hover'>Karjat</p>
        </div>
      </div>
      <div className='col-sm-4 col-6 mb-3'>
        <div>
          <p className='mb-0 location-hover'>Kasara</p>
        </div>
      </div>

      <div className='col-sm-4 col-6 mb-3'>
        <div>
          <p className='mb-0 location-hover'>Kalyan</p>
        </div>
      </div>
      <div className='col-sm-4 col-6 mb-3'>
        <div>
          <p className='mb-0 location-hover'>Vashi</p>
        </div>
      </div>
      <div className='col-sm-4 col-6 mb-3'>
        <div>
          <p className='mb-0 location-hover'>Thane</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Location
