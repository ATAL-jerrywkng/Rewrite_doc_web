import React from 'react'
import { BasePage } from '../components/BasePage'
import { CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import img1 from '../asserts/summary5.png'
import { ContentImage } from '../components/ContentImage';

export const MySummaryHotNews = () => {
  const pageInfo = {
    title: '我的總覽\\最新消息'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"最新消息"} sx={{ overflow: 'scroll' }}>

        <Typography variant='h7' textAlign={'LEFT'}>版面會顯示最新的三則公司最新消息，如需要查閱較早前的消息，可點擊{`<查看全部>`}</Typography>

        <ContentImage
          imageType="y" yWidth="500px"
          image={img1}
        />


      </ContentPart>
    </BasePage >
  )
}
