"use client";

import React, { useState } from 'react'
import ShowAllButton from './ShowAllButton';
import SectionHeading from './SectionHeading';
import Meal from './Meal';
import { sections } from '@/lib/data/orgnazedData';

type SectionProps = {
    heading: string;
    meals: typeof sections[number]['meals'];
};

const MenuSection: React.FC<SectionProps> = ({ heading, meals }) => {
    const [showAll, setShowAll] = useState<boolean>(false);
    return (
        <section className='flex  flex-col w-full gap-2 min-h-80'>

            <div className="flex items-center justify-between ml-4 mr-4">
                <ShowAllButton showAll={showAll} setShowAll={setShowAll} />
                <SectionHeading>{heading}</SectionHeading>
            </div>
            <div className='w-full flex'>
                <div className={showAll ? 'flex w-full transition-all duration-700 ease-in-out flex-wrap justify-evenly items-center gap-2 p-2' :
                    'flex w-full transition-all duration-700 ease-in-out overflow-auto scroll-smooth no-scrollbar gap-1 '}>
                    {meals.map((meal, index) => (
                        <React.Fragment key={index}>
                            <Meal {...meal} showAll={showAll} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default MenuSection