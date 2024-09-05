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
              <img src={patientAvatar} alt="Patient Avatar" width = '40px'/>
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
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400] text-justify'> Dr. Luai and his team were incredibly professional and caring. The entire process was smooth, and I felt well-supported from start to finish.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="Patient Avatar" width = '40px' />
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
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400] text-justify'> I was nervous about surgery, but the staff made me feel comfortable and informed every step of the way. I’m grateful for the excellent care I received.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="Patient Avatar" width = '40px' />
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
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400] text-justify'> The clinic was clean, and the booking process was simple. I highly recommend Dr. Luai for anyone seeking skilled surgical services!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="Patient Avatar" width = '40px' />
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
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400] text-justify'> Exceptional care and attention throughout my treatment. The team was supportive and made sure all my questions were answered. Highly recommend!
            </p>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Testimonial;
