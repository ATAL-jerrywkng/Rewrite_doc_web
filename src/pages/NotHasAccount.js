import React from 'react'
import { BasePage } from '../components/BasePage'
import { CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import img1 from '../asserts/login_staffID1.png'
import { ContentImage } from '../components/ContentImage';
export const NotHasAccount = () => {
  const pageInfo = {
    title: '登入到系統\\沒有公司電郵地址的同事'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"沒有公司電郵地址的同事"} sx={{ overflow: 'scroll' }}>
        <ol>
          <li>
            <Typography variant='subtitle1' textAlign={'LEFT'}>請先向部門秘書申請。</Typography>
          </li>
          <li>
            <Typography variant='subtitle1' textAlign={'LEFT'}>成功申請後，輸入網址 <a id="myLink" href="http://ts.atal.com.hk/site" target="_blank">http://ts.atal.com.hk/site</a>；或下載手機應用程式登入。</Typography>
          </li>
          <li>
            <Typography variant='subtitle1' textAlign={'LEFT'}>使用「員工編號」及所提供之「首次登入密碼」登入。並進行簡單啟動程序即可使用。</Typography>
          </li>
          <ContentImage
            imageType="y" yWidth="500px"
            image={img1}
          />
        </ol>

      </ContentPart>
    </BasePage >
  )
}
