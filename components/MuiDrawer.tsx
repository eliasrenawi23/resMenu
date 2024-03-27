"use client"
import React, { useState } from 'react'
import { Drawer, Dialog, Box, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import { sections } from '@/lib/data/orgnazedData';
import { useIntl } from 'react-intl';

//type MuiDrawerProps = typeof sections[number]['meals'][number];
interface MuiDrawerProps {
    title: string;
    description: string;
    imageUrl: StaticImageData;
    price: string;
    open: boolean;
    onClose: () => void;
}

const MuiDrawer: React.FC<MuiDrawerProps> = ({
    title,
    description,
    imageUrl,
    price,
    open,
    onClose
}) => {
    const intl = useIntl();

    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <Box p={1} width='100%' height='auto' textAlign='center' role='presentation' bgcolor='black'>
                <div className=' flex flex-col justify-between relative  h-[70vh] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                    <div className='h-[60%] w-full relative'>
                        <div className='h-full w-full absolute inset-0'>
                            <Image
                                src={imageUrl}
                                loading='lazy'
                                decoding='async'
                                alt="meal"
                                layout="fill"
                                //objectFit="cover"
                                className="data-[loaded=false]:animate-pulse data-[loaded=false]:dark:bg-gray-400"
                            />
                        </div>
                    </div>
                    <div className='max-h-[40%] w-full overflow-hidden'>
                        <div className='text-sm font-bold tracking-tight text-gray-900 dark:text-white w-full mt-[5px]'>{intl.formatMessage({ id: `${title}` })}</div>
                        <div className='text-xs text-gray-600 font-normal dark:text-gray-400 mt-[5px] overflow-auto whitespace-normal m-2'>{intl.formatMessage({ id: `${description}` })}</div>
                        <div className='font-normal mt-3 text-gray-700 dark:text-gray-400'>{price}</div>
                    </div>
                </div>
            </Box>
        </Dialog>
    )

}

export default MuiDrawer