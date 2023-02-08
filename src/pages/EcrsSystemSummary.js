import React from 'react'
import { BasePage } from '../components/BasePage'

import { CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import img1 from '../asserts/claim_summary.png'
import { ContentImage } from '../components/ContentImage';



export const EcrsSystemSummary = () => {
  const pageInfo = {
    title: 'ECRS自墊費用報銷系統\\報銷總覽'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"報銷總覽"} sx={{ overflow: 'scroll' }}>

        <Typography variant='h7' textAlign={'LEFT'}>    顯示所選時段之報銷紀錄，可以點擊相關紀錄以查閱詳細資料</Typography>
        <ContentImage
          sx={{ }}
          sx={{ height: '1242px' }} image={img1}
        />
        

      </ContentPart>
    </BasePage>
  )
}
