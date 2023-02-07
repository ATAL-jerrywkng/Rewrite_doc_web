import React from 'react'
import { BasePage } from '../components/BasePage'
import { CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import img1 from '../asserts/summary2.PNG'

export const MySummary = () => {
  const pageInfo = {
    title: '我的總覽'
  }
  return (
    <BasePage  {...pageInfo}>
    <ContentPart title={"我的總覽"} sx={{ overflow: 'scroll' }}>

    <Typography variant='h6' textAlign={'LEFT'}>1.    考勤總覽: 顯示有關考勤紀錄遞交及批核狀況</Typography>
    <Typography variant='h6' textAlign={'LEFT'}>2.    報銷總覽: 顯示有關報銷紀錄遞交/批核及自動轉賬狀況</Typography>
    <Typography variant='h6' textAlign={'left'}>3.    最新消息: 顯示相關公司最新消息</Typography>
    <Typography variant='h6' textAlign={'left'}>  </Typography>
    <Typography variant='h6' textAlign={'left'}>如有資料更新，可向下拉手機程式版面以刷新數據</Typography>
    <CardMedia
          sx={{ height: '1700px', width: '1000px', margin: '0 auto' }}
          image={img1}
        />
  </ContentPart>
  </BasePage >
  )
}
