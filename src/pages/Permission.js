import React from 'react'
import { BasePage } from '../components/BasePage'
import { CardMedia, Typography } from '@mui/material'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';



export const Permission = () => {
  const pageInfo = {
    title: '授權'
  }
  return (
    <BasePage  {...pageInfo}>
      <ContentPart title={"授權"} sx={{ overflow: 'scroll' }}>

        <Typography variant='h6' textAlign={'LEFT'}>Contents still unknown, TBC.....</Typography>


      </ContentPart>
    </BasePage>
  )
}
