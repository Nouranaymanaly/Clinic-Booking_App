import React from 'react'
import { Link } from 'react-router-dom';
import featureImg from '../../assets/images/feature-img.png'

const Features = () => {
  return (
    <section>
    <div className="container">
      <div className="flex items-center justify-between flex-col lg:flex-row" >
        {/*feature content*/}
        <div className="xl:w-[670px]">
          <h2 className="heading">
            Website Features <br/> 
          </h2>
          <ul className="pl-4">
            <li className="text__para" >
              1. Schedule the appointment directly.
            </li>
            <li className="text__para">
              2. Contact the clinic directly.
            </li>
            <li className="text__para">
              3. Use the online booking tool to select an appointment time.
            </li>
          </ul>
          <Link to="/clinics">
          <button className='btn'>Book Online Now </button>
          </Link>
        </div>
        <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
            <img src={featureImg} className="w-3/4" alt="" />

        </div>
      </div>
    </div>
  </section>
  )
}

export default Features