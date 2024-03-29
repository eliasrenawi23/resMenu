"use client"
import React from 'react';
import { Drawer, IconButton, Box, AppBar, Toolbar, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import { useIntl } from 'react-intl';
import { sections } from '@/lib/data/orgnazedData';

interface MuiDrawerProps {
    title: typeof sections[number]['meals'][number]['title'];
    description: typeof sections[number]['meals'][number]['description'];
    imageUrl: typeof sections[number]['meals'][number]['imageUrl'];
    price: typeof sections[number]['meals'][number]['price'];
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
        <Drawer
            open={open}
            onClose={onClose}
            anchor='bottom'
        >
            <AppBar position="static" className=" text-sm font-bold tracking-tight text-gray-900 dark:text-white relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={onClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        {intl.formatMessage({ id: `${title}` })}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box p={1} width='100%' height='75vh' textAlign='center' role='presentation' bgcolor='black' sx={{ width: 'auto' }}>
                <div className='flex flex-col justify-between relative h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                    <div className='h-[60%] w-full relative'>
                        <div className='h-full w-full absolute inset-0'>
                            <Image
                                src={imageUrl}
                                loading='lazy'
                                decoding='async'
                                alt="meal"
                                layout="fill"
                                objectFit="cover"
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
        </Drawer>
    );
}

export default MuiDrawer;