import React from 'react'
import SectionHeading from './SectionHeading'
import Slider from './Slider'
import { popular } from '@/lib/data'

const Popular = () => {
    return (
        <section className='w-screen border-2 border-solid border-gray-300 box-border p-10'>
            <SectionHeading>Popular</SectionHeading>
            <Slider meals={popular} />
        </section>
    )
}

export default Popular