import React from 'react'
import SectionHeading from './SectionHeading'
import Slider from './Slider'
import { onTop } from '@/lib/data'

const OnTop = () => {
    return (
        <section className='w-screen border-2 border-solid border-gray-300 box-border p-10'>
            <SectionHeading>On Top</SectionHeading>
            <Slider meals={onTop} />
        </section>
    )
}

export default OnTop