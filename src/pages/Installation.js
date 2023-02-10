import React from 'react'
import { BasePage } from '../components/BasePage'
import img1 from '../asserts/img2.png'
import img2 from '../asserts/img3.png'
import { Box, CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import { ContentImage } from '../components/ContentImage';



export const Installation = () => {
  const pageInfo = {
    title: '安裝AMA手機應用程式'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"安裝AMA手機應用程式"} sx={{ overflow: 'scroll' }}>
        
        <Box sx={{ textAlign: 'center' }}>
          <Link to="https://apps.apple.com/us/app/atal-mobile-access/id1660210682" style={{ display: 'inline-block' }}>
            <ContentImage image={img1} sx={{ height: '100px', width: '100px' }} />IOS download
          </Link>
          <Link to="https://ts.atal.com.hk/dl/ATALMobileAccess.apk" style={{ display: 'inline-block' }}>
            <ContentImage image={img2} sx={{ height: '95px', width: '95px' }} />Android download
          </Link>
        </Box>
        <Typography variant='h6' textAlign={'center'}>對於手機用戶，請到以下網址或掃描上方的二維碼下載手機應用程式：</Typography>
        <a id="myLink" href="http://ts.atal.com.hk/" target="_blank" ><Typography variant='h6' textAlign={'center'}>http://ts.atal.com.hk/</Typography></a>
        <Typography variant='h6' textAlign={'center'}>* AMA手機應用程式支援iOS和Android平台。</Typography>




      </ContentPart >
    </BasePage >
  )
}
