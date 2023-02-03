import React from 'react'
import { BasePage } from '../components/BasePage'

export const AddDateToTimesheet = () => {
  const pageInfo = {
    title: '長按選取“日期”添加到考勤表'
  }
  return (
    <BasePage  {...pageInfo}>
      <div>AddDateToTimesheet</div>
    </BasePage>
  )
}
