import React from 'react'
import { BasePage } from '../components/BasePage'

import { CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import img1 from '../asserts/claim_add.png'
import img2 from '../asserts/claim_calendar.png'
import img3 from '../asserts/tc_1.png'
import img4 from '../asserts/tc_2.png'
import img5 from '../asserts/tc_4.png'
import img6 from '../asserts/tc_3.png'

export const EcrsSystemFormCar = () => {
  const pageInfo = {
    title: 'ECRS自墊費用報銷系統\\新增報銷表(交通費)'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"新增「交通費報銷表」 "} sx={{ overflow: 'scroll' }}>

        <Typography variant='h6' textAlign={'LEFT'}>在下方的功能選項表中，選擇報銷</Typography>
        <Typography variant='h6' textAlign={'LEFT'}>請注意: 你只能為自己填寫的報銷。不能為其他同事輸入。</Typography>
        <Typography variant='h6' textAlign={'LEFT'}>   </Typography>
        <Typography variant='h6' textAlign={'LEFT'}>1.    點擊右上角的{`<+>`}按鈕</Typography>
        <CardMedia
          sx={{ height: '1500px', width: '800px', margin: '0 auto' }}
          image={img1}
        />

        <Typography variant='h6' textAlign={'LEFT'}>2.    選擇日子，完成後點擊{`<選擇日期>`}</Typography>
        <CardMedia
          sx={{ height: '950px', width: '500px', margin: '0 auto' }}
          image={img2}
        />

        <Typography variant='h6' textAlign={'LEFT'}>3.    根據工作編號或名稱搜索，輸入相關工作資料</Typography>
        <Typography variant='h6' textAlign={'LEFT'}>4.    選擇報銷類型: 交通費報銷，並輸入交通費類型/單雙程/地點</Typography>
        <CardMedia
          sx={{ height: '1100px', width: '900px', margin: '0 auto' }}
          image={img3}
        />

        <Typography variant='h6' textAlign={'LEFT'}>5.    輸入車程類型及車錢</Typography>
        <Typography variant='h6' textAlign={'LEFT'}>6.    如同一日有多於一程車程，可點擊{`<+行程>`}新增另一項車程資料，可報銷之款項會於{`<合共>`}顯示</Typography>
        <CardMedia
          sx={{ height: '1100px', width: '900px', margin: '0 auto' }}
          image={img4}
        />

        <Typography variant='h6' textAlign={'LEFT'}>7.    如交通費類型為{`<直接由家出發>`}或{`<直接返家>`}，{`<扣除差額>`}會顯示{`<由家出發>`}/{`<直接返家>`}之交通費，而可報銷之款項(合共) = 該車程交通費 - 由家出發/返家之交通費</Typography>

        <CardMedia
          sx={{ height: '1700px', width: '900px', margin: '0 auto' }}
          image={img5}
        />

        <Typography variant='h6' textAlign={'LEFT'}>8.    如需附上圖片，可點擊{`<相片庫>`}上載圖片或點擊{`<相機>`}直接拍攝(最多10張相片)</Typography>

        <Typography variant='h6' textAlign={'LEFT'}>9.    完成輸入所有資料後，點擊{`<儲存>`}先儲存此報銷紀錄或點擊{`<儲存並遞交>`}直接遞交</Typography>

        <CardMedia
          sx={{ height: '400px', width: '400px', margin: '0 auto' }}
          image={img6}
        />
      </ContentPart>
    </BasePage>
  )
}
