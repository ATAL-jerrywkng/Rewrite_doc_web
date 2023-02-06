import React from 'react'
import { BasePage } from '../components/BasePage'
import { CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';
import img1 from '../asserts/img12a.jpg'
import img2 from '../asserts/img12.jpg'
import img3 from '../asserts/per_mode_3.png'
import { ContentImage } from '../components/ContentImage';
export const AddDateToTimesheet = () => {
  const pageInfo = {
    title: 'Timesheet考勤系統\\長按選取“日期”添加到考勤表'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"長按選取日期添加到考勤表"} sx={{ overflow: 'scroll' }}>

        <Typography variant='h6' textAlign={'LEFT'}>1.    長按選取相關日期(綠點:考勤, 黃點:報銷)</Typography>
        <ContentImage
          sx={{ }}
          image={img1}
        />
        <Typography variant='h6' textAlign={'LEFT'}>2.    選擇拷貝到的日期(可多於一個日子)選擇拷貝(1)考勤或(2)考勤和報銷</Typography>
        <ContentImage
          sx={{ }}
          image={img2}
        />

      </ContentPart>
    </BasePage>
  )
}
