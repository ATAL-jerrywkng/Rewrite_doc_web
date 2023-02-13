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



        <Typography variant='h6' textAlign={'left'}>ATAL Mobile Access (AMA)已經投入服務了。AMA 是一個為安樂同事建立的手機平台，你可以找到內聯網的熱門資訊，費用報銷和考勤紀錄。</Typography>
        <ol>


          <li><Typography variant='subtitle1' textAlign={'left'}><b>公司熱門資訊</b></Typography>
            <Typography variant='h7' textAlign={'left'}>包括內聯網資訊，通告，安全提示等</Typography>
          </li>
          <li><Typography variant='subtitle1' textAlign={'left'}> <b>費用報銷</b></Typography>
            <Typography variant='h7' textAlign={'left'}>提交和追蹤交通及費用報銷申請。</Typography>
            <Typography variant='h7' textAlign={'left'}>詳情請參閱</Typography>
         
          </li>
         
          <a id="myLink" href="http://ts.atal.com.hk/gl" target="_blank">http://ts.atal.com.hk/gl</a>
          <li><Typography variant='subtitle1' textAlign={'left'}> <b>考勤紀錄</b></Typography>
            <Typography variant='h7' textAlign={'left'}> 登記和提交工作考勤紀錄</Typography>
          </li>
        </ol>

      </ContentPart>
    </BasePage>
  )
}
