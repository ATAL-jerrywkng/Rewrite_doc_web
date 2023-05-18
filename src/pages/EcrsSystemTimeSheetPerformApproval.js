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
import img4 from '../asserts/approveTS3.png'
import img5 from '../asserts/approveTS4.png'
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
          <li><Typography variant='subtitle1' textAlign={'LEFT'}>AMA亦提供一次過審批多項考勤紀錄的功能，只需長按第一條需審批的紀錄，紅色剔號會出現</Typography>
          </li>

          <ContentImage image={img4}
            imageType="y" yWidth="500px"
          />

          <li><Typography variant='subtitle1' textAlign={'LEFT'}>按需要繼續剔選(1)其他考勤紀錄，或按(2){`<選擇全部>`}將版面上所有未審批的考勤紀錄一次過剔選</Typography>
          </li>

          <ContentImage image={img5}
            imageType="y" yWidth="500px"
          />
          <li><Typography variant='subtitle1' textAlign={'LEFT'}>剔選完成後，便可一次過批准或拒絕已剔選的考勤紀錄</Typography>
          </li>
        </ol>
      </ContentPart>
    </BasePage >
  )
}
