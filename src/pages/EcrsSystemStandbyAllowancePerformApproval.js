import React from 'react'
import { BasePage } from '../components/BasePage'
import {
  CardMedia,
  Grid
  , Typography
} from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import img1 from '../asserts/SAApprove.png'
import img2 from '../asserts/SAApprove2.png'
import img3 from '../asserts/approveTS2.png'
import img4 from '../asserts/approveTS3.png'
import img5 from '../asserts/approveTS4.png'
import { ContentImage } from '../components/ContentImage';

export const EcrsSystemStandbyAllowancePerformApproval = () => {
  const pageInfo = {
    title: '審批申請\\審審批候命津貼(適用於SER)'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"審批候命津貼(適用於SER)"} sx={{ overflow: 'scroll' }}>
        <Typography variant='h7' textAlign={'LEFT'}>只適用於審批SER考勤的用戶</Typography>
        <Typography variant='h7' textAlign={'LEFT'} display="block">在下方的功能選項表中，選擇審批，並在上方的選項，選擇考勤</Typography>
        <Typography variant='h7' textAlign={'LEFT'}>   </Typography>



        <ol>
          <li><Typography variant='subtitle1' textAlign={'LEFT'}>如有需要審批候命津貼的考勤紀錄，該紀錄的右上方會顯示一個橙色有SA字樣的圖示，點擊該紀錄</Typography>
          </li>



          <ContentImage image={img1}
            imageType="y" yWidth="500px"
          />

          <li><Typography variant='subtitle1' textAlign={'LEFT'}>按實際情況選擇(1) 是否有缺席，填上備註(如適用)，再點擊(2) 確定，以完成審批候命津貼程序</Typography>
          </li>



          <ContentImage image={img2}
            imageType="y" yWidth="500px"
          />
          <li><Typography variant='subtitle1' textAlign={'LEFT'}>完成審批候命津貼後，該考勤紀錄的橙色SA字樣圖示會消失，並可繼續審批該考勤紀錄</Typography>
          </li>

          
        </ol>
      </ContentPart>
    </BasePage >
  )
}
