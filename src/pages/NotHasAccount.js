import React from 'react'
import { BasePage } from '../components/BasePage'
import { CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';


export const NotHasAccount = () => {
  const pageInfo = {
    title: '登入到系統\\沒有公司電郵地址的同事'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"沒有公司電郵地址的同事"} sx={{ overflow: 'scroll' }}>

      <Typography variant='h6' textAlign={'LEFT'}>1.      請先向部門秘書申請。</Typography>
      <Typography variant='h6' textAlign={'left'}>2.      成功申請後，輸入網址<Link to="http://ts.atal.com.hk/site" >http://ts.atal.com.hk/site</Link>；或下載手機應用程式登入。</Typography>
      <Typography variant='h6' textAlign={'left'}>3.      使用「員工編號」及所提供之「首次登入密碼」登入。並進行簡單啟動程序即可使用。</Typography>

    </ContentPart>
    </BasePage >
  )
}
