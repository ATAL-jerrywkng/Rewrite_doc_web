import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import classess from './styles/BasePage.module.scss'
import { ContentButtonBar } from './ContentButtonBar';
export const BasePage = (props) => {
  return (

    <Box className={classess.pageBox}>
      <Box className={classess.content}>
        <Grid container className={classess.contentGrid}>
          <Grid item sx={{ flex: 'auto' }}>
            <Typography variant='h6' sx={{ fontWeight: 600 }}>
              {props?.title}
            </Typography>
          </Grid>
          <Grid item >
            <ContentButtonBar />
          </Grid>
        </Grid>
        <Box className={classess.contentBox}>
          {props?.children}

        </Box>
      </Box>
    </Box>
  )
}
