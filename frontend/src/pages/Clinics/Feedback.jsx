import React from 'react'
import { useState } from 'react';
import avatar from '../../assets/images/patient-avatar.png';
import { formatDate } from '../../utilities/formatDate';
import { AiFillStar } from 'react-icons/ai';
import FeedbackForm from './FeedbackForm';

const Feedback = () => {
    
    const [showFeedbackForm, setShowFeedbackForm] = useState (false)

    return (
        <div> 
            <div className = 'mb-[50px]'>
                <h4 className = 'text-[17px] leading-[30px] font-bold text-headingColor'> All Reviews (272) </h4>
                <div className = "flex justify-between gap-10 mb-[30px]">
                    <div className = 'flex gap-5'>
                        <figure className = 'w-10 h-10 rounded-full mt-2'>
                            <img className = 'w-full' src = {avatar} alt = ""/>
                        </figure>

                        <div> 
                            <h5 className = 'text-[14px] leading-10 text-[#40968c] font-bold'> Mohamed Darwish </h5>
                            <p className = 'text-[12px] leading-6 text-[#40968c]'> 
                                {formatDate ('06-15-2024')}
                            </p>
                            
                            <p className = 'text__para mt-3 leading-6 font-medium text-[12px] text-justify'>
                            The clinic was comfortable, and the staff were hospitable and professional. I left feeling confident and well cared for. Highly recommend!
                            </p>
                        </div>
                    </div>

                    <div className = 'flex gap-1'>
                        {[...Array(5).keys()].map((_, index) => (
                            <AiFillStar key = {index} color = "#feb60d" />
                        ))}
                    </div>
                </div>
            </div>

            {!showFeedbackForm && <div className = 'text-center'>
                <button className = 'btn' 
                style = {{padding: '8px 12px', fontSize: '14px', borderRadius: '4px'}}
                onClick = {() => setShowFeedbackForm (true)}> 
                Leave Feedback 
                </button>
            </div>
            }

            {showFeedbackForm && <FeedbackForm />}
        </div>
    )
};

export default Feedback;