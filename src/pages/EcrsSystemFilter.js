import React from 'react'
import { BasePage } from '../components/BasePage'

import { CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import img1 from '../asserts/claim_filter2.PNG'
import img2 from '../asserts/claim_filter_detail.png'
import img3 from '../asserts/claim_filter_detail2.png'
import img4 from '../asserts/claim_filter_detail4.PNG'

import { ContentImage } from '../components/ContentImage';


export const EcrsSystemFilter = () => {
  const pageInfo = {
    title: 'ECRS自墊費用報銷系統\\篩選'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"篩選"} sx={{ overflow: 'scroll' }}>
        <ol>
          <li>
            <Typography variant='subtitle1' textAlign={'LEFT'}>點擊{`<篩選>`}後，進入{`<篩選>`}版面</Typography>
          </li>
          <ContentImage

            // sx={{ height: '1242px' }} 
            imageType="y" yWidth="500px"
            image={img1}
          />
          <li>
            <Typography variant='subtitle1' textAlign={'LEFT'}>可按需要選擇需查閱的報銷紀錄類型或狀態，亦可自訂顯示排序，完成後點擊{`<選擇>`}</Typography>
          </li>
          <ContentImage
            // sx={{ height: '1242px' }} 
            imageType="y" yWidth="500px"
            image={img2}
          />
          <li>
            <Typography variant='subtitle1' textAlign={'LEFT'}>篩選功能生效時，其按鈕會轉為橙色{`<選擇>`}</Typography>
          </li>
          <ContentImage
            // sx={{ height: '1242px' }} 
            imageType="y" yWidth="500px"
            image={img4}
          />
          <li>
            <Typography variant='subtitle1' textAlign={'LEFT'}>亦可自訂需要查詢之時段，完成後點擊{`<選擇日期>`}</Typography>
          </li>
          <ContentImage
            // sx={{ height: '1242px' }} 
            imageType="y" yWidth="500px"
            image={img3}
          />
        </ol>

      </ContentPart>
    </BasePage>
  )
}
