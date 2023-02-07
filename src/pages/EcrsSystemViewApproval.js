import React from 'react'
import { BasePage } from '../components/BasePage'

import { CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import img1 from '../asserts/ecApprovalThreeDots.png'
import img2 from '../asserts/ecApprovalPath.png'
import img3 from '../asserts/threedots.png'

export const EcrsSystemViewApproval = () => {
  const pageInfo = {
    title: 'ECRS自墊費用報銷系統\\查閱「自墊費用」報銷審批歷程'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"查閱「自墊費用」報銷審批歷程"} sx={{ overflow: 'scroll' }}>

      
        <Typography variant='h6' textAlign={'LEFT'}>1.    點擊需要查閱的自墊費用報銷，並點擊右上角的<CardMedia sx={{ height: '20px', width: '20px', margin: '0' }}image={img3}/>後，再點擊{`<審批歷程>`}</Typography>
        <CardMedia
          sx={{ height: '650px', width: '1000px', margin: '0 auto' }}
          image={img1}
        />

        <Typography variant='h6' textAlign={'LEFT'}>2.    自墊費用報銷審批歷程會於此版面顯示</Typography>
        <CardMedia
          sx={{ height: '1300px', width: '1300px', margin: '0 auto' }}
          image={img2}
        />

        
      </ContentPart>
    </BasePage>
  )
}
