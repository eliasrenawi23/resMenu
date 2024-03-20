import React from 'react';
import Image from 'next/image';
import { beefBurgers } from '@/lib/data';

type MealProps = (typeof beefBurgers)[number];

const Meal: React.FC<MealProps> = ({
    title,
    description,
    tags,
    imageUrl,
}) => {
    return (
        <div className="border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[10rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
            <div className="relative flex sm:flex-row-reverse sm:place-items-start">
                <Image
                    src={imageUrl}
                    alt="beef burger"
                    quality={95}
                    width={150}
                    height={150}
                    className="shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
                />
                <div className="flex flex-col flex-grow p-4">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                        {description}
                    </p>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        {tags.map((tag, index) => (
                            <li
                                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                                key={index}
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Meal;
