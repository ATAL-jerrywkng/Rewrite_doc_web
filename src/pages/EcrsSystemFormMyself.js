import React from 'react'
import { BasePage } from '../components/BasePage'

import { CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import img1 from '../asserts/claim_add.png'
import img2 from '../asserts/claim_calendar.png'
import img3 from '../asserts/claim3.png'
import img4 from '../asserts/ec_detail.png'
import img5 from '../asserts/tc_4.png'
import img6 from '../asserts/tc_3.png'

export const EcrsSystemFormMyself = () => {
  const pageInfo = {
    title: 'ECRS自墊費用報銷系統\\新增報銷表(自墊費用)'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"新增「自墊費用報銷表」 "} sx={{ overflow: 'scroll' }}>

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
          sx={{ height: '1550px', width: '700px', margin: '0 auto' }}
          image={img2}
        />

        <Typography variant='h6' textAlign={'LEFT'}>3.    根據工作編號或名稱搜索，輸入相關工作資料</Typography>
        <Typography variant='h6' textAlign={'LEFT'}>4.    報銷類型: 自墊費用報銷，並輸入報銷的{`<性質與目的/支出描述>`}</Typography>
        <Typography variant='h6' textAlign={'LEFT'}>5.    點擊{`<+支出>`}進入另一版面填上相關資料</Typography>
        
        <CardMedia
          sx={{ height: '1100px', width: '900px', margin: '0 auto' }}
          image={img3}
        />

        <Typography variant='h6' textAlign={'LEFT'}>6.    在{`<+支出>`}版面內，輸入 {`<成本類別>`}/{`<項目編碼>`}/{`<單件價格>`}及{`<數量>`}，完成後點擊{`<完成>`}</Typography>
        
        <CardMedia
          sx={{ height: '1100px', width: '900px', margin: '0 auto' }}
          image={img4}
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
