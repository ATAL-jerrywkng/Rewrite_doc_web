import { CardMedia, Typography } from '@mui/material'
import React from 'react'
import { BasePage } from '../components/BasePage';

import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';

export const AboutEcrs = () => {
  const pageInfo = {
    title: '關於ATAL Mobile Access (AMA)'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"關於ATAL Mobile Access (AMA)"} sx={{ overflow: 'scroll' }}>



        <Typography variant='h6' textAlign={'left'}>ATAL Mobile Access (AMA)已經投入服務了。AMA 是一個為安樂同事建立的手機平台，你可以找到內聯網的熱門資訊，費用報銷和考勤系統。</Typography>
        <ol>


          <li><Typography variant='subtitle1' textAlign={'left'}><b>公司熱門資訊</b></Typography>
            <Typography variant='h7' textAlign={'left'}>包括內聯網資訊,通告,安全提示等</Typography>
          </li>
          <li><Typography variant='subtitle1' textAlign={'left'}> <b>費用報銷</b></Typography>
            <Typography variant='h7' textAlign={'left'}>提交和追蹤交通及費用報銷申請</Typography>
            <Typography variant='h7' textAlign={'left'}>ECRS 沒有指定遞交日期。但必須於自墊資事件發日起計90天內遞交給上級作審批。而財務部截數日期則為每月15日。</Typography>
            <Typography variant='h7' textAlign={'left'}>在每月15日前完成部門審批之申請，財務部會作最後審查。</Typography>
            <Typography variant='h7' textAlign={'left'}>所有完成審查的申請均會於7個工作天內，以自動轉賬方式放數。</Typography>
          </li>
          <Link to="http://ts.atal.com.hk/gl" >http://ts.atal.com.hk/gl</Link>
          <li><Typography variant='subtitle1' textAlign={'left'}> <b>考勤系統</b></Typography>
            <Typography variant='h7' textAlign={'left'}> 登記和提交工作考勤紀錄</Typography>
          </li>
        </ol>

      </ContentPart>
    </BasePage>
  )
}
