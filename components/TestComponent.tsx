"use client"

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { beefBurgers } from '@/lib/data'
import Image from 'next/image';

const imgs = [
    "https://th.bing.com/th/id/R.1b5d93fcc52e20a5b0ed79250c8ab387?rik=nx5Fpgea9g6RMQ&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f02%2fnow-i-am-free.jpg&ehk=SsbAH1k3s%2fsYdA90AzEWYXxbMQPtzPRG6B%2b0NB8JduA%3d&risl=1&pid=ImgRaw&r=0",
    "https://www.pixelstalk.net/wp-content/uploads/2016/07/Nature-1080p-HD-Wallpaper-Free.jpg",
    "https://th.bing.com/th/id/OIP.k7J_hD2Q0ppPtQ82MGy7xQAAAA?w=474&h=296&rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.ikx3y1CTVMx8iuxbfY3bBQAAAA?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.jDFUehMSaVrNery6LtQaawHaEo?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/R.1b5d93fcc52e20a5b0ed79250c8ab387?rik=nx5Fpgea9g6RMQ&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f02%2fnow-i-am-free.jpg&ehk=SsbAH1k3s%2fsYdA90AzEWYXxbMQPtzPRG6B%2b0NB8JduA%3d&risl=1&pid=ImgRaw&r=0",
    "https://www.pixelstalk.net/wp-content/uploads/2016/07/Nature-1080p-HD-Wallpaper-Free.jpg",
    "https://th.bing.com/th/id/OIP.k7J_hD2Q0ppPtQ82MGy7xQAAAA?w=474&h=296&rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.ikx3y1CTVMx8iuxbfY3bBQAAAA?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.jDFUehMSaVrNery6LtQaawHaEo?rs=1&pid=ImgDetMain",
];


const TestComponent = () => {

    const [isSmallScreen, setIsSmallScreen] = useState<Boolean>(false);

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
            className="w-full h-96 md:h-auto"
        >
            {beefBurgers.map((item, idx) => (
                <SwiperSlide key={idx} className='text-center text-lg bg-transparent flex justify-center items-center'>
                    <div className="
            border border-black/5 
            rounded-lg  
            overflow-hidden
            max-w-[30rem] max-h-[15rem] w-96
            flex sm:flex-row-reverse sm:place-items-start
        ">
                        <div className="flex flex-col items-center flex-grow p-4">
                            <Image
                                src={item.imageUrl}
                                alt="beef burger"
                                quality={95}
                                width={200}
                                height={200}
                                className="shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
                            />
                            <h3 className="text-lg font-semibold text-white text-right truncate sm:text-xl md:text-2xl">{item.price}</h3>
                        </div>
                        <div className="flex flex-col flex-grow p-4">
                            <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TestComponent;
