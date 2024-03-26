import React from 'react'
import SectionHeading from './SectionHeading'
import { chickenBurgers } from '@/lib/data'
import Meal from './Meal'

const ChickenBurger = () => {
    return (
        <section className='flex  flex-col w-full gap-2 h-80'>
            <SectionHeading>Chicken Burgers</SectionHeading>
            <div className='w-full flex'>
                <div className='flex gap-1 w-full transition-all duration-700 ease-in-out overflow-auto scroll-smooth no-scrollbar'>
                    {chickenBurgers.map((meal, index) => (
                        <React.Fragment key={index}>
                            <Meal {...meal} />
                        </React.Fragment>
                    ))}

                </div>
            </div>
        </section>

    )
}

export default ChickenBurger