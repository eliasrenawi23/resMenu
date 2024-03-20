import React from 'react'
import Image from 'next/image'

import BurgerCover from "@/public/cover_burger.png";
import Logo from "@/public/resturant_logo.png";

const HeaderPage = () => {
    return (
        <header
            className={
                `w-full
        relative pt-28 
        sm:pt-36
        flex
        items-center 
        justify-center
        bg-cover bg-center bg-no-repeat 
        `}
            style={{ backgroundImage: `url(${BurgerCover.src})` }}
        >

            <Image
                src={Logo}
                width="192"
                height="192"
                quality="95"
                priority={true}
                alt={'logo'}
                className="object-cover shadow-xl"
            />

        </header>

    )
}

export default HeaderPage