import React, { useState } from 'react';
import { Link} from "@remix-run/react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
 <div>
<div className='d-flex bg-dark text-white justify-content-center gap-4 fw-bold container-fluid p-2'>
  <p>Kalyandrivers@gmail.com</p>
  <p>+918451886937</p>
</div>

<nav className="navbar navbar-expand-lg navbar-light bg-light  d-flex align-self-end">
  <div className="container-fluid">
    <button
      className="navbar-toggler ms-auto"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse ms-auto navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-3">
          <Link className="nav-link active fw-normal fs-5" aria-current="page" to='/'>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-normal fs-5  me-3" to={'/about'}>
            About Us
          </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link fw-normal fs-5  me-3" to={'/blogs'}>
            Blog
          </Link>
        </li>
        <li className="nav-item dropdown">
          <p
            className="nav-link dropdown-toggle fw-normal fs-5  me-3"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"

          >
            Services
          </p>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link className="dropdown-item fw-normal " to={'/hourly'}>
                Hourly Drivres
              </Link>
            </li>
            <li>
              <Link className="dropdown-item fw-normal " to={'/temporary'}>
                Temporary Drivres
              </Link>
            </li>
            <li>
              <Link className="dropdown-item fw-normal " to={'/Night'}>
                Night Drivres
              </Link>
            </li>
            <li>
              <Link className="dropdown-item fw-normal " to={'/Permanent'}>
                Permanent Drivres
              </Link>
            </li>
            <li>
              <Link className="dropdown-item fw-normal" to={'/outstation'}>
                Outstation Drivres
              </Link>
            </li>
            <li>
              <Link className="dropdown-item fw-normal" to={'/daily'}>
                Daily Drivres
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-normal fs-5  me-3"  to={'/contact'} aria-disabled="true">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


 </div>

  )
}

export default Navbar