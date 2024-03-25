"use client"
import { beefBurgers, chickenBurgers } from '@/lib/data';
import React, { useEffect, useState } from 'react'
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import Meal from './Meal';



type Meals = typeof beefBurgers | typeof chickenBurgers;

type SliderProps = {
    meals: Meals;
}

const Slider: React.FC<SliderProps> = ({ meals }) => {

    const [isSmallScreen, setIsSmallScreen] = useState<Boolean>(window.innerWidth < 768);

    useEffect(() => {

        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Swiper
            dir="rtl"
            spaceBetween={10}
            slidesPerView={isSmallScreen ? 1 : 3}
            grabCursor={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: true,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-screen h-96 md:h-auto"
        >
            {meals.map((item, index) => (
                <SwiperSlide key={index} className='text-center text-lg bg-transparent flex justify-center items-center'>
                    <Meal {...item} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Slider