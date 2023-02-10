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
import { ContentImage } from '../components/ContentImage';
export const MySummaryTimeSheet = () => {
  const pageInfo = {
    title: '我的總覽\\考勤'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"考勤"} sx={{ overflow: 'scroll' }}>
        <ol>
          <Typography variant='h7' textAlign={'LEFT'}>狀態1: 被拒絕</Typography>
          <Typography variant='subtitle1' textAlign={'LEFT'}>這個顯示你在這個考勤時段內，被否決的考勤紀錄數量</Typography>
          <ContentImage image={img2} imageType="x" xWidth="150px" />



          <Typography variant='h7' textAlign={'LEFT'}>狀態2: 未遞交</Typography>
          <Typography variant='subtitle1' textAlign={'LEFT'}>這個顯示你在這個考勤時段內，仍未遞交的考勤紀錄數量</Typography>
          <ContentImage image={img3} imageType="x" xWidth="150px"/>

          <Typography variant='h7' textAlign={'LEFT'}>狀態3: 批核中</Typography>
          <Typography variant='subtitle1' textAlign={'LEFT'}>這個顯示你在這個考勤時段內，仍在等待批核的考勤紀錄數量</Typography>
          <ContentImage image={img4} imageType="x" xWidth="150px"/>
        </ol>

      </ContentPart>
    </BasePage >
  )
}
