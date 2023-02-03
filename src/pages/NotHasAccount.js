import React from 'react'
import { BasePage } from '../components/BasePage'

export const NotHasAccount = () => {
  const pageInfo = {
    title: '沒有公司電郵地址的同事'
  }
  return (
    <BasePage  {...pageInfo}>
      <div>NotHasAccount</div>
    </BasePage>
  )
}
