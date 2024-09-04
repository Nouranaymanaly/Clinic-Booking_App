import React from 'react'
import aboutImg from '../../assets/images/about.png'
import { Link } from 'react-router-dom';
import avatarIcon from '../../assets/images/avatar-icon.png'
const About = () => {
  return <section>
    <div className="container">
      <div className="flex justify-between gap-[50] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
        {/* About img */}
        <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
          <img src={aboutImg} alt="" />
          <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%] shadow-panelShadow">
            <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] shadow-panelShadow">
                <div className="w-[60px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[16px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                    consultation
                </div>
                <div className="flex item-center lg:gap-[10px] mt-2 lg:mt-[18px]">
                    <img src={avatarIcon} alt="" />
                    <h4 className="text-[10px] px-[5px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] mt-2 text-headingColor">Dr. Luai Essam</h4>
                </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
        <h2 className='heading'>Our number one consern is our clients satisfaction </h2>
        <p className='text__para'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p className="text__para mt-[30px]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Link to='/clinics'><button className="btn">Book Now</button></Link>
        </div>
        
      </div>
     
    </div>
  </section>
}

export default About