import React from 'react'
import { BasePage } from '../components/BasePage'
import { CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';



export const HasAccount = () => {
  const pageInfo = {
    title: '登入到系統\\已擁有公司電郵地址的同事'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"已擁有公司電郵地址的同事"} sx={{ overflow: 'scroll' }}>

        <Typography variant='h6' textAlign={'LEFT'}>1.      請到公司內聯網頁http://intranet.atal.com.hk/，點擊“ECRS & Timesheet System”或 輸入網址<Link to="http://ts.atal.com.hk/site" >http://ts.atal.com.hk/site</Link>。</Typography>
        <Typography variant='h6' textAlign={'left'}>2.      請使用與電郵相同的憑證來登錄到ECRS-TS網頁版。</Typography>
        <Typography variant='h6' textAlign={'left'}>3.      在手機登入時，選擇以電郵登入並輸入{`<電郵地址>`}；比如你的電郵為 chantaiman@atal.com.hk, 請輸入chantaiman@atal.com.hk作為登入ID；密碼則與你電郵密碼相同。</Typography>
        
        </ContentPart>
    </BasePage>
  )
}
