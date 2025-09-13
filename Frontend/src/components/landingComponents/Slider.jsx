import React from 'react'
import { FaHome } from "react-icons/fa";
import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom';

const Slider = () => {
  const navigate = useNavigate();

  const handlequery = () =>{
    navigate('/contactus')
  }
  return (
    <>
    <div className='container-fluid'>
      <div className="row bg " style={{ minHeight: "400px" }}>
      {/* <video autoplay controls muted loop loading="lazy" style={{ width: "100%", height: "100vh" }}><source src="./home-background.mp4" type='video/mp4' /> */}
        <div className="col-10 py-5 mx-auto">
          <div className="row d-flex align-items-center">
            {/* Text Content */}
            <div className="col-sm-6  mb-4 ">
              <p className="fs-5 fw-bold">
                <FaHome className="me-2 ic" />
                Real Estate Agency
              </p>
              <b className="typewriter"> 
                <Typewriter
                  options={{
                    strings: ['Find the exciting Dream House.'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </b>
              <p className='mt-3'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
              <button onClick={handlequery} className="btn btn1 mt-4 fw-4">Make An Enquiry</button>
            </div>

            
             <div className="col-sm-6  text-center">
              <img
                src="/img/21_1.png"
                alt="Real Estate"
                className="img-fluid rounded "
                style={{ maxHeight: "550px" }}
              />
            </div>
          </div>
        </div>
        
      </div>
      </div>
    </>
  )
}

export default Slider
