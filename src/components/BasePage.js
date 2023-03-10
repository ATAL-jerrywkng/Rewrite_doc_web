import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import classess from './styles/BasePage.module.scss'
import { ContentButtonBar } from './ContentButtonBar';
export const BasePage = (props) => {
  return (

    <Box className={classess.pageBox} sx={{ paddingLeft: { sm: 0, md: '2px' } }}>
      <Box className={classess.content}>
        <Grid container className={classess.contentGrid}>
          <Grid item sx={{
            flex: 'auto',
            // maxWidth: { xs: '45%', sm: '100%' } 
          }}>
            <Typography variant='h6' sx={{ fontWeight: 600 }}>
              {props?.title}
            </Typography>
          </Grid>
          <Grid item >
            {props?.NotTopBarButton ? null : <ContentButtonBar />}
          </Grid>
        </Grid>
        <Box className={classess.contentBox}>
          {props?.children}

        </Box>
      </Box>
    </Box>
  )
}
