import React from 'react'
import { BasePage } from '../components/BasePage'

export const TimesheetSummary = () => {
  const pageInfo = {
    title: '考勤總覽'
  }
  return (
    <BasePage  {...pageInfo}>
      <div>TimesheetSummary</div>
    </BasePage>
  )
}
