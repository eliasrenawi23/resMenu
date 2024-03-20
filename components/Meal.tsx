import React from 'react';
import Image from 'next/image';
import { beefBurgers, chickenBurgers } from '@/lib/data';

type MealProps = (typeof beefBurgers)[number] | typeof chickenBurgers[number];;

const Meal: React.FC<MealProps> = ({
    title,
    description,
    tags,
    imageUrl,
    price
}) => {
    return (
        <div className="
            border border-black/5 
            rounded-lg  
            overflow-hidden
            max-w-[30rem] max-h-[15rem] w-96
            flex sm:flex-row-reverse sm:place-items-start
        ">
            <div className="flex flex-col items-center flex-grow p-4">
                <Image
                    src={imageUrl}
                    alt="beef burger"
                    quality={95}
                    width={200}
                    height={200}
                    className="shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
                />
                <h3 className="text-lg font-semibold text-white text-right truncate sm:text-xl md:text-2xl">{price}</h3>
            </div>
            <div className="flex flex-col flex-grow p-4">
                <h3 className="text-2xl font-semibold text-white">{title}</h3>
                <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Meal;
