import React from 'react'
import { BasePage } from '../components/BasePage'

import { CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import img1 from '../asserts/claim_filter.png'
import img2 from '../asserts/claim_filter_detail.png'
import img3 from '../asserts/claim_filter_detail2.png'
import img4 from '../asserts/claim_filter_detail3.PNG'
export const EcrsSystemFilter = () => {
  const pageInfo = {
    title: 'ECRS自墊費用報銷系統\\篩選'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"篩選"} sx={{ overflow: 'scroll' }}>

        <Typography variant='h6' textAlign={'LEFT'}>1.     點擊{`<篩選>`}後，進入{`<篩選>`}版面</Typography>
        <CardMedia
          sx={{ height: '950px', width: '500px', margin: '0 auto' }}
          image={img1}
        />

        <Typography variant='h6' textAlign={'LEFT'}> 2.     可按需要選擇需查閱的報銷紀錄類型或狀態，亦可自訂顯示排序，完成後點擊{`<選擇>`}</Typography>
        <CardMedia
          sx={{ height: '950px', width: '500px', margin: '0 auto' }}
          image={img2}
        />
        <Typography variant='h6' textAlign={'LEFT'}> 3.     篩選功能生效時，其按鈕會轉為橙色</Typography>
        <CardMedia
          sx={{ height: '950px', width: '1000px', margin: '0 auto' }}
          image={img4}
        />
        <Typography variant='h6' textAlign={'LEFT'}> 4.     亦可自訂需要查詢之時段，完成後點擊{`<選擇日期>`}</Typography>
        <CardMedia
          sx={{ height: '950px', width: '500px', margin: '0 auto' }}
          image={img3}
        />
      </ContentPart>
    </BasePage>
  )
}
