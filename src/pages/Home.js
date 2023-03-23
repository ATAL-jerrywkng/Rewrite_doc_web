
import { CardMedia, Typography } from '@mui/material'
import React from 'react'
import { BasePage } from '../components/BasePage';

import img1 from '../asserts/ATAL_bg_img.png'
import img2 from '../asserts/loginSystem_img01.png'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import { ContentImage } from '../components/ContentImage';

export const Home = () => {
  const pageInfo = {
    title: 'Home'
  }
  return (
    <BasePage {...pageInfo}>
      <ContentPart title={"Home"} sx={{ overflow: 'scroll' }}>

        <ContentImage

          imageType="y" yWidth="200px"
          image={img1}
        />

        <Typography variant='h6' textAlign={'center'}>安樂工程集團</Typography>

        <Typography variant='h6' textAlign={'center'}>ATAL Mobile Access</Typography>
        <Typography variant='h6' textAlign={'center'}>使用手冊 (中文版)</Typography>





      </ContentPart>
    </BasePage>

  )
}

