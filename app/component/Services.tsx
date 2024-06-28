import React from "react";
import { GiSandsOfTime } from "react-icons/gi";
import { GiMountainRoad } from "react-icons/gi";
import { RiCheckDoubleLine } from "react-icons/ri";
import { BiSolidTimer } from "react-icons/bi";
import { IoCloudyNightSharp } from "react-icons/io5";
import { FaHandshake } from "react-icons/fa6";
import { Link } from "@remix-run/react";
const Services =()=>{
  return (
    <div className="pb-5 pt-5 bg-dark">
  <h1 className="fs-1 text-center fw-bold service-heading">What we offer</h1>
  <p className="text-center mt-4 mb-5 fs-3 service-para">We are committed to providing safe and reliable services. Our drivers are carefully vetted.</p>

  <div className="container-fluid row row-cols-1 row-cols-md-3 g-3 md-p-5 ">
    <div className="col mb-4">
      <Link to={'/hourly'} className="card h-100 nav-link text-dark d-flex text-center flex-row justify-center align-items-center p-4 service-card">
        <div className="d-flex text-center  flex-row justify-center align-items-center">
          <GiSandsOfTime className=" service-icons col-4" />
          <div>
            <p>Hourly drivers offer transportation services on an hourly basis. It is suitable for those who need to attend conferences and other events.</p>
            <p className="fs-6 font-bold">HOURLY DRIVERS</p>
          </div>
        </div>
      </Link>
    </div>

    <div className="col mb-4">
    <Link to={'/outstation'} className="card h-100 d-flex nav-link text-dark text-center flex-row justify-center align-items-center p-4 service-card">
    <div className="d-flex text-center flex-row justify-center align-items-center">
          <GiMountainRoad className="service-icons col-4 "/>
          <div>
            <p>Outstation drivers accompany clients on journeys outside their hometowns, towns, or cities. They are skilled at handling various situations and providing a reliable travel experience.</p>
            <p className="fs-6 font-bold">OUTSTATION DRIVERS</p>
          </div>
        </div>
      </Link>
    </div>

    <div className="col mb-4">
    <Link to={'/daily'} className="card h-100 d-flex nav-link text-dark text-center flex-row justify-center align-items-center p-4 service-card">
    <div className="d-flex text-center flex-row justify-center align-items-center">
          <RiCheckDoubleLine className="service-icons col-4 "/>
          <div>
            <p>Daily drivers are hired for a single day or specific occasions. They are useful when a dedicated driver is required for events, appointments, or special occasions.</p>
            <p className="fs-6 font-bold">DAILY DRIVERS</p>
          </div>
        </div>
      </Link>
    </div>

    <div className="col mb-4">
    <Link to={'/temporary'} className="card h-100 nav-link text-dark d-flex text-center flex-row justify-center align-items-center p-4 service-card">
    <div className="d-flex text-center flex-row justify-center align-items-center">
          <BiSolidTimer className="service-icons col-4 "/>
          <div>
            <p>To cover for unavailable regular drivers or during periods of high demand, they are hired for a short duration to offer flexibility and support when there is a shortage of workforce.</p>
            <p className="fs-6 font-bold">TEMPORARY DRIVERS</p>
          </div>
        </div>
      </Link>
    </div>

    <div className="col mb-4">
    <Link to={'/Night'} className="card h-100 nav-link text-dark d-flex text-center flex-row justify-center align-items-center p-4 service-card">
    <div className="d-flex text-center flex-row justify-center align-items-center">
          <IoCloudyNightSharp className="service-icons col-4 " />
          <div >
            <p>To cover for unavailable regular drivers or during periods of high demand, they are hired for a short duration to offer flexibility and support when there is a shortage of workforce.</p>
            <p className="fs-6 font-bold">NIGHT DRIVERS</p>
          </div>
        </div>
      </Link>
    </div>

    <div className="col mb-4">
    <Link to={'/Permanent'} className="card h-100 nav-link text-dark d-flex text-center flex-row justify-center align-items-center p-4 service-card">
    <div className="d-flex text-center flex-row justify-center align-items-center">
          <FaHandshake className="service-icons col-4 " />
          <div>
            <p>Permanent drivers work for individuals, families, or organisations on a long-term basis. They manage the client's pick-up and drop-off preferences, schedules, and so on.</p>
            <p className="fs-6 font-bold">PERMANENT DRIVERS</p>
          </div>
        </div>
      </Link>
    </div>
  </div>
</div>

  )
}

export default Services;