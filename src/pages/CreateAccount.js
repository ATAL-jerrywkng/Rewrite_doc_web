import React from 'react'
import { BasePage } from '../components/BasePage'
import { CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';


export const CreateAccount = () => {
  const pageInfo = {
    title: '登入到AMA手機應用程式\\啟動賬戶'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"啟動賬戶"} sx={{ overflow: 'scroll' }}>

        <Typography variant='h7' textAlign={'LEFT'}>沒有公司的電子郵件地址的同事，並需使用ECRS的話，請聯絡您的部門秘書以取得你的登入資料。</Typography>
        <Typography variant='h7' textAlign={'LEFT'}>而你的登入ID應為你的員工編號。新申請的賬戶，必須進行簡單啟動程序方可生效。有關啟動程序為:</Typography>
        <ol>
          <li>
            <Typography variant='subtitle1' textAlign={'left'}>登入到 <a id="myLink" href="http://ts.atal.com.hk/web" target="_blank">http://ts.atal.com.hk/web</a></Typography>
          </li>
          <li>
            <Typography variant='subtitle1' textAlign={'left'}>輸入員工編號及首次登入密碼</Typography>
          </li>
          <li>
            <Typography variant='subtitle1' textAlign={'left'}>如未啟動的賬戶，會要求你輸入你的電郵地址、手機號碼及新密碼。</Typography>
          </li>
        </ol>
        <Typography variant='h7' textAlign={'left'}>而電郵地址及手機號碼只會在你忘機密碼時才會使用。密碼會發到你設定的電郵地址和手機號碼裡。</Typography>
        <Typography variant='h7' textAlign={'left'}>輸入您的賬戶和密碼，然後點擊登入。</Typography>
      </ContentPart>
    </BasePage >
  )
}