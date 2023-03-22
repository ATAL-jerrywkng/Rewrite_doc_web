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
import img2 from '../asserts/ecApprovalPath.png'
import img3 from '../asserts/threedots.png'
import { ContentImage } from '../components/ContentImage';

export const EcrsSystemViewApproval = () => {
  const pageInfo = {
    title: 'ECRS自墊費用報銷系統\\查閱報銷審批歷程'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"查閱報銷審批歷程"} sx={{ overflow: 'scroll' }}>

        <ol>

          <Grid container alignItems={'center'}>
            <Grid item >
              <Typography variant='subtitle1' textAlign={'LEFT'}>點擊需要查閱的自墊費用報銷，並點擊右上角的</Typography>
            </Grid>
            <Grid item >
              <ContentImage sx={{ height: '20px', width: '20px' }} image={img3} />
            </Grid>
            <Grid item ><Typography variant='subtitle1' textAlign={'LEFT'}>後，再點擊{`<審批歷程>`}，自墊費用報銷的審批</Typography>
            </Grid>
            <Grid item ><Typography variant='subtitle1' textAlign={'LEFT'}>歷程會於此版面顯示</Typography>
            </Grid>
          </Grid>


          <ContentImage image={img1}
            imageType="y" yWidth="500px"
          />


          <ContentImage image={img2}
            imageType="y" yWidth="500px"
          />
        </ol>

      </ContentPart>
    </BasePage >
  )
}
