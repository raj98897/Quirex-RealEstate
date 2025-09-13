import React from "react";

import NavBar from './NavBar.jsx';



const About = () => {
  return (
    <>
    
    <NavBar/>
      <div className="container-sm pt-5  overflow-hidden aboutsection">
        <div className="row">
          {/* Left Content */}
          <div className="col-lg-6 ">
            <span className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 rounded-pill">
              About Us
            </span>
            <h2 className="fw-bold mt-3">Today Sells Properties</h2>
            <p className="text-muted">
              Houzez allow you to design unlimited panels and real estate custom
              forms to capture leads and keep record of all information
            </p>
            <ul className="list-unstyled text-muted">
              <li className="mb-1">
                <i className="text-danger me-2 fa-solid fa-minus" />
                Live Music Concerts at Luviana
              </li>
              <li className="mb-1">
                <i className="text-danger me-2 fa-solid fa-minus" />
                Our SecretIsland Boat Tour is Just for You
              </li>
              <li className="mb-1">
                <i className="text-danger me-2 fa-solid fa-minus" />
                Live Music Concerts at Luviana
              </li>
              <li className="mb-2">
                <i className="text-danger me-2 fa-solid fa-minus" />
                Live Music Concerts at Luviana
              </li>
            </ul>
            {/* Icons row */}
            <div className="row text-center text-muted mt-4">
              <div className="col">
                <i className="fa-solid fa-bed me-1" />{" "}
                <span className="fw-bold">3</span> Bedrooms
              </div>
              <div className="col">
                <i className="fa-solid fa-bath me-1" />{" "}
                <span className="fw-bold">2</span> Bathrooms
              </div>
              <div className="col">
                <i className="fa-solid fa-car me-1" />{" "}
                <span className="fw-bold">2</span> Car Parking
              </div>
              <div className="col">
                <i className="fa-solid fa-ruler-combined me-1" />{" "}
                <span className="fw-bold">3450</span> square Ft
              </div>
            </div>
            {/* Small bottom images */}
            <div className="row g-2 mt-2">
              <div className="col-4">
                <img
                  src="./img/1.jpg.jpeg"
                  className="img-fluid rounded w-100 h-100 object-fit-cover"
                  alt="House 1"
                />
              </div>
              <div className="col-4">
                <img
                  src="./img/2.png"
                  className="img-fluid rounded w-100 h-100 object-fit-cover"
                  alt="House 2"
                />
              </div>
              <div className="col-4">
                <img
                  src="./img/3.jpg_1.jpeg"
                  className="img-fluid rounded w-100 h-100 object-fit-cover"
                  alt="House 3"
                />
              </div>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="col-lg-6">
            <div className="row g-2">
              <div className="col-12">
                <img
                  src="./img/9.png"
                  className="img-fluid rounded w-100 h-75 object-fit-cover"
                  alt="Main Living Room"
    
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default About;
