import React from 'react'
import SectionHeading from './SectionHeading'
import Meal from './Meal'
import { chickenBurgers } from '@/lib/data'

const ChickenBurger = () => {
    return (
        <section>
            <SectionHeading>Chicken Burgers</SectionHeading>
            <div className='flex flex-wrap justify-center gap-2 text-lg text-gray-800 flex-row-reverse'>
                {chickenBurgers.map((chickenBurger, index) => (
                    <React.Fragment key={index}>
                        <Meal {...chickenBurger} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}

export default ChickenBurger