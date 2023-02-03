import React from 'react'
import { BasePage } from '../components/BasePage'

export const MySummary = () => {
  const pageInfo = {
    title: '我的總覽'
  }
  return (
    <BasePage  {...pageInfo}>
      <div>MySummary</div>
    </BasePage>
  )
}
