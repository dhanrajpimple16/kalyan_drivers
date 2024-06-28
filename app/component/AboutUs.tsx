import React, { useState } from 'react';

import { MdVerifiedUser } from "react-icons/md";
import { RiEmotionHappyLine } from "react-icons/ri";
const AboutUs = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className=' container-fluid d-flex flex-column  justify-content-center align-items-center customer-section '>
      <div className='row d-flex flex-column  justify-content-center align-items-center p-2'>
      <h2 className='fs-1 fw-bolder pb-5 text-center'>Hassle-free Commute with #1 Driver Service by Kalyan Drivers</h2>
      <p className='fw-bold col-12 col-sm-8'>
      Kalyan Drivers specializes in providing skilled drivers dedicated to your safety and comfort. Whether you need chauffeur services for a special occasion, business meeting, or daily commutes, we cater to your specific requirements with professionalism and reliability.
        {show ? (
          <>
            Our drivers undergo meticulous training and possess all necessary certifications, ensuring they are well-prepared to navigate local routes and traffic seamlessly. We prioritize your safety and aim to make your journey as smooth and convenient as possible.

Booking a driver with Kalyan Drivers is effortless; you can hire our services online and trust that your transportation needs are in capable hands. Our team is committed to exceeding your expectations with exceptional service and a commitment to excellence in every ride.

Choose Kalyan Drivers for dependable, comfortable, and safe transportation solutions tailored to meet your needs. Contact us today to experience the difference and enjoy peace of mind on every journey.
          </>
        ) : null}

        <span onClick={toggleShow} className='text-danger'>
          {show ? "  ...Read Less" : "  ...Read More"}
        </span>
      </p>

      <div className="container-fluid pt-5">
  <div className="row container-fluid d-flex  justify-content-center align-items-center">
  
    <div className="col-md-6 col-lg-3 mb-3">
      <div className="card h-200 p-1 bg-warning ">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div className='text-center'>
            <p className="mb-0 text-dark fs-2 fw-bold">50+</p>
            <p className="mb-0 text-dark fs-4 fw-bold">Professional Drivers</p>
          </div>
          <div>
            <MdVerifiedUser className='text-dark fs-1'/>
          </div>
        </div>
      </div>
    </div>


    <div className="col-md-6 col-lg-3 mb-3">
      <div className="card h-200 p-1 bg-warning ">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div className='text-center'>
            <p className="mb-0 text-dark fs-2 fw-bold">84+</p>
            <p className="mb-0 text-dark fs-4 fw-bold">Happy Customers</p>
          </div>
          <div>
            <RiEmotionHappyLine className='text-dark fs-1'/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


</div>

    </div>
  );
}

export default AboutUs;
