import React from 'react'
import { BasePage } from '../components/BasePage'
import { CardMedia,
   Grid
  , Typography
 } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import img1 from '../asserts/threedots.png'
import img2 from '../asserts/option.png'

export const TimesheetSummary = () => {
  const pageInfo = {
    title: 'Timesheet考勤系統\\考勤總覽'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"考勤總覽"} sx={{ overflow: 'scroll' }}>
        <ol>
          <li>
            <Typography variant='subtitle1' textAlign={'LEFT'}>點選有考勤紀錄的日子(綠點或紅點)，相關考勤紀錄資料會於下方顯示</Typography>
          </li>
          <li>
            <Typography variant='subtitle1' textAlign={'LEFT'}>可查閱上月或下月(如有)之紀錄</Typography>
          </li>
          <li>
            <Grid container alignItems={'center'}>
              <Grid item >
                <Typography variant='subtitle1' textAlign={'LEFT'}>點選</Typography>
              </Grid>
              <Grid item >
                <CardMedia sx={{ height: '50px', width: '50px' }} image={img1} element="img" />
              </Grid>
              <Grid item >
                <Typography variant='subtitle1' textAlign={'LEFT'}>後，可以點擊{`<遞交>`}</Typography>
              </Grid>
              <Grid item >
                <CardMedia sx={{ height: '50px', width: '50px' }} image={img2} />
              </Grid>
              <Grid item >
                <Typography variant='subtitle1' textAlign={'LEFT'}> 考勤紀錄或點擊{`<圖例>`}查詢圖例說明</Typography>
              </Grid>
            </Grid>

          </li>
        </ol>

      </ContentPart>
    </BasePage >
  )
}
