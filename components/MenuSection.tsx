"use client";
import React, { useState } from 'react';
import ShowAllButton from './ShowAllButton';
import SectionHeading from './SectionHeading';
import Meal from './Meal';
import { sections } from '@/lib/data/orgnazedData';
import MuiDrawer from './MuiDrawer';

interface DrowerProps {
    title: typeof sections[number]['meals'][number]['title'];
    description: typeof sections[number]['meals'][number]['description']
    imageUrl: typeof sections[number]['meals'][number]['imageUrl']
    price: typeof sections[number]['meals'][number]['price'];
}

type MealProps = typeof sections[number]['meals'];
type SectionProps = {
    heading: string;
    meals: MealProps;
};

const MenuSection: React.FC<SectionProps> = ({ heading, meals }) => {
    const [showAll, setShowAll] = useState<boolean>(false);
    const [drawerProps, setDrawerProps] = useState<DrowerProps | undefined>(undefined);
    const [open, setOpen] = useState<boolean>(false);


    const onClose = () => {
        setOpen(false)
    }


    return (
        <section className='flex flex-col w-full gap-2 min-h-80'>
            <div className="flex items-center justify-between ml-4 mr-4">
                <ShowAllButton showAll={showAll} setShowAll={setShowAll} />
                <SectionHeading>{heading}</SectionHeading>
            </div>
            <div className='w-full flex'>
                <div className={showAll ? 'flex w-full transition-all duration-700 ease-in-out flex-wrap justify-evenly items-center gap-2 p-2' :
                    'flex w-full transition-all duration-700 ease-in-out overflow-auto scroll-smooth no-scrollbar gap-1 '}>
                    {meals.map((meal, index) => (
                        <React.Fragment key={index}>
                            <Meal {...meal} showAll={showAll} setDrawerProps={setDrawerProps} setOpen={setOpen} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <MuiDrawer
                onClose={onClose}
                open={open}
                data={drawerProps}
            />

        </section>
    );
};

export default MenuSection;
