import React from 'react'
import DocImg from '../assets/images/doctor-img.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import faqImg from '../assets/images/faq-img.png'
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs'
import About from '../components/About/About'
import Features from '../components/Features/Features'
import ServicesList from '../components/Services/ServicesList'
import ClinicList from '../components/Clinics/ClinicList'
import FaqList from '../components/Faq/FaqList'
import Testimonial from '../components/Testimonial/Testimonial'

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
                  Your Health, Our Priority
                </h1>
                {/* description */}
                <p className='text__para mt-4 text-justify'>
                  We are committed to helping you achieve a healthier, longer life with expert surgical care and personalized attention. </p>
                {/* booking button */}
                <Link to='/clinics'>          
                  <button className='btn mt-6'> Book Appointment</button>
                </Link>
              </div>

              {/* STATS */}
              <div className="mt-[30px] lg:mt-[50px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                {/* Experience */}
                <div>
                  <h2 className="text-[36px] leading-[46px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">10+</h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[5px]"></span>
                  <p className='text__para mt-2'>Years of Experience</p>
                </div>

                {/* Locations */}
                <div>
                  <h2 className="text-[36px] leading-[46px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">3</h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[5px]"></span>
                  <p className='text__para mt-2'>Clinic Locations</p>
                </div>

                {/* Surgeries */}
                <div>
                  <h2 className="text-[36px] leading-[46px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">40+</h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[5px]"></span>
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
            <h2 className='heading text-headingColor'>Excellence In Surgery </h2>
            <p className="text__para mt-4"> Delivering top-tier surgical solutions with precision and care to ensure the best possible outcomes for every patient.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {/* Service Cards */}
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon01} alt=""/>
              </div>
              <div className='mt-[30px] text-center'>
                <h2 className='text-[26px] leading-9 text-headerColor font-[700]'>Services</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4'>
                Explore our wide range of specialized surgical services tailored to meet your health needs.
                </p>
                <Link to='/services' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>

            {/* Finding clinic */}
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon02} alt="" width = '148px'/>
              </div>
              <div className='mt-[30px] text-center'>
                <h2 className='text-[26px] leading-9 text-headerColor font-[700]'>Find a Clinic</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4'>
                  Locate the nearest clinic to your location and get directions easily.
                </p>
                <Link to='/clinics' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>

            {/* Book */}
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon03} alt=""/>
              </div>
              <div className='mt-[30px] text-center'>
                <h2 className='text-[26px] leading-9 text-headerColor font-[700]'>Book Appointment</h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4'>
                  Schedule your appointment online with just a few clicks for a hassle-free experience.
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
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text__para text-center">
              Discover our wide array of medical services, tailored to meet your needs with expert care and advanced treatments for optimal health and recovery.
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
              With three convenient locations in Cairo, Giza, and Old Cairo, we are committed to providing accessible, high-quality care close to you.
            </p>
          </div>
          <ClinicList/>
        </div>
      </section>
      {/*CLINICS SECTION END*/}

      {/*FAQ SECTION*/}
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-0 ">
          <div className="w-1/2 hidden md:block">
            <img src={faqImg} alt="" />
          </div>
          <div className="w-full md:w-1/2">
          <h2 className="heading"> FAQ </h2>
          <FaqList/>
          </div>
        </div>
      </div>
      {/*FAQ SECTION END*/}

      {/*TESTIMONIAL*/}
      <section>
      <div className="container">
      <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Patient Feedback</h2>
            <p className="text__para text-center">
              Hear from our patients about their experiences with our care. Your feedback helps us continue to improve and deliver the best surgical services possible.            </p>
          </div>
          <Testimonial/>
      </div>
      </section>
      
      {/*TESTIMONIAL END*/}



    </>
  )
}

export default Home
