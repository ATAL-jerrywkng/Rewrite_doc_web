import React from 'react'
import { BasePage } from '../components/BasePage'

export const NewTimesheetPercentMode = () => {
  const pageInfo = {
    title: '新增考勤表 (Percent模式)'
  }
  return (
    <BasePage  {...pageInfo}>
      <div>NewTimesheetPercentMode</div>
    </BasePage>
  )
}
