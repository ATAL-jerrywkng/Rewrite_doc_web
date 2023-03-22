import React from 'react'
import { BasePage } from '../components/BasePage'
import { CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';

import { ContentImage } from '../components/ContentImage';

import img1 from '../asserts/summary4.PNG'
import img2 from '../asserts/ec_reject.png'
import img3 from '../asserts/TSNotSubmit.PNG'
import img4 from '../asserts/TSApproving.png'
import img5 from '../asserts/ECWaitingForApproval.PNG'
import img6 from '../asserts/ECFin.PNG'
import { SpaceBar } from '@mui/icons-material';
export const MySummary = () => {
  const pageInfo = {
    title: '我的總覽'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"我的總覽"} sx={{ overflow: 'scroll' }}>
        <ol>
          <li>
            <Typography variant='subtitle1' textAlign={'LEFT'}><b>考勤總覽: </b>顯示有關考勤紀錄遞交及批核狀況</Typography>
          </li>
          <li>
            <Typography variant='subtitle1' textAlign={'LEFT'}><b>報銷總覽: </b>顯示有關報銷紀錄遞交/批核及自動轉賬狀況，可直接點擊各報銷狀態，以查看相關的報銷紀錄</Typography>
          </li>
          <li>
            <Typography variant='subtitle1' textAlign={'LEFT'}><b>最新消息: </b>顯示相關公司最新消息，可直接點擊消息，以查看詳細內容</Typography>
          </li>
        </ol>
        <Typography variant='h6' textAlign={'left'}>  </Typography>
        <Typography  variant='h7' textAlign={'left'}> 如有資料更新，可向下拉手機程式版面以刷新數據    </Typography>
        <ContentImage image={img1}   imageType="y" yWidth="500px" />
      </ContentPart>
    </BasePage >


  )
}
