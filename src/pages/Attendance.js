import React from 'react'
import { BasePage } from '../components/BasePage'
import { CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';

import { Link } from 'react-router-dom';
export const Attendance = () => {
  const pageInfo = {
    title: '考勤用戶注意事項'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"考勤用戶注意事項"} sx={{ overflow: 'scroll' }}>

        <ol>
          <li>
            <Typography variant='subtitle1' textAlign={'center'}>2023年1月xx日或之後的考勤及自墊費用報銷，不論新舊用戶，均需安裝最新手機應用程式(AMA)或瀏覽ECRS-TS網頁版 <Link to="http://ts.atal.com.hk/site" >http://ts.atal.com.hk/site</Link>才可輸入有關資料。</Typography>
          </li>
        </ol>






      </ContentPart>
    </BasePage>
  )
}
