import React from 'react'
import SectionHeading from './SectionHeading'
import Slider from './Slider'
import { salads } from '@/lib/data'

const Salads = () => {
    return (
        <section className='w-screen border-2 border-solid border-gray-300 box-border p-10'>
            <SectionHeading>Salads</SectionHeading>
            <Slider meals={salads} />
        </section>
    )
}

export default Salads