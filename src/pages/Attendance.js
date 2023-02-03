import React from 'react'
import { BasePage } from '../components/BasePage'

export const Attendance = () => {
  const pageInfo = {
    title: '考勤用戶注意事項'
  }
  return (
    <BasePage  {...pageInfo}>
      <div>Attendance</div>
    </BasePage>
  )
}
