import React from 'react'
import { BasePage } from '../components/BasePage'
import img1 from '../asserts/ec_paid.png'
import { CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';

import { ContentImage } from '../components/ContentImage';
export const EcrsSystemFinishRecord = () => {
  const pageInfo = {
    title: 'ECRS自墊費用報銷系統\\已安排自動轉賬或自動轉賬狀態(報銷)'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"已安排自動轉賬或自動轉賬狀態"} sx={{ overflow: 'scroll' }}>


        <ContentImage
          sx={{ height: '100px'}}
          image={img1}
        />

        <Typography variant='h6' textAlign={'LEFT'}>這個顯示你在過去的90天內，有沒有已自動轉賬的項目，你可以按一下詳細資料來查看已自動轉賬的項目。</Typography>


      </ContentPart>
    </BasePage>
  )
}
