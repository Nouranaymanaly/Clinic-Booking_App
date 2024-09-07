import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { clinics } from '../../assets/data/clinics'; // Import clinic data
import ClinicLocation from './ClinicLocation';
import Feedback from './Feedback';
import SidePanel from './SidePanel';
import starImg from '../../assets/images/Star.png'; // Star image

const ClinicDetails = () => {
  const [tab, setTab] = useState('location');
  const location = useLocation();

  // Extract clinic ID from the URL path (e.g., "/clinics/01")
  const clinicId = location.pathname.split('/').pop();

  // Find the clinic data based on the ID
  const clinic = clinics.find((clinic) => clinic.id === clinicId);

  // If the clinic is not found, display a 404 message
  if (!clinic) {
    return <p>ERR: 404 Not Found</p>;
  }

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="md:flex items-center gap-5">
              <figure className="max-w-[350px] max-h-[350px]">
                <img src={clinic.photo} alt={clinic.name} className="w-full" />
              </figure>

              <div className="py-5 md:py-0 lg:w-[500px] md:w-[500px]">
                <span className="bg-[#c9f0f2] text-[#026a6e] py-1 px-5 text-[12px] lg:text-[12px] lg:leading-10 font-semibold rounded">
                  Clinical Hub
                </span>
                <div className="flex md:block">
                  <h3 className="text-headingColor text-[20px] leading-10 mt-3 font-bold">
                    {clinic.name}
                  </h3>
                  <div className="px-5 md:px-0 flex items-center gap-[6px]" />
                  <span className="flex items-center gap-[6px] text-[14px] leading-10 lg:text-[16px] lg:leading-10 font-semibold text-headingColor">
                    <img src={starImg} alt="star rating" /> {clinic.avgRating}
                  </span>
                  <span className="text-[14px] py-5 md:py-0 leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                    ({clinic.totalRating})
                  </span>
                </div>
              </div>

              <p className="text__para text-[14px] text-justify leading-10 md:text-[14px] lg:max-w-[250px]">
                {clinic.description}
              </p>
            </div>

            <div className="mt-[50px] border-b border-solid border-[#026a6e]">
              <button
                onClick={() => setTab('location')}
                className={`${tab === 'location' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                Location
              </button>

              <button
                onClick={() => setTab('feedback')}
                className={`${tab === 'feedback' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                Feedback
              </button>
            </div>

            <div className="mt-[50px]">
              {tab === 'location' && <ClinicLocation />}
              {tab === 'feedback' && <Feedback />}
            </div>
          </div>

          <div>
            <SidePanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicDetails;
