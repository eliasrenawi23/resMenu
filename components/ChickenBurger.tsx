import React from 'react'
import SectionHeading from './SectionHeading'
import Meal from './Meal'
import { chickenBurgers } from '@/lib/data'
import Slider from './Slider'

const ChickenBurger = () => {
    return (
        <section>
            <SectionHeading>Chicken Burgers</SectionHeading>
            <Slider meals={chickenBurgers} />
        </section>
    )
}

export default ChickenBurger