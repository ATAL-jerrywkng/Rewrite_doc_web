import React from 'react'
import { BasePage } from '../components/BasePage'
import { CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import { ContentImage } from '../components/ContentImage';
import img1 from '../asserts/login_email.png'

export const HasAccount = () => {
  const pageInfo = {
    title: '登入到AMA手機應用程式\\已擁有公司電郵地址的同事'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"已擁有公司電郵地址的同事"} sx={{ overflow: 'scroll' }}>
        <ol>
          <li>

            <Typography variant='subtitle1' textAlign={'LEFT'}>請到公司內聯網頁 <a id="myLink" href="http://intranet.atal.com.hk/" target="_blank">http://intranet.atal.com.hk/</a>，點擊“ECRS & Timesheet System”或 輸入網址 <a id="myLink" href="http://ts.atal.com.hk/site" target="_blank">http://ts.atal.com.hk/site/</a>。</Typography>
          </li>
          <li>
            <Typography variant='subtitle1' textAlign={'LEFT'}>請使用與電郵相同的憑證來登錄到ECRS-TS網頁版。</Typography>
          </li>
          <li>

            <Typography variant='subtitle1' textAlign={'LEFT'}>在手機登入時，選擇以電郵登入並輸入{`<電郵地址>`}；比如你的電郵為 chantaiman@atal.com.hk, 請輸入chantaiman@atal.com.hk作為登入ID；密碼則與你電郵密碼相同。</Typography>
          </li>
        </ol>
        <ContentImage
          imageType="y" yWidth="500px"
          image={img1}
        />
      </ContentPart>
    </BasePage>
  )
}
