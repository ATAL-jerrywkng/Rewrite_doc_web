import { Box, Typography } from '@mui/material';
import React from 'react';
import classess from './styles/ContentPart.module.scss';

export const ContentPart = (props) => {
    

    return (
        <Box className={classess.relatedTopics}>
            <Typography variant='h6' className={classess.title}>{props?.title}</Typography>
            {props?.children}
        </Box>
    )
}
