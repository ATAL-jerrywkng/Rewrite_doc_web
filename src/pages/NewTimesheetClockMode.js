import React from 'react'
import { BasePage } from '../components/BasePage'
import { CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import img1 from '../asserts/img6.png'
import img2 from '../asserts/hour_mode_1.png'
import img3 from '../asserts/hour_mode_2.png'
import img4 from '../asserts/hour_mode_3.png'
import { ContentImage } from '../components/ContentImage';

import img5 from '../asserts/addClaimAfterTSHour.png'



export const NewTimesheetClockMode = () => {
  const pageInfo = {
    title: 'Timesheet考勤系統\\新增考勤表(時鐘模式)'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"新增考勤表(時鐘模式)"} sx={{ overflow: 'scroll' }}>


        <Typography variant='h7' textAlign={'LEFT'}>在下方的功能選項表中，選擇考勤</Typography>
        <Typography variant='h7' textAlign={'LEFT'} display="block">請注意: 你只能為自己填寫的考勤。不能為其他同事輸入。</Typography>
        <Typography variant='h6' textAlign={'left'}>   </Typography>
        <ol>
          <li>
            <Typography variant='subtitle1' textAlign={'left'}>選擇日子，點擊右下方的按鈕</Typography>
          </li>
          <ContentImage

            sx={{ height: '1242px' }} image={img1}
          />

          <li>
            <Typography variant='subtitle1' textAlign={'left'}>選擇適合的{`<告假類型>`}，如非請假，可選擇N/A</Typography>
          </li>
          <li>
            <Typography variant='subtitle1' textAlign={'left'}>根據工作編號或名稱搜索，輸入相關工作資料</Typography>
          </li>
          <ContentImage


            sx={{ height: '1242px' }} image={img2}
          />
          <li>
            <Typography variant='subtitle1' textAlign={'left'}>輸入{`<基本工時>`}，及是否{`<包括午餐時間>`}</Typography>
          </li>
          <li>
            <Typography variant='subtitle1' textAlign={'left'}>輸入加班時段 OT1 / OT2 / OT3 (如適用)，及是否{`<包括午餐時間>`}</Typography>
          </li>
          <ContentImage

            sx={{ height: '1242px' }} image={img3}
          />

          <li>
            <Typography variant='subtitle1' textAlign={'left'}>如需附上圖片，可點擊{`<相片庫>`}或{`<相機>`}直接拍攝 (最多10張相片)</Typography>
          </li>
          <li>
            <Typography variant='subtitle1' textAlign={'left'}>完成輸入所有資料後，點擊{`<儲存>`}以保存此考勤紀錄</Typography>
          </li>
          <ContentImage sx={{ height: '1242px' }} image={img4} />
          <li>
            <Typography variant='subtitle1' textAlign={'left'}>儲存後，如需新增有關工作的車費報銷，可以直接點擊{`<需要同時新增車費報銷?>`}，如沒有，可點擊{`<完成>`}離開</Typography>
          </li>
          <ContentImage sx={{ height: '1242px' }} image={img5} />
        </ol>

      </ContentPart>
    </BasePage >
  )
}
