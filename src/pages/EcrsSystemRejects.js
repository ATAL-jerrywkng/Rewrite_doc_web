import React from 'react'
import { BasePage } from '../components/BasePage'

import { CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import img1 from '../asserts/ec_reject.png'

import { ContentImage } from '../components/ContentImage';
export const EcrsSystemRejects = () => {
  const pageInfo = {
    title: 'ECRS自墊費用報銷系統\\被否決項目(報銷)'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"被否決項目"} sx={{ overflow: 'scroll' }}>

        
        <ContentImage
          sx={{  height: '100px' }}
          image={img1}
        />

        <Typography variant='h6' textAlign={'LEFT'}>這個顯示你在過去的90天內，有沒有被否決的項目，你可以按一下詳細資料來查看已被否決的項目。</Typography>
   

      </ContentPart>
    </BasePage>
  )
}
