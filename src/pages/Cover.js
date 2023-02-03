
import { CardMedia, Typography } from '@mui/material'
import React from 'react'
import { BasePage } from '../components/BasePage';

import img1 from '../asserts/ATAL_bg_img.png'
import img2 from '../asserts/loginSystem_img01.png'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';

export const Cover = () => {
  const pageInfo = {
    title: 'Cover'
  }
  return (
    <BasePage {...pageInfo}>
      <ContentPart title={"Cover"} sx={{overflow: 'scroll'}}>


        <CardMedia
          sx={{ height: '250px', width: '250px', margin: '0 auto' }}
          image={img1}
        />
        <Typography variant='h6' textAlign={'center'}>安樂工程集團</Typography>
        
        <Link to="http://ts.atal.com.hk/site" >http://ts.atal.com.hk/site</Link>
        {/* <CardMedia
          sx={{ height: '100%', width: '100%', margin: '0 auto' }}
          component="img"
          image={img2}
        /> */}



      </ContentPart>
    </BasePage>

  )
}
