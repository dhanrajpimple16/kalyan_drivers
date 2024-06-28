import React from 'react'
import Footer from '~/component/Footer'
import Navbar from '~/component/Navbar'
import { Link } from '@remix-run/react'
import blogs from '../assets/shutterstock_221823721.jpg'
const blog = () => {
  return (
    <div>
      <Navbar/>
      <div className="container pt-4">
      {/* First column */}
      <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4">
        <div className="col d-flex flex-column justify-content-evenly">
          <div className="row row-cols-1 row-cols-md-1 g-4">
            <div className="col mb-5 card-style">
              <Link to={`/blog/blog1`} className="text-decoration-none">
                <div className="card img-card">
                  <img src={blogs} className="card-img-top " alt="Blog Image" />
                  <div className="card-body">
                    <p className="card-text fs-2 font-bold text-center text-decoration-none text-dark">First Blogs</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col mb-5">
              <Link to={`/blog/blog1`}  className="text-decoration-none">
                <div className="card img-card">
                  <img src={blogs} className="card-img-top img-card" alt="Blog Image" />
                  <div className="card-body">
                  <p className="card-text fs-2 font-bold text-center text-decoration-none text-dark">First Blogs</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col mb-5">
              <Link to="/blog/blog1"  className="text-decoration-none">
                <div className="card img-card">
                  <img src={blogs} className="card-img-top img-card" alt="Blog Image" />
                  <div className="card-body">
                  <p className="card-text fs-2 font-bold text-center text-decoration-none text-dark">First Blogs</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Second column */}
        <div className="col d-flex flex-column justify-content-evenly">
          <div className="row row-cols-1 row-cols-md-1 g-4">
            <div className="col mb-5 card-style">
              <Link to="/blog/blog1"  className="text-decoration-none">
                <div className="card img-card">
                  <img src={blogs} className="card-img-top img-card" alt="Blog Image" />
                  <div className="card-body">
                  <p className="card-text fs-2 font-bold text-center text-decoration-none text-dark">First Blogs</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col mb-5">
              <Link to="/blog/blog1"  className="text-decoration-none">
                <div className="card img-card">
                  <img src={blogs} className="card-img-top img-card" alt="Blog Image" />
                  <div className="card-body">
                  <p className="card-text fs-2 font-bold text-center text-decoration-none text-dark">First Blogs</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col mb-5">
              <Link to="/blog/blog1"  className="text-decoration-none">
                <div className="card img-card">
                  <img src={blogs} className="card-img-top img-card" alt="Blog Image" />
                  <div className="card-body">
                  <p className="card-text fs-2 font-bold text-center text-decoration-none text-dark">First Blogs</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  )
}

export default blog
