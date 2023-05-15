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
import img2 from '../asserts/approveTS.png'
import img3 from '../asserts/approveTS2.png'
import { ContentImage } from '../components/ContentImage';

export const EcrsSystemTimeSheetPerformApproval = () => {
  const pageInfo = {
    title: '審批申請\\審批考勤'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"審批考勤"} sx={{ overflow: 'scroll' }}>
        <Typography variant='h7' textAlign={'LEFT'}>只適用於有審批考勤權限的用戶</Typography>
        <Typography variant='h7' textAlign={'LEFT'} display="block">在下方的功能選項表中，選擇審批，並在上方的選項，選擇考勤</Typography>
        <Typography variant='h7' textAlign={'LEFT'}>   </Typography>



        <ol>
          <li><Typography variant='subtitle1' textAlign={'LEFT'}>點擊需要審批的考勤紀錄，以查看詳細考勤紀錄資料及進行審批</Typography>
          </li>



          <ContentImage image={img2}
            imageType="y" yWidth="500px"
          />

          <li><Typography variant='subtitle1' textAlign={'LEFT'}>在每項考勤紀錄，按實際情況點擊(1) 拒絕 / (2) 批准，以完成審批程序</Typography>
          </li>



          <ContentImage image={img3}
            imageType="y" yWidth="500px"
          />
        </ol>
      </ContentPart>
    </BasePage >
  )
}
