import React from 'react'
import { BasePage } from '../components/BasePage'
import { CardMedia, Grid, Typography } from '@mui/material'

import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import img1 from '../asserts/threedots.png'
import img2 from '../asserts/option_v2.PNG'
import img3 from '../asserts/ts_summary.png'
import img4 from '../asserts/TSnClaimSummary1.PNG'
import img5 from '../asserts/TSnClaimSummary2.PNG'
import img6 from '../asserts/TSnClaimSummary3.PNG'
import { ContentImage } from '../components/ContentImage';



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
          <ContentImage
            // sx={{ height: '1242px' }} 
            imageType="y" yWidth="500px"
            image={img3}
          />
          <li>
            <Grid container alignItems={'center'} spacing={1}>

              <Grid item >
                <Typography variant='subtitle1' textAlign={'LEFT'}>點選</Typography>
              </Grid>
              <Grid item >
                <ContentImage sx={{ height: '20px', width: '20px' }} image={img1} />

              </Grid>
              <Grid item >
                <Typography variant='subtitle1' textAlign={'LEFT'}>後，可以點擊</Typography>

              </Grid>

              <Grid item >
                <ContentImage sx={{ height: '50px', width: '20px' }} image={img2} />

              </Grid>

            </Grid>
            <Typography variant='subtitle1' textAlign={'LEFT'}><b>{`<遞交考勤表>`}</b> 以遞交考勤紀錄</Typography>
            <Typography variant='subtitle1' textAlign={'LEFT'}><b>{`<遞交報銷>`}</b> 以遞交報銷申請</Typography>
            <Typography variant='subtitle1' textAlign={'LEFT'}><b>{`<圖例>`}</b> 以查看圖示</Typography>
            <Typography variant='subtitle1' textAlign={'LEFT'}><b>{`<考勤報銷總覽>`}</b> 以查看選取月份之考勤報銷總覽</Typography>

            <ContentImage
              // sx={{ height: '1242px' }} 
              imageType="y" yWidth="500px"
              image={img4}
            />
            <ContentImage
              // sx={{ height: '1242px' }} 
              imageType="y" yWidth="500px"
              image={img5}
            />
            <ContentImage
              // sx={{ height: '1242px' }} 
              imageType="y" yWidth="500px"
              image={img6}
            />
          </li>

        </ol>

      </ContentPart>
    </BasePage >
  )
}
