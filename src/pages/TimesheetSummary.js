import React from 'react'
import { BasePage } from '../components/BasePage'
import { CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import img1 from '../asserts/threedots.png'
import img2 from '../asserts/option.png'

export const TimesheetSummary = () => {
  const pageInfo = {
    title: 'Timesheet考勤系統\\考勤總覽'
  }
  return (
    <BasePage  {...pageInfo}>
    <ContentPart title={"考勤總覽"} sx={{ overflow: 'scroll' }}>

    <Typography variant='h6' textAlign={'LEFT'}>1.    點選有考勤紀錄的日子(綠點或紅點)，相關考勤紀錄資料會於下方顯示</Typography>
    <Typography variant='h6' textAlign={'LEFT'}>2.    可查閱上月或下月(如有)之紀錄</Typography>
    <Typography variant='h6' textAlign={'left'}>3.    點選<CardMedia sx={{ height: '20px', width: '20px', margin: '0' }}image={img1}/>後，可以點擊{`<遞交>`}<CardMedia sx={{ height: '20px', width: '20px', margin: '0' }}image={img2}/>考勤紀錄或點擊{`<圖例>`}查詢圖例說明</Typography>

    
  </ContentPart>
  </BasePage >
  )
}
