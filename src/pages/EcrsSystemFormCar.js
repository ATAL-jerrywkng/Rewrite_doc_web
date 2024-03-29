import React from 'react'
import { BasePage } from '../components/BasePage'

import { CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import img1 from '../asserts/claim_add2.png'
import img2 from '../asserts/claim_calendar.png'
import img3 from '../asserts/tc_1.png'
import img4 from '../asserts/tc_2.png'
import img5 from '../asserts/tc_4.png'
import img6 from '../asserts/tc_3.png'

import { ContentImage } from '../components/ContentImage';
export const EcrsSystemFormCar = () => {
  const pageInfo = {
    title: 'ECRS自墊費用報銷系統\\新增「交通費報銷表」- 普通車程'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"新增「交通費報銷表」- 普通車程"} sx={{ overflow: 'scroll' }}>

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

            <Typography variant='subtitle1' textAlign={'LEFT'}>選擇報銷類型: <b>交通費報銷</b>，並選擇交通費類型: <b>普通車程</b>，以及輸入{`<單雙程>`}和{`<地點>`}</Typography>
          </li>
          <ContentImage
            imageType="y" yWidth="500px"
            // sx={{ height: '1242px' }} 
            image={img3}
          />
          <li>

            <Typography variant='subtitle1' textAlign={'LEFT'}>輸入交通工具類型及車錢</Typography>
          </li>
          <li>

            <Typography variant='subtitle1' textAlign={'LEFT'}>如交通工具包括的士，必須輸入{`<乘搭的士的理由>`}</Typography>
          </li>
          <li>

            <Typography variant='subtitle1' textAlign={'LEFT'}>如同一日有多於一程車程，可點擊{`<+行程>`}新增另一項車程資料，可報銷之款項會於{`<合共>`}顯示</Typography>
          </li>
          <ContentImage
            imageType="y" yWidth="500px"
            // sx={{ height: '1242px' }} 
            image={img4}
          />
          <li>

            <Typography variant='subtitle1' textAlign={'LEFT'}>如交通費類型為{`<直接由家出發>`}或{`<直接返家>`}，{`<扣除差額>`}會顯示{`<由家出發>`}/{`<直接返家>`}之交通費，而可報銷之款項(合共) = 該車程交通費 - 由家出發/返家之交通費</Typography>
          </li>

          <ContentImage

            // sx={{ height: '1242px' }} 
            imageType="y" yWidth="500px"
            image={img5}
          />
          <li>

            <Typography variant='subtitle1' textAlign={'LEFT'}>如需附上圖片，可點擊{`<相片庫>`}上載圖片或點擊{`<相機>`}直接拍攝(最多10張相片) (請注意: 乘搭的士必須遞交附件)</Typography>
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
