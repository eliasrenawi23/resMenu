"use client";
import React, { useState } from 'react'
import SectionHeading from './SectionHeading'
import { beefBurgers, onTop } from '@/lib/data'
import Meal from './Meal'

const BeefBurgers = () => {
    const [showAll, setShowAll] = useState<boolean | undefined>(false);
    return (
        <section className='flex  flex-col w-full gap-2 min-h-80'>

            <div className="flex items-center justify-between">
                <button onClick={() => setShowAll(!showAll)}>{showAll ? 'Hide' : 'Show All'}</button>
                <SectionHeading>Beef Burgers</SectionHeading>
            </div>
            <div className='w-full flex'>
                <div className={showAll ? 'flex w-full transition-all duration-700 ease-in-out flex-wrap justify-evenly items-center gap-2 p-2' :
                    'flex w-full transition-all duration-700 ease-in-out overflow-auto scroll-smooth no-scrollbar gap-1 '}>
                    {beefBurgers.map((meal, index) => (
                        <React.Fragment key={index}>
                            <Meal {...meal} showAll={showAll} />
                        </React.Fragment>
                    ))}

                </div>
            </div>
        </section>

    )
}

export default BeefBurgers
