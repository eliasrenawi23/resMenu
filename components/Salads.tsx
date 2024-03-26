import React from 'react'
import SectionHeading from './SectionHeading'
import { salads } from '@/lib/data'
import Meal from './Meal'

const Salads = () => {
    return (
        <section className='flex  flex-col w-full gap-2 h-80'>

            <SectionHeading>Salads</SectionHeading>
            <div className='w-full flex'>
                <div className='flex gap-1 w-full transition-all duration-700 ease-in-out overflow-auto scroll-smooth no-scrollbar'>
                    {salads.map((meal, index) => (
                        <React.Fragment key={index}>
                            <Meal {...meal} />
                        </React.Fragment>
                    ))}

                </div>
            </div>
        </section>

    )
}

export default Salads