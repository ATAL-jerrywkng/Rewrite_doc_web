import React from 'react';
import classess from './Content.module.scss';
import { Box, Grid } from '@mui/material';
import { Menu } from '../menu/Menu';

export const Content = (props) => {
    return (
        <Grid container sx={{ height: '100%' }}>
            <Grid className={classess.menuContent} item xs={0} 
                sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Box className={classess.menuBox}>
                    <Menu />
                </Box>
            </Grid>
            <Grid item xs={12}
                sx={{ flex: { sm: 'auto' } }}
            >
                {props.children}
            </Grid>
        </Grid>
    )
}
