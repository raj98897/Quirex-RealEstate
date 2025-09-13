import React from 'react';
import NavBar from './NavBar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const Properties = () => {
const location = useLocation();
const navigate = useNavigate();

const handleClick = () =>{
  navigate('/propertylist');


useEffect(() => {
  AOS.init({ duration: 2000 }); // animation duration in ms
}, []);  
}
  return (
    <>
    {location?.pathname != "/" && <NavBar />}

      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-start">
            <p className="headproperties ">Area Properties</p>
            <h2 className="display btncolor fw-bold mt-2 text-center mb-5">
              Find Your Dream House
            </h2>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 " >
          {/* Property Card 1 */}
          <div className="col" data-aos="fade-up" data-aos-offset="50">
            <div className="card h-100 rounded-4 shadow-lg propcard">
              <div className="position-relative">
                <img
                  src="./img/13.jpg.jpeg"
                  className="card-img-top rounded-top-4"
                  alt="House in San Francisco"
                />
                <span className="position-absolute top-0 start-0 m-3 bg-dark bg-opacity-75 text-white px-3 py-2 rounded-3 fs-6 fw-medium">
                  2 PROPERTIES
                </span>
              </div>
              <div className="card-body p-4">
                <p className="card-text text-muted fs-6 mb-3">San Francisco</p>
                <h5 className="card-title fs-5 fw-semibold text-dark mb-2">
                  Mission District Area
                </h5>
                <a
                  href="#" onClick={handleClick}
                  className="text-danger fw-semibold text-decoration-none d-inline-flex align-items-center"
                >
                  View Property
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-right ms-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* Property Card 2 */}
          <div className="col" data-aos="fade-up" data-aos-offset="50">
            <div className="card h-100 rounded-4 shadow-lg propcard">
              <div className="position-relative">
                <img
                  src="./img/11.jpg.jpeg"
                  className="card-img-top rounded-top-4"
                  alt="Modern Bedroom"
                />
                <span className="position-absolute top-0 start-0 m-3 bg-dark bg-opacity-75 text-white px-3 py-2 rounded-3 fs-6 fw-medium">
                  5 PROPERTIES
                </span>
              </div>
              <div className="card-body p-4">
                <p className="card-text text-muted fs-6 mb-3">New York</p>
                <h5 className="card-title fs-5 fw-semibold text-dark mb-2">
                  Pacific Heights Area
                </h5>
                <a
                  href="#" onClick={handleClick}
                  className="text-danger fw-semibold text-decoration-none d-inline-flex align-items-center"
                >
                  View Property
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-right ms-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* Property Card 3 */}
          <div className="col" data-aos="fade-up" data-aos-offset="50">
            <div className="card h-100 rounded-4 shadow-lg propcard">
              <div className="position-relative">
                <img
                  src="./img/12.jpg.jpeg"
                  className="card-img-top rounded-top-4"
                  alt="Grand Staircase"
                />
                <span className="position-absolute top-0 start-0 m-3 bg-dark bg-opacity-75 text-white px-3 py-2 rounded-3 fs-6 fw-medium">
                  9 PROPERTIES
                </span>
              </div>
              <div className="card-body p-4">
                <p className="card-text text-muted fs-6 mb-3">
                  Sedona, Arizona
                </p>
                <h5 className="card-title fs-5 fw-semibold text-dark mb-2">
                  Noe Valley Zones
                </h5>
                <a
                  href="#" onClick={handleClick}
                  className="text-danger fw-semibold text-decoration-none d-inline-flex align-items-center"
                >
                  View Property
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-right ms-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Properties