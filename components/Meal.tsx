import React from 'react';
import Image from 'next/image';
import { sections } from '@/lib/data/orgnazedData';
import { useIntl } from 'react-intl';
import MuiDrawer from './MuiDrawer';



type MealProps = typeof sections[number]['meals'][number] & { showAll?: boolean };

const Meal: React.FC<MealProps> = ({
    title,
    description,
    imageUrl,
    price,
    showAll
}) => {
    const [open, setOpen] = React.useState(false);

    const intl = useIntl();

    return (
        <div className='max-w-[200px] min-w-[180px] flex-1'>
            <button
                type='button'
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:r0:"
                data-state="closed"
                className='w-full'
                onClick={() => setOpen(true)}
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
                        <div className='text-sm font-bold tracking-tight text-gray-900 dark:text-white w-full mt-[5px]'>{intl.formatMessage({ id: `${title}` })}</div>
                        <div className='text-xs text-gray-600 font-normal dark:text-gray-400 mt-[5px] overflow-hidden whitespace-nowrap'>{intl.formatMessage({ id: `${description}` })}</div>
                        <div className='font-normal mt-3 text-gray-700 dark:text-gray-400'>{price}</div>
                    </div>
                </div>
            </button>
            <MuiDrawer
                title={title}
                description={description}
                imageUrl={imageUrl}
                price={price}
                open={open} onClose={() => setOpen(false)}
            />
        </div>
    );
};

export default Meal;
