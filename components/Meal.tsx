import React from 'react';
import Image from 'next/image';
import { beefBurgers, chickenBurgers, onTop, salads, popular } from '@/lib/data';

type MealProps =
    ((typeof beefBurgers)[number] |
        (typeof chickenBurgers)[number] |
        (typeof onTop)[number] |
        (typeof salads)[number] |
        (typeof popular)[number]) & { showAll?: boolean };

const Meal: React.FC<MealProps> = ({
    title,
    description,
    tags,
    imageUrl,
    price,
    showAll
}) => {
    return (
        <div className='max-w-[200px] min-w-[180px] flex-1'>
            <button
                type='button'
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:r0:"
                data-state="closed"
                className='w-full'
            >
                <div className={showAll ? 'class="transition-transform duration-700 ease-in-out transform scale-100 h-[250px] w-full overflow-hidden flex flex-col justify-between relative cursor-pointer bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700' :
                    'transition-transform duration-700 ease-in-out transform scale-95 hover:scale-100 active:scale-100 focus:scale-100 h-[250px] w-full overflow-hidden flex flex-col justify-between relative cursor-pointer bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'}>
                    <div className='h-[60%] w-full relative'>
                        <div className='h-full w-full absolute inset-0'>
                            <Image
                                src={imageUrl}
                                loading='lazy'
                                decoding='async'
                                alt="meal"
                                sizes='100%'
                                style={{ height: '100%', width: '100%', objectFit: 'cover', color: 'transparent' }}
                                className="data-[loaded=false]:animate-pulse data-[loaded=false]:dark:bg-gray-400"
                            />
                        </div>
                    </div>
                    <div className='max-h-[40%] w-full overflow-hidden'>
                        <div className='text-sm font-bold tracking-tight text-gray-900 dark:text-white w-full mt-[5px]'>{title}</div>
                        <div className='text-xs text-gray-600 font-normal dark:text-gray-400 mt-[5px] overflow-hidden whitespace-nowrap'>{description}</div>
                        <div className='font-normal mt-3 text-gray-700 dark:text-gray-400'>{price}</div>
                    </div>
                </div>
            </button>
        </div>
    );
};

export default Meal;
