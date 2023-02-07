import React from 'react'
import { BasePage } from '../components/BasePage'
import { CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import img1 from '../asserts/summary2.png'
import { ContentImage } from '../components/ContentImage';

export const MySummary = () => {
  const pageInfo = {
    title: '我的總覽'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"我的總覽"} sx={{ overflow: 'scroll' }}>
        <ol>
          <li>
            <Typography variant='subtitle1' textAlign={'LEFT'}>考勤總覽: 顯示有關考勤紀錄遞交及批核狀況</Typography>
          </li>
          <li>
            <Typography variant='subtitle1' textAlign={'LEFT'}>報銷總覽: 顯示有關報銷紀錄遞交/批核及自動轉賬狀況</Typography>
          </li>
          <li>
            <Typography variant='subtitle1' textAlign={'LEFT'}>公司消息: 顯示相關的公司消息</Typography>
          </li>
        </ol>
        <Typography variant='h6' textAlign={'left'}>  </Typography>
        <Typography variant='h6' textAlign={'left'}>如有資料更新，可向下拉手機程式版面以刷新數據</Typography>
        <ContentImage image={img1} />
      </ContentPart>
    </BasePage >
  )
}
