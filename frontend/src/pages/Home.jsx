import React from 'react'
import DocImg from '../assets/images/doctor-img.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs'
import About from '../components/About/About'
import Features from '../components/Features/Features'
import ServicesList from '../components/Services/ServicesList'
import ClinicList from '../components/Clinics/ClinicList'

const Home = () => {
  return (
    <>
      <section className="clinic__section pt-[60px] 2xl:h-[800px]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-[60px] items-center justify-between">
            {/* SECTION */}
            <div>
              {/* INTRO */}
              <div className="lg:w-[570px]">
                {/* header */}
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Aiming for a Healthier and Longer Life
                </h1>
                {/* description */}
                <p className='text__para mt-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                {/* booking button */}
                <Link to='/clinics'>
                  <button className='btn mt-6'>Book an Appointment</button>
                </Link>
              </div>

              {/* STATS */}
              <div className="mt-[30px] lg:mt-[50px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                {/* Experience */}
                <div>
                  <h2 className="text-[36px] leading-[46px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">10+</h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className='text__para mt-2'>Years of Experience</p>
                </div>

                {/* Locations */}
                <div>
                  <h2 className="text-[36px] leading-[46px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">2</h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className='text__para mt-2'>Clinic Locations</p>
                </div>

                {/* Surgeries */}
                <div>
                  <h2 className="text-[36px] leading-[46px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">40+</h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className='text__para mt-2'>Surgeries</p>
                </div>
              </div>
            </div>

            {/* IMG */}
            <div className='flex justify-end'>
              <div>
                <img className='w-[80%] lg:w-[60%] scale-[0.9]' src={DocImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOCTOR'S SECTION */}
      <section className="mt-[60px]">
        <div className="container mx-auto">
          <div className='lg:w-[470px] mx-auto text-center'>
            <h2 className='heading text-headingColor'>Providing the Best Surgical Services</h2>
            <p className="text__para mt-4">World-class care for everyone. Our health system offers unmatched, expert health care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {/* Service Cards */}
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon01} alt="" />
              </div>
              <div className='mt-[30px] text-center'>
                <h2 className='text-[26px] leading-9 text-headerColor font-[700]'>Services</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4'>
                  World-class care for everyone. Our health system offers unmatched, expert health care, from the lab to the clinic.
                </p>
                <Link to='/services' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>

            {/* Finging clinic */}
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon02} alt="" />
              </div>
              <div className='mt-[30px] text-center'>
                <h2 className='text-[26px] leading-9 text-headerColor font-[700]'>Find a Clinic</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4'>
                  World-class care for everyone. Our health system offers unmatched, expert health care, from the lab to the clinic.
                </p>
                <Link to='/clinics' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>

            {/* Book */}
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon03} alt="" />
              </div>
              <div className='mt-[30px] text-center'>
                <h2 className='text-[26px] leading-9 text-headerColor font-[700]'>Book Appointment</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4'>
                  World-class care for everyone. Our health system offers unmatched, expert health care, from the lab to the clinic.
                </p>
                <Link to='/clinics' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* DOCTOR'S SECTION END */}

      {/*About section*/}
      <About/>

      {/*SURGICAL SERVICES SECTION*/}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our medical services</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health System offers unmatched,expert health care.
            </p>
          </div>
          <ServicesList/>
        </div>
      </section>
      {/*SURGICAL SERVICES SECTION END*/}

      {/*FEATURES SECTION*/}
      <Features/>

      {/*CLINICS SECTION*/}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Clinics</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health System offers unmatched,expert health care.
            </p>
          </div>
          <ClinicList/>
        </div>
      </section>
      {/*CLINICS SECTION END*/}

    </>
  )
}

export default Home
