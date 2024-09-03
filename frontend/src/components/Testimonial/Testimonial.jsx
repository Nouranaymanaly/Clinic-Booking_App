import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper';
import { Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import patientAvatar from '../../assets/images/patient-avatar.png';
import { HiStar } from 'react-icons/hi';

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="Patient Avatar" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                Owen Fletcher
                </h4>
                <div className="flex items-center gap-[2px]">
                    <HiStar className='text-yellowColor w-[18px]'/>
                    <HiStar className='text-yellowColor w-[18px]'/>
                    <HiStar className='text-yellowColor w-[18px]'/>
                    <HiStar className='text-yellowColor w-[18px]'/>
                    <HiStar className='text-yellowColor w-[18px]'/>

                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"The surgery went so smooth and the post-surgery follow-up is exceptional, best service"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="Patient Avatar" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                Ethan Rivers
                </h4>
                <div className="flex items-center gap-[2px]">
                    <HiStar className='text-yellowColor w-[18px]'/>
                    <HiStar className='text-yellowColor w-[18px]'/>
                    <HiStar className='text-yellowColor w-[18px]'/>
                    <HiStar className='text-yellowColor w-[18px]'/>
                    <HiStar className='text-yellowColor w-[18px]'/>

                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"The surgery went so smooth and the post-surgery follow-up is exceptional, best service"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="Patient Avatar" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                Noah Bennett
                </h4>
                <div className="flex items-center gap-[2px]">
                    <HiStar className='text-yellowColor w-[18px]'/>
                    <HiStar className='text-yellowColor w-[18px]'/>
                    <HiStar className='text-yellowColor w-[18px]'/>
                    <HiStar className='text-yellowColor w-[18px]'/>
                    <HiStar className='text-yellowColor w-[18px]'/>

                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"The surgery went so smooth and the post-surgery follow-up is exceptional, best service"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="Patient Avatar" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                Lucas Hunter
                </h4>
                <div className="flex items-center gap-[2px]">
                    <HiStar className='text-yellowColor w-[18px]'/>
                    <HiStar className='text-yellowColor w-[18px]'/>
                    <HiStar className='text-yellowColor w-[18px]'/>
                    <HiStar className='text-yellowColor w-[18px]'/>
                    <HiStar className='text-yellowColor w-[18px]'/>

                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>"The surgery went so smooth and the post-surgery follow-up is exceptional, best service"
            </p>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Testimonial;
