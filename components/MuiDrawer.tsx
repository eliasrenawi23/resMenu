import React from 'react';
import { Drawer, IconButton, Box, AppBar, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import { useIntl } from 'react-intl';
import { sections } from '@/lib/data/orgnazedData';

interface DrawerProps {
    title: typeof sections[number]['meals'][number]['title'];
    description: typeof sections[number]['meals'][number]['description']
    imageUrl: typeof sections[number]['meals'][number]['imageUrl']
    price: typeof sections[number]['meals'][number]['price'];
}

interface MuiDrawerProps {
    data: DrawerProps | undefined;
    open: boolean;
    onClose: () => void;
}

const MuiDrawer: React.FC<MuiDrawerProps> = ({ data, onClose, open }) => {
    const intl = useIntl();

    return (
        <Drawer
            open={open}
            onClose={onClose}
            anchor='bottom'

        >
            <AppBar position="static" className="text-sm font-bold tracking-tight text-gray-900 dark:text-white relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                        {intl.formatMessage({ id: data?.title || 'Error' })}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box p={1} width='100%' height='75vh' textAlign='center' role='presentation' bgcolor='black' sx={{ width: 'auto' }}>
                <div className='flex flex-col justify-between relative h-full bg-white border  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                    <div className='h-[60%] w-full relative '  >
                        <div className='h-full w-full absolute inset-0 '>
                            <Image
                                src={data?.imageUrl || ''}
                                loading='lazy'
                                alt="meal"
                                layout="fill"

                                className="data-[loaded=false]:animate-pulse data-[loaded=false]:dark:bg-gray-400 object-cover max-h[100%]  "
                            />

                        </div>
                    </div>
                    <div className='h-[40%] w-full overflow-hidden flex flex-col justify-center items-center'>
                        <div className='text-sm font-bold tracking-tight text-gray-900 dark:text-white w-full mt-[5px]'>
                            {intl.formatMessage({ id: data?.title || 'Error' })}
                        </div>
                        <div className='text-xs text-gray-600 font-normal dark:text-gray-400 mt-[5px] overflow-auto whitespace-normal m-2'>
                            {intl.formatMessage({ id: data?.description || 'Error' })}
                        </div>
                        <div className='font-normal mt-3 text-gray-700 dark:text-gray-400'>
                            {data?.price || 'Error'}
                        </div>
                    </div>
                </div>
            </Box>
        </Drawer>
    );
}

export default MuiDrawer;
