import React from 'react';
import classess from './Content.module.scss';
import { Box, Grid } from '@mui/material';
import { Menu } from '../menu/Menu';

export const Content = (props) => {
    return (
        <Grid container sx={{ minHeight: '100%' }}>
            <Grid className={classess.menuContent} item sm={0} md={4} lg={3}
                sx={{
                    display: { xs: 'none', sm: 'none', md: 'block' },
                    // width: { xs: '340px' },
                    // maxWidth: { md: '400px' }
                }}>
                <Box className={classess.menuBox}>
                    <Menu />
                </Box>
            </Grid>
            <Grid item xs={12} md={8} lg={9}
                sx={{
                    flex: { md: 'auto' }
                    , paddingTop: '2px'
                    // , minWidth: { md: '100%' } 
                }}
            >
                {props.children}
            </Grid>
        </Grid>
    )
}
