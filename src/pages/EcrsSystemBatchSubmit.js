import React from 'react'
import { BasePage } from '../components/BasePage'
import {
  CardMedia,
  Grid
  , Typography
} from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import img1 from '../asserts/BatchSubmitClaim4.png'
import img2 from '../asserts/BatchSubmitClaim5.png'
import img3 from '../asserts/BatchSubmitClaim6.png'
import img4 from '../asserts/threedots.png'
import { ContentImage } from '../components/ContentImage';

export const EcrsSystemBatchSubmit = () => {
  const pageInfo = {
    title: 'ECRS自墊費用報銷系統\\一次遞交多條報銷紀錄'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"一次遞交多條報銷紀錄"} sx={{ overflow: 'scroll' }}>

        <Typography variant='h7' textAlign={'LEFT'}>在報銷總覽內，可一次遞交多條報銷紀錄，包括交通費及自墊費用</Typography>
        <Typography variant='h7' textAlign={'LEFT'}>   </Typography>
        <ol>
          <li>
            <Typography variant='subtitle1' textAlign={'LEFT'}>長按第一條需遞交的報銷紀錄，紅色剔號會出現</Typography>
          </li>
          <ContentImage

            // sx={{ height: '1242px' }} 
            imageType="y" yWidth="500px"
            image={img1}
          />
          <li>
            <Typography variant='subtitle1' textAlign={'LEFT'}>按需要繼續剔選(1)其他需遞交的報銷紀錄，或按(2){`<所有>`}將版面上所有未遞交的紀錄一次過剔選</Typography>
          </li>
          <ContentImage
            imageType="y" yWidth="500px"
            image={img2}
          />
        
          <li>

            <Typography variant='subtitle1' textAlign={'LEFT'}>剔選完成後，點擊右上角的{`<遞交>`}便可一次遞交多條報銷紀錄</Typography>
          </li>
          <ContentImage
            imageType="y" yWidth="500px"
            // sx={{ height: '1242px' }} 
            image={img3}
          />
          
        </ol>
      </ContentPart>
    </BasePage >
  )
}
