import React from 'react'
import { BasePage } from '../components/BasePage'

export const HasAccount = () => {
  const pageInfo = {
    title: '已擁有公司電郵地址的同事'
  }
  return (
    <BasePage  {...pageInfo}>
      <div>HasAccount</div>
    </BasePage>
  )
}
