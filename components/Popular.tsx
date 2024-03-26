import React from 'react'
import SectionHeading from './SectionHeading'
import { popular } from '@/lib/data'
import Meal from './Meal'

const Popular = () => {
    return (
        <section className='flex  flex-col w-full gap-2 h-80'>

            <SectionHeading>Popular</SectionHeading>
            <div className='w-full flex'>
                <div className='flex gap-1 w-full transition-all duration-700 ease-in-out overflow-auto scroll-smooth no-scrollbar'>
                    {popular.map((meal, index) => (
                        <React.Fragment key={index}>
                            <Meal {...meal} />
                        </React.Fragment>
                    ))}

                </div>
            </div>
        </section>

    )
}

export default Popular