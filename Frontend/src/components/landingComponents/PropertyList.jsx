import React from "react";
import NavBar from './NavBar.jsx';

const PropertyList = () => {
  return (
    <>
    <NavBar/>
      <div className="container py-5">
        {/* Recent Offers */}
        <div className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">Recent Offers</h5>
            <a href="#" className="text-danger text-decoration-none small">
              Show more offers
            </a>
          </div>
          <div className="row g-3">
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <img
                  src="./img/11.jpg.jpeg"
                  className="card-img-top propertylistimg"
                  alt="Modern Apartment"
                />
                <div className="card-body">
                  <h6 className="text-danger">Modern Apartment</h6>
                  <p className="mb-1 text-muted">📍 New Delhi</p>
                  <p className="text-muted mb-2">No description available.</p>
                  <p className="text-success fw-bold">$1,200 / month</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <img
                  src="./img/12.jpg.jpeg"
                  className="card-img-top propertylistimg"
                  alt="Luxury Villa"
                />
                <div className="card-body">
                  <h6 className="text-danger">Luxury Villa</h6>
                  <p className="mb-1 text-muted">📍 Mumbai</p>
                  <p className="text-muted mb-2">No description available.</p>
                  <p className="text-success fw-bold">$250,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Recent Places for Rent */}
        <div className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">Recent Places for Rent</h5>
            <a href="#" className="text-danger text-decoration-none small">
              Show more places for rent
            </a>
          </div>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="card">
                <img
                  src="./img/1.jpg_2.jpeg"
                  className="card-img-top propertylistimg"
                  alt="Cozy Studio"
                />
                <div className="card-body">
                  <h6 className="text-danger">Cozy Studio</h6>
                  <p className="mb-1 text-muted">📍 Bangalore</p>
                  <p className="text-muted mb-2">No description available.</p>
                  <p className="text-success fw-bold">$800 / month</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src="./img/1.jpg.jpeg"
                  className="card-img-top propertylistimg"
                  alt="Cozy Studio"
                />
                <div className="card-body">
                  <h6 className="text-danger">Cozy Studio</h6>
                  <p className="mb-1 text-muted">📍 Bangalore</p>
                  <p className="text-muted mb-2">No description available.</p>
                  <p className="text-success fw-bold">$800 / month</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src="./img/2.jpg_2.jpeg"
                  className="card-img-top propertylistimg"
                  alt="Cozy Studio"
                />
                <div className="card-body">
                  <h6 className="text-danger">Cozy Studio</h6>
                  <p className="mb-1 text-muted">📍 Bangalore</p>
                  <p className="text-muted mb-2">No description available.</p>
                  <p className="text-success fw-bold">$800 / month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Recent Places for Sale */}
        <div className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">Recent Places for Sale</h5>
            <a href="#" className="text-danger text-decoration-none small">
              Show more places for sale
            </a>
          </div>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="card">
                <img
                  src="./img/3.jpg_1.jpeg"
                  className="card-img-top propertylistimg"
                  alt="Family House"
                />
                <div className="card-body">
                  <h6 className="text-danger">Family House</h6>
                  <p className="mb-1 text-muted">📍 Pune</p>
                  <p className="text-muted mb-2">No description available.</p>
                  <p className="text-success fw-bold">$880,000</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src="./img/3.png"
                  className="card-img-top propertylistimg"
                  alt="Family House"
                />
                <div className="card-body">
                  <h6 className="text-danger">Family House</h6>
                  <p className="mb-1 text-muted">📍 Pune</p>
                  <p className="text-muted mb-2">No description available.</p>
                  <p className="text-success fw-bold">$880,000</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src="./img/8.png"
                  className="card-img-top propertylistimg"
                  alt="Family House"
                />
                <div className="card-body">
                  <h6 className="text-danger">Family House</h6>
                  <p className="mb-1 text-muted">📍 Pune</p>
                  <p className="text-muted mb-2">No description available.</p>
                  <p className="text-success fw-bold">$880,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyList;
