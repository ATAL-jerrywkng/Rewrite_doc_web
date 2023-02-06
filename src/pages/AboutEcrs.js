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

        
        <Typography variant='h6' textAlign={'left'}>ATAL Mobile Access (AMA)已經投入服務了。香港及澳門同事可以在AMA上報銷與業務有關的開銷。</Typography>
        <Typography variant='h6' textAlign={'left'}>它將取代本港交通及費用報銷申請表(俗稱「三色紙」) ，GAP/119/01，以縮短報銷週期。</Typography>
        <Typography variant='h6' textAlign={'LEFT'}>以下是AMA的主要特點：</Typography>
        <Typography variant='h6' textAlign={'left'}>1.      將證明文件（如發票，收據等）放到系統上作審批。</Typography>
        <Typography variant='h6' textAlign={'left'}>2.      ECRS和考勤系統整合在一個平台上。</Typography>
        <Typography variant='h6' textAlign={'left'}>3.      在沒有網絡連線下，仍可在手機應用程序上進行資料輸入。</Typography>
        <Typography variant='h6' textAlign={'left'}>4.      即時提交報銷申請。不用月結形式遞交。</Typography>
        <Typography variant='h6' textAlign={'left'}>5.      提供港鐵八達通車費參考。</Typography>
        <Typography variant='h6' textAlign={'left'}>6.      支持繁簡體中文及英文。</Typography>
        <Typography variant='h6' textAlign={'left'}>7.      提供手機應用程式及網頁版本。</Typography>
        <Typography variant='h6' textAlign={'left'}>8.      手機應用程式支援iOS和Android平台。</Typography>
        <Typography variant='h6' textAlign={'left'}>ECRS 沒有指定遞交日期。但必須於自墊資事件發日起計90天內遞交給上級作審批。而財務部截數日期則為每月15日。</Typography>
        <Typography variant='h6' textAlign={'left'}>在每月15日前完成部門審批之申請，財務部會作最後審查。</Typography>
        <Typography variant='h6' textAlign={'left'}>所有完成審查的申請均會於7個工作天內，以自動轉賬方式放數。</Typography>
        <Link to="http://ts.atal.com.hk/site" >http://ts.atal.com.hk/site</Link>
        {/* <CardMedia
  sx={{ height: '100%', width: '100%', margin: '0 auto' }}
  component="img"
  image={img2}
/> */}



      </ContentPart>
    </BasePage>
  )
}
