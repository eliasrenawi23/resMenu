"use client";

import { useLanguage } from '@/context/ServerItlProvider';
import React from 'react'
import { GrLanguage } from "react-icons/gr";



const ChangeLang = () => {
    const { language, setLanguage } = useLanguage();

    const handleChangeLanguage = () => {
        setLanguage(language === 'he' ? 'ar' : 'he');
    };

    return (
        <button
            className="fixed top-5  left-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
            onClick={handleChangeLanguage}
        >
            <GrLanguage />
        </button>
    )
}

export default ChangeLang