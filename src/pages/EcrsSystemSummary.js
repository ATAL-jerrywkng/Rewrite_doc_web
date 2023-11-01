import React from 'react'
import { BasePage } from '../components/BasePage'


import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import img1 from '../asserts/claim_summary2.PNG'
import { ContentImage } from '../components/ContentImage';
import { CardMedia, Grid, Typography } from '@mui/material'
import img2 from '../asserts/threedots.png'
import img3 from '../asserts/ClaimOnlySummary1.PNG'
import img4 from '../asserts/ClaimOnlySummary2.PNG'
import img5 from '../asserts/option2.PNG'

export const EcrsSystemSummary = () => {
  const pageInfo = {
    title: 'ECRS自墊費用報銷系統\\報銷總覽'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"報銷總覽"} sx={{ overflow: 'scroll' }}>

        <Typography variant='h7' textAlign={'LEFT'}>    顯示所選時段之報銷紀錄，可以點擊相關紀錄以查閱詳細資料</Typography>
        <ContentImage
          // sx={{ height: '1242px' }} 
          imageType="y" yWidth="500px"
          image={img1}
        />

        <Grid container alignItems={'center'} spacing={1}>

          <Grid item >
            <Typography variant='subtitle1' textAlign={'LEFT'}>點選</Typography>
          </Grid>
          <Grid item >
            <ContentImage sx={{ height: '20px', width: '20px' }} image={img2} />

          </Grid>
          <Grid item >
            <Typography variant='subtitle1' textAlign={'LEFT'}>後，可以點擊</Typography>

          </Grid>

          <Grid item >
                <ContentImage sx={{ height: '100px', width: '100px' }} image={img5} />

              </Grid>

        </Grid>
        <Typography variant='subtitle1' textAlign={'LEFT'}><b>{`<報銷指引>`}</b> 以參閱相關指引 (會另開瀏覽器顯示)</Typography>
        <Typography variant='subtitle1' textAlign={'LEFT'}><b>{`<報銷總覽>`}</b> 以查看選取時段之報銷總覽</Typography>
        <ContentImage
          // sx={{ height: '1242px' }} 
          imageType="y" yWidth="500px"
          image={img3}
        />
        <ContentImage
          // sx={{ height: '1242px' }} 
          imageType="y" yWidth="500px"
          image={img4}
        />
      </ContentPart>
    </BasePage>
  )
}
