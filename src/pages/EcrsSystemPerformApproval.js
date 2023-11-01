import React from 'react'
import { BasePage } from '../components/BasePage'
import {
  CardMedia,
  Grid
  , Typography
} from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import img1 from '../asserts/ecApprovalThreeDots.png'
import img2 from '../asserts/approveClaim.PNG'
import img3 from '../asserts/approveClaim2.PNG'
import img4 from '../asserts/approveClaim3.png'
import { ContentImage } from '../components/ContentImage';

export const EcrsSystemPerformApproval = () => {
  const pageInfo = {
    title: '審批申請\\審批報銷申請'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"審批報銷申請"} sx={{ overflow: 'scroll' }}>
        <Typography variant='h7' textAlign={'LEFT'}>只適用於有審批報銷申請權限的用戶</Typography>
        <Typography variant='h7' textAlign={'LEFT'} display="block">在下方的功能選項表中，選擇審批，並在上方的選項，選擇報銷</Typography>
        <Typography variant='h7' textAlign={'LEFT'}>   </Typography>



        <ol>
          <li><Typography variant='subtitle1' textAlign={'LEFT'}>點擊需要審批的報銷申請(每一位申請者會顯示一條報銷申請紀錄，已包含了交通費及自墊費用在內)，以查看詳細報銷內容及進行審批</Typography>
          </li>



          <ContentImage image={img2}
            imageType="y" yWidth="500px"
          />

          <li><Typography variant='subtitle1' textAlign={'LEFT'}>在每項報銷申請，按實際情況點擊(1) 拒絕 / (2) 批准 / (3) 批准並留言，以完成審批程序，如當天有考勤紀錄，可點擊(4) 考勤來查看詳細資料 (如沒有考勤紀錄，會顯示<b>未能找到相關資料</b>)</Typography>
          <Typography variant='subtitle1' textAlign={'LEFT'} >因公行車的交通費報銷，版面會顯示{`<車牌登記號碼>`}、{`<主要工作地點>`}及{`<行程目的>`}</Typography>
          </li>



          <ContentImage image={img3}
            imageType="y" yWidth="500px"
          />

          <ContentImage image={img4}
            imageType="y" yWidth="500px"
          />
        </ol>
      </ContentPart>
    </BasePage >
  )
}
