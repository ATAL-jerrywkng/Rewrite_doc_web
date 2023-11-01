import React from 'react'
import { BasePage } from '../components/BasePage'

import { CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import img1 from '../asserts/claim_add2.png'
import img2 from '../asserts/claim_calendar.png'
import img3 from '../asserts/tcBM_1.png'
import img4 from '../asserts/tcBM_2.png'
import img5 from '../asserts/tcBM_3.png'
import img6 from '../asserts/tc_3.png'

import { ContentImage } from '../components/ContentImage';
export const EcrsSystemFormCarBM = () => {
  const pageInfo = {
    title: 'ECRS自墊費用報銷系統\\新增「交通費報銷表」- 因公行車'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"新增「交通費報銷表」- 因公行車 "} sx={{ overflow: 'scroll' }}>

        <Typography variant='h7' textAlign={'LEFT'}>在下方的功能選項表中，選擇報銷</Typography>
        <Typography variant='h7' textAlign={'LEFT'} display="block">請注意: 你只能為自己填寫的報銷。不能為其他同事輸入。</Typography>
        <Typography variant='h7' textAlign={'LEFT'}>   </Typography>
        <ol>
          <li>
            <Typography variant='subtitle1' textAlign={'LEFT'}>點擊右下方的按鈕</Typography>
          </li>
          <ContentImage

            // sx={{ height: '1242px' }} 
            imageType="y" yWidth="500px"
            image={img1}
          />
          <li>
            <Typography variant='subtitle1' textAlign={'LEFT'}>選擇日子，完成後點擊{`<選擇日期>`}</Typography>
          </li>
          <ContentImage

            // sx={{ height: '1242px' }} 
            imageType="y" yWidth="500px"
            image={img2}
          />
          <li>

            <Typography variant='subtitle1' textAlign={'LEFT'}>根據工作編號或名稱搜索，輸入相關工作資料</Typography>
          </li>
          <li>

            <Typography variant='subtitle1' textAlign={'LEFT'}>選擇報銷類型: <b>交通費報銷</b>，並選擇交通費類型: <b>因公行車</b>，以及輸入{`<地點>`}</Typography>
          </li>
          <ContentImage
            imageType="y" yWidth="500px"
            // sx={{ height: '1242px' }} 
            image={img3}
          />
          <li>

            <Typography variant='subtitle1' textAlign={'LEFT'}>選擇適當的{`<車牌登記號碼>`}及填上{`<行程目的>`}</Typography>
          </li>
          <ContentImage
            imageType="y" yWidth="500px"
            // sx={{ height: '1242px' }} 
            image={img4}
          />
          <li>

            <Typography variant='subtitle1' textAlign={'LEFT'}>如行程包括了{`<天橋、隧道及幹線費用>`}、{`<泊車費>`}或{`<汽油費>`}，可填上相關支出，如有多於一程天橋、隧道及幹線費用支出，可點擊{`<+路線>`}新增另一項相關費用支出</Typography>
          </li>
          <ContentImage
            imageType="y" yWidth="500px"
            // sx={{ height: '1242px' }} 
            image={img5} />
          <li>

           
            <Typography variant='subtitle1' textAlign={'LEFT'}>如需附上圖片，可點擊{`<相片庫>`}上載圖片或點擊{`<相機>`}直接拍攝(最多10張相片) (請注意: 報銷泊車費必須遞交附件)</Typography>
          </li>
          <li>

            <Typography variant='subtitle1' textAlign={'LEFT'}>完成輸入所有資料後，點擊{`<儲存>`}先儲存此報銷紀錄或點擊{`<儲存並遞交>`}直接遞交</Typography>
          </li>

          <ContentImage

            // sx={{ height: '1242px' }} 
            imageType="y" yWidth="500px"
            image={img6}
          />
        </ol>
      </ContentPart>
    </BasePage>
  )
}
