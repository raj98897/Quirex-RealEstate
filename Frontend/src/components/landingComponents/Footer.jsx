import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { BsEnvelope } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Swal from 'sweetalert2';

const schema = yup.object().shape({
  email : yup.string().email().required()
});

const Footer = () => {
    const {register, handleSubmit, formState: {errors},} = useForm({
    resolver: yupResolver(schema),
  });
  const handleQuery = async(data)=>{
    try {
      const formData = new FormData();
      formData.append('email', data.email);

      const response = await axios.post('http://localhost:9000/api/contact-us', formData,{
        headers:{
          'Content-Type': 'multipart/form-data'
        },
      });
      if(response.status === 200){
        Swal.fire({
          title: "Request Send Successfully.",
          text: "We will contact you soon.",
          icon: "success",
        })
      }

  }
        catch(error){
        console.log('Sending error', error);
        Swal.fire({
          title: "Sending Failed!",
          text: "Please try again.",
          icon: "error",
        })
      }
    }


  return (
   <> 

      <div className="footer">
    <div className="row g-4">
     
      <div className="col-12 col-md-6 col-lg-2">
        <div className="d-flex align-items-center mb-3 logo">
          <img src='/img/favicon.png'/> Quirex
        </div>
        <p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.</p>
        <p><CiLocationOn className='me-2'/>Brooklyn, New York, United &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;States</p>
        <p><LuPhoneCall className='me-2'/>+0123-456789</p>
        <p><BsEnvelope className='me-2'/>example@example.com</p>
         <div className="d-flex gap-3 mt-2">
            <a href="#" className="text-white"><ImFacebook /></a>
            <a href="#" className="text-white"><IoLogoTwitter /></a>
            <a href="#" className="text-white"><FaLinkedin /></a>
            <a href="#" className="text-white"><FaYoutube /></a>
          </div>
      </div>

    
      <div className="col-6 col-lg-2">
        <h5 className='text-light'>Company</h5>
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">All Products</a>
        <a href="#">Locations Map</a>
        <a href="#">FAQ</a>
        <a href="#">Contact us</a>
      </div>


      <div className="col-6 col-lg-2">
        <h5 className='text-light'>Services</h5>
        <a href="#">Order tracking</a>
        <a href="#">Wish List</a>
        <a href="#">Login</a>
        <a href="#">My account</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Promotional Offers</a>
      </div>

      <div className="col-6 col-lg-2">
        <h5 className='text-light'>Customer Care</h5>
        <a href="#">Login</a>
        <a href="#">My account</a>
        <a href="#">Wish List</a>
        <a href="#">Order tracking</a>
        <a href="#">FAQ</a>
        <a href="#">Contact us</a>
      </div>

   
      <div className="col-12 col-lg-4">
        <h5 className='text-light'>Newsletter</h5>
        <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
        <div className="d-flex mb-3">
        <form onSubmit={handleSubmit(handleQuery)}>
        <div className='row'>
        <div className="col-sm-11">
          <input  type="email" {...register('email')} placeholder="Email*" className="subscribe-input" />
        </div>
        <div className='col-sm-1'>  
          <button value='button' className="subscribe-btn"><BiLogoTelegram /></button>
        </div>  
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        </form>
        </div>
        <h6 className="text-white mt-3">We Accept</h6>
        <div className="payment-icons mt-2">
          <img src='/img/payment-4.png'/>
        </div>
      </div>
    </div>
  </div>

  <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center">
    <div className='text-center'>All Rights Reserved @ Company {new Date().getFullYear()}</div>
    <div className="mt-2 mt-md-0">
      <a href="#">Terms & Conditions</a>
      <a href="#">Claim</a>
      <a href="#">Privacy & Policy</a>
    </div>
  </div>
    </>
  )
}

export default Footer
