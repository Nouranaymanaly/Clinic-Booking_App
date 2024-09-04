import React from 'react'

const SidePanel = () => {
  return (
    <div className = ' shadow-panelShadow p-3 lg:p-5 rounded-md mt-7'>
        <div className = 'flex items-center justify-between'>
            <p className = 'text_para text-primaryColor mt-0 font-semibold text-[15px]'> Price </p>
            <span className = 'text-[14px] leading-7 lg:text-[14px] lg:leading-8 text-primaryColor'>
                Starting From 400 EGP
            </span>
        </div>

        <div className = 'mt-[30px]'>
            <p className='text_para text-primaryColor mt-0 font-semibold text-[15px]'> 
                Available Time Slots:
            </p>
        
            <ul className = 'mt-3'>
                <li className = 'flex items-center justify-between mb-2'>
                    <p className = 'text-[14px] leading-6 text-primaryColor'>
                        Sun
                    </p>

                    <p className = 'text-[14px] leading-6 text-primaryColor'>
                        5:00 PM - 8:00 PM
                    </p>
                </li>

                <li className = 'flex items-center justify-between mb-2'>
                    <p className = 'text-[14px] leading-6 text-primaryColor'>
                        Mon
                    </p>

                    <p className = 'text-[14px] leading-6 text-primaryColor'>
                        2:00 PM - 5:00 PM
                    </p>
                </li>

                <li className = 'flex items-center justify-between mb-2'>
                    <p className = 'text-[14px] leading-6 text-primaryColor'>
                        Tues
                    </p>

                    <p className = 'text-[14px] leading-6 text-primaryColor'>
                        10:00 AM - 1:00 PM
                    </p>
                </li>
            </ul>
        </div>

        <button className = 'btn px-2 w-full rounded-md'
            style = {{padding: '8px 12px', fontSize: '14px', borderRadius: '4px'}}> 
            Book Appointment 
        </button>
    </div>
  );

};

export default SidePanel;