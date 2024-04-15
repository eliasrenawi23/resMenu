import React from 'react'
import Image from 'next/image'

import BurgerCover from "@/public/coverCesar.png";
import Logo from "@/public/cesarburgerlogo.png";

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
        bg-cover bg-center bg-no-repeat  rounded-lg shadow 
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
                className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />

        </header>

    )
}

export default HeaderPage