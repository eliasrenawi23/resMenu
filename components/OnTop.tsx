import React from 'react'
import SectionHeading from './SectionHeading'
import { onTop } from '@/lib/data'
import Meal from './Meal'

const OnTop = () => {
    return (
        <section className='flex  flex-col w-full gap-2 h-80'>

            <SectionHeading>On Top</SectionHeading>
            <div className='w-full flex'>
                <div className='flex gap-1 w-full transition-all duration-700 ease-in-out overflow-auto scroll-smooth no-scrollbar'>
                    {onTop.map((meal, index) => (
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

export default OnTop