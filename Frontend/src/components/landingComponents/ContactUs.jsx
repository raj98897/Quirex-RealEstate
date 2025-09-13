import React from 'react';
import NavBar from './NavBar.jsx';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';


const schema = yup.object().shape({
  name : yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  subject : yup.string().required(),
  message : yup.string()
});

const ContactUs = () => {
  const {register, handleSubmit, formState: {errors},} = useForm({
    resolver: yupResolver(schema),
  });

  const handleQuery = async (data) =>{
    try{
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('subject', data.subject);
      formData.append('message', data.message);

      const response = await axios.post('http://localhost:9000/api/contact-us', formData, {
        headers: {
          'Content-Type':'multipart/form-data',
        },
      });
      if (response.status === 200){
        Swal.fire({
          title: 'Send Successfully, we contact soon.',
          text: response?.data?.message,
          icon: 'success'
        });
      }
    }
    catch(error){
      console.log('Sending error: ',error);
      Swal.fire({
        title: "Sending Failed!",
        text: response?.data?.message,
        icon: 'error'
      })
    }
  }

  return (
    
      <>

      <NavBar/>
  {/* Contact Us Form (Bootstrap 5 only) */}
  <div className="container py-5 " style={{ backgroundColor: "#fcece8" }}>
    <h2 className="text-center text-danger fw-bold mb-4">Contact Us!</h2>
    <div
      className="bg-white rounded shadow p-4 mx-auto"
      style={{ maxWidth: 900 }}
    >
      <form onSubmit={handleSubmit(handleQuery)}>
        <div className="row g-3">
          {/* Your Name */}
          <div className="col-md-6">
            <label htmlFor="name" className="form-label fw-semibold">
              Your Name
            </label>
            <input
              type="text" {...register('name')}
              className="form-control"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
          {/* Your Email */}
          <div className="col-md-6">
            <label htmlFor="email" className="form-label fw-semibold">
              Your Email
            </label>
            <input
              type="email" {...register('email')}
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
          {/* Phone Number */}
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label fw-semibold">
              Phone Number
            </label>
            <input
              type="text" {...register('phone')}
              className="form-control"
              id="phone"
              placeholder="Enter phone number"
            />
          </div>
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
          {/* Subject */}
          <div className="col-md-6">
            <label htmlFor="subject" className="form-label fw-semibold">
              Subject
            </label>
            <input
              type="text" {...register('subject')}
              className="form-control"
              id="subject"
              placeholder="Subject"
            />
          </div>
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
          {/* Message */}
          <div className="col-12">
            <label htmlFor="message" className="form-label fw-semibold">
              Message
            </label>
            <textarea
            {...register('message')}
              className="form-control"
              id="message"
              rows={4}
              placeholder="Your message"
              defaultValue={""}
            />
          </div>
          {/* Submit Button */}
          <div className="col-12 text-center mt-3">
            <button type="submit" className="btn btn-outline-danger px-4" >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  
</>

  )
}

export default ContactUs