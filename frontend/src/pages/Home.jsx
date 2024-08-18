import React from 'react'
import DocImg from '../assets/images/doctor-img.png'
import DocImg2 from '../assets/images/doctor-img.png'
import DocImg3 from '../assets/images/doctor-img.png'

const Home = () => {
  return (
    <>
    <>
<section className="clinic__section pt-[60p×] 2xl:h-[800px]">
  <div className="container">
    <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
      {/* SECTION */}
      <div>

        {/* INTRO */}
        <div className="lg:w-[570px]">
          {/* header */}
          <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md: text-[60p×] md:leading-[70px]"> Aiming for healthier and Longer Life. </h1>
          {/* discription */}
          <p className='text__para'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </p>
          {/* booking button */}
          <button className='btn'> Book an Appointment</button>
        </div>
        
        {/* STATS */}
        <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">

          {/* Experience */}
          <div>
            <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">10+</ h2>
            <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
            <p className='text__para'> Years of Experience</p>
          </div>

          {/* Locations */}
          <div>
            <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">2</ h2>
            <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
            <p className='text__para'> Clinic Locations</p>
          </div>

          {/* Surgeries */}
          <div>
            <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">40+</ h2>
            <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
            <p className='text__para'> Surgeries</p>
          </div>

        </div>

      </div>
      {/* IMG */}
      <div className='flex gap-[30px] justify-end'>
        <div>
          <img className='w-full' src={DocImg} alt="" />
        </div>
      </div>

    </div>
  </div>
</section>

<section>
  <div className="container">
    <div className='lg:w-[470px] mx-auto'>
      <h2 className = 'heading text-center text-headingcolor'> providing the best surgical services</h2>

    </div>


  </div>
</section>
    </>
    </>
  )
}

export default Home