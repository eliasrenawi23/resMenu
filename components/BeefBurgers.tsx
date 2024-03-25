import React from 'react'
import SectionHeading from './SectionHeading'
import { beefBurgers } from '@/lib/data'
import Meal from './Meal'

const BeefBurgers = () => {
    return (
        <section>
            <SectionHeading>Beef Burgers</SectionHeading>
            <div className='flex flex-wrap justify-center gap-2 text-lg text-gray-800 flex-row-reverse' >
                {beefBurgers.map((beefburger, index) => (
                    <React.Fragment key={index}>
                        <Meal {...beefburger} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}

export default BeefBurgers
