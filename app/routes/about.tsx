import React from 'react'
import Navbar from '~/component/Navbar'
import img from '../assets/driver.png'
import Footer from '~/component/Footer'
const about = () => {
  return (
    <div className='about-background'>
      <Navbar/>
      <h1 className='text-center fw-bold text-white'>About Us</h1>
      <div className='container-fluid pt-4 pb-4'>
  <div className='row d-flex align-items-center justify-content-center'>
    <div className='col-lg-6 order-lg-2 d-flex align-items-center justify-content-center'>
      <img src={img} className='img-fluid img-about' />
    </div>
    <div className='col-lg-6 order-lg-1'>
      <div className='sm-col-6'>
        <p className='d-flex justify-content-center align-items-center fs-5 p-4 fw-bolder text-white'>
          At Kalyan Drivers, we provide a complete and organized solution for your driving needs, offering drivers on a permanent, temporary, hourly, or contract basis. Our unique approach to driver recruitment reduces client risks and ensures quality service.
       
          Kalyan Drivers understands the current need for reliable drivers. In today's fast-paced world, especially in bustling cities like Kalyan, drivers have become a necessity for everyone. Considering the challenges of navigating Kalyan's busy streets, Kalyan Drivers offers a variety of services tailored to meet different customer needs. Our platform is designed to provide customers with the best drivers in the market, ensuring a seamless and stress-free experience.
        </p>
      </div>
    </div>
  </div>
</div>
<Footer/>
    </div>
  )
}

export default about
