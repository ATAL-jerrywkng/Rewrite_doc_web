import React from 'react'
import { BasePage } from '../components/BasePage'

import { CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import img1 from '../asserts/claim_filter.png'
import img2 from '../asserts/claim_filter_detail.png'
import img3 from '../asserts/claim_filter_detail2.png'

import { ContentImage } from '../components/ContentImage';
export const EcrsSystemFilter = () => {
  const pageInfo = {
    title: 'ECRS自墊費用報銷系統\\篩選'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"篩選"} sx={{ overflow: 'scroll' }}>

        <Typography variant='h6' textAlign={'LEFT'}>1.     點擊{`<篩選>`}後，進入{`<篩選>`}版面</Typography>
        <ContentImage
          sx={{ }}
          image={img1}
        />

        <Typography variant='h6' textAlign={'LEFT'}> 2.     可按需要選擇需查閱的報銷紀錄類型或狀態，亦可自訂顯示排序，完成後點擊{`<選擇>`}</Typography>
        <ContentImage
          sx={{  }}
          image={img2}
        />

        <Typography variant='h6' textAlign={'LEFT'}>     3.     亦可自訂需要查詢之時段，完成後點擊{`<選擇日期>`}</Typography>
        <ContentImage
          sx={{}}
          image={img3}
        />
      </ContentPart>
    </BasePage>
  )
}
