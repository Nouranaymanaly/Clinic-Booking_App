import React from 'react';
import { useState } from 'react';
import avatar from '../assets/images/doctor-img.png';

const Signup = () => {

  const [formData, setFormData] = useState ({
    name: '',
    email: '',
    password: ''
  })

  const handleInputChange = e => {
    setFormData ({...formData, [e.target.name]:e.target.value});
  };

  return (
    <section className = 'px-5 lg:px-0'>
    <div className = 'max-w-[500px] mx-auto rounded-lg shadow-md md:p-10 text-justify'>
      <h3 className = 'text-primaryColor text-[17px] leading-9 mb-10 font-semibold'>
        Create An Account
      </h3>

          <form>
              <div className = 'mb-5'>
              <input type = "text" 
              placeholder = 'Full Name' 
              name = 'name'
              value = {formData.name}
              onChange = {handleInputChange} 
              className = 'border border-solid border-[#026a6e] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md text-[12px] leading-7 cursor-pointer'
              required
              />
            </div>

            <div className = 'mb-5'>
              <input type = "email" 
              placeholder = 'Email' 
              name = 'email'
              value = {formData.email}
              onChange = {handleInputChange} 
              className = 'border border-solid border-[#026a6e] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md text-[12px] leading-7 cursor-pointer'
              required
              />
            </div>

            <div className = 'mb-5'>
              <input type = "password" 
              placeholder = 'Password' 
              name = 'password' 
              value = {formData.password}
              onChange = {handleInputChange} 
              className = 'border border-solid border-[#026a6e] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md text-[12px] leading-7 cursor-pointer'
              required
              />
            </div>

            <div className = 'mb-5 flex items-center justify-between'>
              <label className = 'text-primaryColor font-bold text-[15px] leading-7'>
                User Role:
                <select
                  name = 'role'
                  className = 'text-headingColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'
                >
                  <option value = 'patient'> Patient </option>
                  <option value = 'doctor'> Doctor </option>
                </select>
              </label>

              <label className = 'text-primaryColor font-bold text-[15px] leading-7'>
                Gender:
                <select
                  name = 'gender'
                  className = 'text-headingColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'
                >
                  <option value = ''> Select </option>
                  <option value = 'male'> Male </option>
                  <option value = 'female'> Female </option>
                  <option value = 'other'> Prefer Not To Say </option>

                </select>
              </label>
            </div>

            <div className = 'mb-5 flex items-center gap-3'>
              <figure className = 'w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
                <img src = {avatar} alt = "" className = 'w-full rounded-full'/>
              </figure>
            </div>
          </form>
      </div>
    </section>
  )
};

export default Signup;