import React from 'react'
import SectionHeading from './SectionHeading'
import { beefBurgers } from '@/lib/data'
import Meal from './Meal'
import Slider from './Slider'

const BeefBurgers = () => {


    return (
        <section>
            <SectionHeading>Beef Burgers</SectionHeading>
            <Slider meals={beefBurgers} />
        </section>
    )
}

export default BeefBurgers
