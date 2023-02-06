
import { CardMedia, Typography } from '@mui/material'
import React from 'react'
import { BasePage } from '../components/BasePage';

import img1 from '../asserts/ATAL_bg_img.png'
import img2 from '../asserts/loginSystem_img01.png'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import { ContentImage } from '../components/ContentImage';

export const Cover = () => {
  const pageInfo = {
    title: 'Cover'
  }
  return (
    <BasePage {...pageInfo}>
      <ContentPart title={"Cover"} sx={{ overflow: 'scroll' }}>

        <ContentImage
          sx={{ height: '250px', width: '250px' }}
          image={img1} />

        <Typography variant='h6' textAlign={'center'}>安樂工程集團</Typography>

        <Typography variant='h6' textAlign={'center'}>ATAL Mobile Access (ECRS-TS)</Typography>
        <Typography variant='h6' textAlign={'center'}>使用手冊 (中文版)</Typography>
        <Typography variant='h6' textAlign={'center'}>第一版</Typography>
        <Typography variant='h6' textAlign={'center'}>資訊科技</Typography>
        <Typography variant='h6' textAlign={'center'}>最後更新: 2023年01月16日</Typography>




      </ContentPart>
    </BasePage>

  )
}
