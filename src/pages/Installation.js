import React from 'react'
import { BasePage } from '../components/BasePage'
import img1 from '../asserts/img2.png'
import { CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';



export const Installation = () => {
  const pageInfo = {
    title: '安裝AMA手機應用程式'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"安裝AMA手機應用程式"} sx={{ overflow: 'scroll' }}>


        <CardMedia
          sx={{ height: '100px', width: '100px', margin: '0 auto' }}
          image={img1}
        />
        <Typography variant='h6' textAlign={'center'}>對於手機用戶，請到以下網址或掃描左邊的二維碼 下載手機應用程式：</Typography>
        <Typography variant='h6' textAlign={'center'}>http://ts.atal.com.hk/</Typography>
        
        <Typography variant='h6' textAlign={'center'}>* AMA手機應用程式支援iOS和Android平台。</Typography>
  



      </ContentPart>
    </BasePage>
  )
}
