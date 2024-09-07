import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  const [formData, setFormData] = useState ({
    email: '',
    password: ''
  })

  const handleInputChange = e => {
    setFormData ({...formData, [e.target.name]:e.target.value});
  };

  return (
  <section className = 'px-5 lg:px-0'>
    <div className = 'max-w-[500px] mx-auto rounded-lg shadow-md md:p-10 text-justify'>
      <h3 className = 'text-headingColor text-[17px] leading-9 mb-10'>
        <span className = 'text-primaryColor font-bold'> Welcome Back! </span> 
          Log in to explore our services and book appointments. 🩺
      </h3>

        <form className = "py-4 md:py-2 ">
          <div className = 'mb-5'>
            <input type = "email" 
            placeholder = 'Enter Your Email' 
            name = 'email' 
            value = {formData.email}
            onChange = {handleInputChange} 
            className = 'border border-solid border-[#026a6e] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md text-[12px] leading-7 cursor-pointer'
            required
            />
          </div>
      
          <div className = 'mb-5'>
            <input type = "password" 
            placeholder = 'Enter Your Password' 
            name = 'password' 
            value = {formData.password}
            onChange = {handleInputChange} 
            className = 'border border-solid border-[#026a6e] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md text-[12px] leading-7 cursor-pointer'
            required
            />
            </div>

            <div className = 'mt-7'>
                <button type = 'submit' 
                className = 'w-full bg-primaryColor text-white text-[14px] leading-[30px] rounded-lg px-4 py-3'>
                  Login
                </button>
            </div>

          <p className = 'mt-5 text-textColor text-center'>
              Don't have an account? {" "}
              <Link to = '/register' className = 'text-primaryColor font-medium ml-1'> Register </Link>
          </p>
        </form>
      </div>
  </section>
  );
};

export default Login;