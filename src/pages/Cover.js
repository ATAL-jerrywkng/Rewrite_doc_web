
import { CardMedia, Typography } from '@mui/material'
import React from 'react'
import { BasePage } from '../components/BasePage';

import img1 from '../asserts/ATAL_bg_img.png'
import img2 from '../asserts/loginSystem_img01.png'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import { ContentImage } from '../components/ContentImage';
import { Box, Grid } from '@mui/material'
import img3 from '../asserts/img2.png'
import img4 from '../asserts/img3.png'

export const Cover = () => {
  const pageInfo = {
    title: 'Cover'
  }
  return (
    <BasePage {...pageInfo}>
      <ContentPart title={"Cover"} sx={{ overflow: 'scroll' }}>

        <ContentImage

          imageType="y" yWidth="200px"
          image={img1}
        />

        <Typography variant='h6' textAlign={'center'}>安樂工程集團</Typography>

        <Typography variant='h6' textAlign={'center'}>ATAL Mobile Access</Typography>
        <Typography variant='h6' textAlign={'center'}>使用手冊 (中文版)</Typography>


        <Grid
          container
          spacing={2}
          sx={{
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '68px',
            marginBottom: '68px',
          }}
        >

          <Grid item >

            <Link to="https://apps.apple.com/us/app/atal-mobile-access/id1660210682" style={{ display: 'inline-block', width: '131px' }}>
              <ContentImage image={img3} sx={{ height: '100px', width: '100px', margin: "0 auto" }} />IOS download
            </Link>
          </Grid>
          <Grid item>
            OR
          </Grid>
          <Grid item>

            <Link to="https://ts.atal.com.hk/dl/ATALMobileAccess.apk" style={{ display: 'inline-block' }}>
              <ContentImage image={img4} sx={{ height: '100px', width: '100px', margin: "0 auto" }} />Android download
            </Link>
          </Grid>

          </Grid>
      </ContentPart>
    </BasePage>

  )
}
