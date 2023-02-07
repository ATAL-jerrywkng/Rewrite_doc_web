import React from 'react'
import { BasePage } from '../components/BasePage'
import { CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import img1 from '../asserts/img6.png'
import img2 from '../asserts/per_mode_1.png'
import img3 from '../asserts/per_mode_3.png'
import img4 from '../asserts/addClaimAfterTS.png'

export const NewTimesheetPercentMode = () => {
  const pageInfo = {
    title: 'Timesheet考勤系統\\新增考勤表 (Percent模式)'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"新增考勤表(Percent模式)"} sx={{ overflow: 'scroll' }}>

        <Typography variant='h6' textAlign={'LEFT'}>在下方的功能選項表中，選擇考勤</Typography>
        <Typography variant='h6' textAlign={'LEFT'}>請注意: 你只能為自己填寫的考勤。不能為其他同事輸入。</Typography>
        <Typography variant='h6' textAlign={'left'}>   </Typography>
        <Typography variant='h6' textAlign={'left'}>1.    選擇日子，點擊右下方的按鈕   </Typography>
        <CardMedia
          sx={{ height: '800px', width: '400px', margin: '0 auto' }}
          image={img1}
        />

        <Typography variant='h6' textAlign={'left'}>2.    選擇適合的{`<告假類型>`}，如非請假，可選擇N/A</Typography>
        <Typography variant='h6' textAlign={'left'}>3.    根據工作編號或名稱搜索，輸入相關工作資料，並輸入其所佔percentage (%)</Typography>
        <Typography variant='h6' textAlign={'left'}>4.    如同一日有多於一個工作編號，可點擊{`<+工作>`}新增另一項工作資料，而每一日的所有工作percentage加總會是100%</Typography>

        <CardMedia
          sx={{ height: '550px', width: '500px', margin: '0 auto' }}
          image={img2}
        />

        <Typography variant='h6' textAlign={'left'}>5.    如需附上圖片，可點擊{`<相片庫>`}或{`<相機>`}直接拍攝 (最多10張相片)</Typography>
        <Typography variant='h6' textAlign={'left'}>6.    完成輸入所有資料後，點擊{`<儲存>`}以保存此考勤紀錄</Typography>
        <CardMedia
          sx={{ height: '300px', width: '500px', margin: '0 auto' }}
          image={img3}
        />
        <Typography variant='h6' textAlign={'left'}>7.    儲存後，如需新增有關工作的車費報銷，可以直接點擊{`<需要同時新增車費報銷?>`}，如沒有，可點擊{`<完成>`}離開</Typography>
        <CardMedia
          sx={{ height: '800px', width: '500px', margin: '0 auto' }}
          image={img4}
        />
      </ContentPart>
    </BasePage>
  )
}
