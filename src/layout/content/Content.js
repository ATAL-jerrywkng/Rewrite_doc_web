import React from 'react'
import { Grid } from '@mui/material'
import { Menu } from '../menu/Menu'

export const Content = (props) => {
    return (
        <Grid container sx={{ height: '100%' }}>
            <Grid item xs={0} sm={5} sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Menu />
            </Grid>
            <Grid item xs={12} sm={7}>
                {props.children}
            </Grid>
        </Grid>
    )
}
