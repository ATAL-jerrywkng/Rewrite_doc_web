import React from 'react'

export const SummaryPageBase = (props) => {
  return (
    <div>
      SummaryPageBase
      Title:{props?.title}
      {props.children}
    </div>
  )
}
