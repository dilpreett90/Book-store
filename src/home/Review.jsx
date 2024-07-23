import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaStar} from "react-icons/fa6"
import { Avatar } from "flowbite-react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import proPic from "../assets/banner-books/profile.jpg"

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading:snug'>Our Customers</h2>

      <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>
                    This book was a wonderful surprise! The plot was engaging and kept me hooked from the first chapter. 
                    The characters felt real and relatable, and the writing style was smooth and enjoyable. 
                    I loved the unexpected twists and the heartfelt moments throughout.
                     Highly recommend for a quick and delightful read!
                    </p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 h-10 mb-4 rounded-full' />
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, Reader's Company</p>
                </div>

            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>
                    This book was a wonderful surprise! The plot was engaging and kept me hooked from the first chapter. 
                    The characters felt real and relatable, and the writing style was smooth and enjoyable. 
                    I loved the unexpected twists and the heartfelt moments throughout.
                     Highly recommend for a quick and delightful read!
                    </p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 h-10 mb-4 rounded-full' />
                    <h5 className='text-lg font-medium'>Akash Sharma</h5>
                    <p className='text-base'>CEO, Developer's Community</p>
                </div>

            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>
                    This book was a wonderful surprise! The plot was engaging and kept me hooked from the first chapter. 
                    The characters felt real and relatable, and the writing style was smooth and enjoyable. 
                    I loved the unexpected twists and the heartfelt moments throughout.
                     Highly recommend for a quick and delightful read!
                    </p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 h-10 mb-4 rounded-full' />
                    <h5 className='text-lg font-medium'>Harsheet Sharma</h5>
                    <p className='text-base'>CEO, Content Writers</p>
                </div>

            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>
                    This book was a wonderful surprise! The plot was engaging and kept me hooked from the first chapter. 
                    The characters felt real and relatable, and the writing style was smooth and enjoyable. 
                    I loved the unexpected twists and the heartfelt moments throughout.
                     Highly recommend for a quick and delightful read!
                    </p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 h-10 mb-4 rounded-full' />
                    <h5 className='text-lg font-medium'>Dilpreet kaur</h5>
                    <p className='text-base'>CEO, Transcurators</p>
                </div>

            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>
                    This book was a wonderful surprise! The plot was engaging and kept me hooked from the first chapter. 
                    The characters felt real and relatable, and the writing style was smooth and enjoyable. 
                    I loved the unexpected twists and the heartfelt moments throughout.
                     Highly recommend for a quick and delightful read!
                    </p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 h-10 mb-4 rounded-full' />
                    <h5 className='text-lg font-medium'>Robert Haul</h5>
                    <p className='text-base'>CEO,Learner's Company</p>
                </div>

            </div>
        </SwiperSlide>
        
      </Swiper>
      </div>
    </div>
  )
}

export default Review
