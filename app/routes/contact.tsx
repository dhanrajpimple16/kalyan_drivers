import React from "react";
import Footer from "~/component/Footer";
import Navbar from "~/component/Navbar";

const LeadFormPopup = () => {
  return (
   
   <> <div className="container-fluid contact-background">
    

     
        <Navbar/>
       
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content ">
            <div className="modal-body">
              <div className="d-flex flex-column gap-2 p-2">
                <h1 className="text-center fw-bold">Connect with Us</h1>
                <div className="row g-2">
                  <div className="col">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="fname"
                        name="fname"
                      />
                      <label htmlFor="fname">First Name</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="lname"
                        name="lname"
                      />
                      <label htmlFor="lname">Last Name</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                      />
                      <label htmlFor="email">Your email</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                      />
                      <label htmlFor="phone">Your Phone Number</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                      />
                      <label htmlFor="city">Your Location</label>
                    </div>
                  </div>
                </div>
                <div className="d-grid gap-2 col-12 mx-auto">
                  <button className="btn btn-primary" type="button">
                    Submit
                  </button>
                </div>
              </div>
             
            </div>
          </div>
        </div>

        <Footer/>
        </div>
    </>
  );
};

export default LeadFormPopup;
