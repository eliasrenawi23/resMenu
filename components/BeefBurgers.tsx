import React from 'react'
import SectionHeading from './SectionHeading'
import { beefBurgers, onTop } from '@/lib/data'
import TestComponent from './TestComponent'
import Meal from './Meal'

const BeefBurgers = () => {

    return (
        <section className='flex  flex-col w-full gap-2 h-80'>

            <SectionHeading>Beef Burgers</SectionHeading>
            <div className='w-full flex'>
                <div className='flex gap-1 w-full transition-all duration-700 ease-in-out overflow-auto scroll-smooth no-scrollbar'>
                    {beefBurgers.map((meal, index) => (
                        <React.Fragment key={index}>
                            <Meal {...meal} />
                            {/* <TestComponent{...meal} /> */}
                        </React.Fragment>
                    ))}

                </div>
            </div>
        </section>

    )
}

export default BeefBurgers
