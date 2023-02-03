import React from 'react';
import classess from './Content.module.scss';
import { Box, Grid } from '@mui/material';
import { Menu } from '../menu/Menu';

export const Content = (props) => {
    return (
        <Grid container sx={{ height: '100%' }}>
            <Grid className={classess.menuContent} item sm={0}
                sx={{
                    display: { xs: 'none', sm: 'none', md: 'block' },
                    width: { xs: '340px' },
                    maxWidth: { md: '400px' }
                }}>
                <Box className={classess.menuBox}>
                    <Menu />
                </Box>
            </Grid>
            <Grid item xs={12}
                sx={{ flex: { md: 'auto' } }}
            >
                {props.children}
            </Grid>
        </Grid>
    )
}
