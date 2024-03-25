import React from 'react'
import SectionHeading from './SectionHeading'
import { chickenBurgers } from '@/lib/data'
import Slider from './Slider'

const ChickenBurger = () => {
    return (
        <section className='w-screen border-2 border-solid border-gray-300 box-border p-10'>
            <SectionHeading>Chicken Burgers</SectionHeading>
            <Slider meals={chickenBurgers} />
        </section>
    )
}

export default ChickenBurger