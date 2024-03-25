import React from 'react'
import SectionHeading from './SectionHeading'
import { beefBurgers, onTop } from '@/lib/data'
import Slider from './Slider'

const BeefBurgers = () => {

    return (
        <section className='w-screen border-2 border-solid border-gray-300 box-border p-10'>
            <SectionHeading>Beef Burgers</SectionHeading>
            <Slider meals={beefBurgers} />
        </section>

    )
}

export default BeefBurgers
