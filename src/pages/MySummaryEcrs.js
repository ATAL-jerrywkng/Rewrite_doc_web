import React from 'react'
import { BasePage } from '../components/BasePage'
import { CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import img1 from '../asserts/summary4.PNG'
import img2 from '../asserts/ec_reject.png'
import img3 from '../asserts/TSNotSubmit.PNG'
import img4 from '../asserts/TSApproving.png'
import img5 from '../asserts/ECWaitingForApproval.PNG'
import img6 from '../asserts/ECFin.PNG'
import img7 from '../asserts/ECPaid.png'
export const MySummaryEcrs = () => {
  const pageInfo = {
    title: '我的總覽\\報銷'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"報銷紀錄"} sx={{ overflow: 'scroll' }}>

        <Typography variant='h6' textAlign={'LEFT'}>狀態1: 未遞交</Typography>
        <Typography variant='h6' textAlign={'LEFT'}>這個顯示你在過去的90天內，仍未遞交的報銷紀錄數量</Typography>
        <CardMedia
          sx={{ height: '200px', width: '500px', margin: '0 auto' }}
          image={img3}
        />
        

        <Typography variant='h6' textAlign={'LEFT'}>狀態2: 等待批核</Typography>

        <Typography variant='h6' textAlign={'LEFT'}>這個顯示你在過去的90天內，仍在等待批核的報銷紀錄數量</Typography>
        <CardMedia
          sx={{ height: '200px', width: '500px', margin: '0 auto' }}
          image={img5}
        />
        

        <Typography variant='h6' textAlign={'LEFT'}>狀態3: 被拒絕</Typography>
        <Typography variant='h6' textAlign={'LEFT'}>這個顯示你在過去的90天內，被否決的報銷紀錄數量</Typography>
        <CardMedia
          sx={{ height: '200px', width: '500px', margin: '0 auto' }}
          image={img2}
        />
        
        <Typography variant='h6' textAlign={'LEFT'}>狀態4: 已審閱(會計)</Typography>
        <Typography variant='h6' textAlign={'LEFT'}>這個顯示你在過去的90天內，會計部已審閱的報銷紀錄數量</Typography>
        <CardMedia
          sx={{ height: '200px', width: '500px', margin: '0 auto' }}
          image={img6}
        />
        

        <Typography variant='h6' textAlign={'LEFT'}>狀態5: 自動轉賬(最近90日)</Typography>
        <Typography variant='h6' textAlign={'LEFT'}>這個顯示你在過去的90天內，已自動轉賬的報銷紀錄數量</Typography>
        <CardMedia
          sx={{ height: '200px', width: '500px', margin: '0 auto' }}
          image={img7}
        />
        

      </ContentPart>
    </BasePage >
  )
}
