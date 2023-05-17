import React from 'react'
import { BasePage } from '../components/BasePage'
import img1 from '../asserts/img2.png'
import img2 from '../asserts/img3.png'
import { Box, CardMedia, Grid, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import { ContentImage } from '../components/ContentImage';



export const PersonalInfo = () => {
  const pageInfo = {
    title: '個人資料'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"個人資料"} sx={{ overflow: 'scroll' }}>
        <ol>
          <li><Typography variant='subtitle1' textAlign={'LEFT'}><b>eNameCard (只適用於有eNameCard之用戶)</b></Typography>
          <Typography variant='h7' textAlign={'left'}>顯示用戶之eNameCard，如擁有多於1張eNameCard，版面會顯示用戶所有的eNameCard模板，選擇要顯示之eNameCard模板即可</Typography>
          </li>
          <li><Typography variant='subtitle1' textAlign={'LEFT'}><b>語言</b></Typography>
          <Typography variant='h7' textAlign={'left'}>設定AMA的介面語言</Typography>
          </li>
          <li><Typography variant='subtitle1' textAlign={'LEFT'}><b>文字大小</b></Typography>
          <Typography variant='h7' textAlign={'left'}>設定AMA的介面文字大小</Typography>
          </li>
          <li><Typography variant='subtitle1' textAlign={'LEFT'}><b>通知設定</b></Typography>
          <Typography variant='h7' textAlign={'left'}>於裝置上設定AMA的相關設定</Typography>
          </li>
          <li><Typography variant='subtitle1' textAlign={'LEFT'}><b>幫助中心</b></Typography>
          <Typography variant='h7' textAlign={'left'}>連結至AMA使用手冊</Typography>
          </li>
          <li><Typography variant='subtitle1' textAlign={'LEFT'}><b>關於</b></Typography>
          <Typography variant='h7' textAlign={'left'}>裝置上的AMA版本</Typography>
          </li>
        </ol>




      </ContentPart >
    </BasePage >
  )
}
