import React, {useState} from 'react'
import clinicImg from '../../assets/images/clinic-img01.png'
import starImg from '../../assets/images/Star.png'
import ClinicLocation from './ClinicLocation';
import Feedback from './Feedback';
import SidePanel from './SidePanel';
const ClinicDetails = () => {
  const [tab, setTab] = useState ('location')
  return <section> 
    <div className = 'max-w-[1170px] px-5 mx-auto'> 
      <div className = 'grid md:grid-cols-3 gap-[50px]'> 
        <div className = 'md:col-span-2'>
          <div className = 'flex items-center gap-5'>  
            
            <figure className = 'max-w-[350px] max-h-[350px]'>
              <img src = {clinicImg} alt = "" className = 'w-full'/> 
            </figure>

            <div className = 'lg:w-[500px] md:w-[500px]'>
            <span className = 'bg-[#c9f0f2] text-[#026a6e] py-1 px-5 lg:py-1 lg:px-5 text-[12px] lg:text-[12px] lg:leading-10 font-semibold rounded'> Clinical Hub </span>
            <h3 className = 'text-headingColor text-[20px] leading-10 mt-3 font-bold'> Cairo Clinic </h3>
              <div className = 'flex items-center gap-[6px]'/>
              <span className = 'flex items-center gap-[6px] text-[14px] leading-10 lg:text-[16px] lg:leading-10 font-semibold text-headingColor'> 
                <img src = {starImg} alt = ""/> 4.8
              </span>
              <span className = 'text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor'> (272) </span>
            </div>

            <p className = 'text__para text-[14px] text-justify leading-10 md:text-[14px] lg:max-w-[250px]'> Located in the heart of Cairo, Dr. Luai Essam delivers premium, patient-specific healthcare, emphasizing thorough and expert medical care. </p>
          </div>

          <div className = 'mt-[50px] border-b border-solid border-[#026a6e]'> 
            <button 
            onClick = {() => setTab ('location')}
            className = {`${tab === 'location' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}> Location </button>
            
            
            <button 
              onClick = {() => setTab ('feedback')}
              className = {`${tab === 'feedback' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}> Feedback </button>
          </div>

          <div className = 'mt-[50px]'> 
          {
            tab === 'location' && <ClinicLocation/>
          }

          {
            tab === 'feedback' && <Feedback/>
          }
          </div>
        </div>

        <div> 
          <SidePanel />
        </div>
      </div>
    </div>
  </section>
};

export default ClinicDetails;